import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // Adjust paths based on your actual file locations
import Footer from "@/components/Footer"; // Adjust paths based on your actual file locations
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rebel Riot Agency",
  description: "A Bold, Loud, and Unapologetic Creative Agency based in Los Angeles, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EFEFE0]">
        {/* Persistent top header navigation from image_607a39.png */}
        <Navbar />

        {/* Main page content area expands to push footer down if content is short */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Persistent bottom footer from image_6075bb.jpg */}
        <Footer />
      </body>
    </html>
  );
}