"use client";

import { useEffect, useRef } from "react";

type Props = {
  text?: string;
  bandColor?: string;
  textColor?: string;
  /** أعلى رقم = تموّج أسرع (اهتزاز الشريط نفسه) */
  waveSpeed?: number;
  /** أعلى رقم = حركة النص الأفقية أسرع */
  scrollSpeed?: number;
};

const VIEW_W = 1200;
const VIEW_H = 280;
const PERIOD = 800; // طول دورة موجة واحدة كاملة
const MID = 150;
const AMP = 65;
const THICKNESS = 100;
const SEGMENTS_PER_PERIOD = 8;

type Anchor = { x: number; y: number; m: number };
type Segment = {
  x0: number; y0: number;
  c1x: number; c1y: number;
  c2x: number; c2y: number;
  x1: number; y1: number;
};

function buildWaveSegments(phase: number, mid: number, amp: number): Segment[] {
  const k = (2 * Math.PI) / PERIOD;
  const step = PERIOD / SEGMENTS_PER_PERIOD;

  const anchors: Anchor[] = [];
  for (let x = 0; x <= VIEW_W; x += step) {
    const theta = x * k + phase;
    anchors.push({
      x,
      y: mid - amp * Math.sin(theta),
      m: -amp * Math.cos(theta) * k, // ميل المماس dy/dx
    });
  }
  if (anchors[anchors.length - 1].x < VIEW_W) {
    const theta = VIEW_W * k + phase;
    anchors.push({ x: VIEW_W, y: mid - amp * Math.sin(theta), m: -amp * Math.cos(theta) * k });
  }

  const segs: Segment[] = [];
  for (let i = 0; i < anchors.length - 1; i++) {
    const a = anchors[i];
    const b = anchors[i + 1];
    const dx = (b.x - a.x) / 3;
    segs.push({
      x0: a.x, y0: a.y,
      c1x: a.x + dx, c1y: a.y + a.m * dx,
      c2x: b.x - dx, c2y: b.y - b.m * dx,
      x1: b.x, y1: b.y,
    });
  }
  return segs;
}

function forwardPath(segs: Segment[]) {
  let d = `M${segs[0].x0},${segs[0].y0}`;
  for (const s of segs) d += ` C${s.c1x},${s.c1y} ${s.c2x},${s.c2y} ${s.x1},${s.y1}`;
  return d;
}

// يكمل نفس الـ path لكن راجع من اليمين لليسار (لازم القلم يكون عند نقطة النهاية أصلاً)
function backwardContinuation(segs: Segment[]) {
  let d = "";
  for (let i = segs.length - 1; i >= 0; i--) {
    const s = segs[i];
    d += ` C${s.c2x},${s.c2y} ${s.c1x},${s.c1y} ${s.x0},${s.y0}`;
  }
  return d;
}

export default function WavyMarquee({
  text = "Where Bold Ideas Break the Rules",
  bandColor = "#f3e07a",
  textColor = "#4b4636",
    waveSpeed = 0.09,   // كان 1.2 — قلّلها للتموّج الهادئ
  scrollSpeed = 3,
}: Props) {
  const bandRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const text1Ref = useRef<SVGTextPathElement>(null);
  const text2Ref = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    let raf = 0;
    let phase = 0;
    let scrollPct = 0;
    let last = performance.now();

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!reduceMotion) {
        phase += dt * waveSpeed;   // <-- هذا اللي يخلي الشريط "يتلوى" فعلياً
        scrollPct -= dt * scrollSpeed;
      }

      const topSegs = buildWaveSegments(phase, MID, AMP);
      const bottomSegs = buildWaveSegments(phase, MID + THICKNESS, AMP);
      const lineSegs = buildWaveSegments(phase, MID + THICKNESS / 2, AMP);

      const lastBottom = bottomSegs[bottomSegs.length - 1];
      const bandD =
        forwardPath(topSegs) +
        ` L${lastBottom.x1},${lastBottom.y1}` +
        backwardContinuation(bottomSegs) +
        " Z";

      bandRef.current?.setAttribute("d", bandD);
      lineRef.current?.setAttribute("d", forwardPath(lineSegs));

      const pctA = ((scrollPct % 100) + 100) % 100;
      const pctB = pctA - 100;
      text1Ref.current?.setAttribute("startOffset", `${pctA}%`);
      text2Ref.current?.setAttribute("startOffset", `${pctB}%`);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [waveSpeed, scrollSpeed]);

  const repeated = `${text}  ★  `.repeat(6);

  return (
    <div className="relative w-full ">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full h-32 sm:h-40 md:h-48"
        preserveAspectRatio="none"
      >
        <defs>
          <path ref={lineRef} id="wavy-text-line" d="" fill="none" />
        </defs>

        <path ref={bandRef} d="" fill={bandColor} />

        <text
          fill={textColor}
          fontSize="42"
          fontWeight="700"
          fontFamily="var(--font-heading, 'Poppins', sans-serif)"
        >
          <textPath ref={text1Ref} href="#wavy-text-line" startOffset="0%">
            {repeated}
          </textPath>
        </text>
        <text
          fill={textColor}
          fontSize="42"
          fontWeight="700"
          fontFamily="var(--font-heading, 'Poppins', sans-serif)"
        >
          <textPath ref={text2Ref} href="#wavy-text-line" startOffset="-100%">
            {repeated}
          </textPath>
        </text>
      </svg>
    </div>
  );
}