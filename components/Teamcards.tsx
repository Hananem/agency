import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  badgeColor: string;
};

const team: TeamMember[] = [
  {
    name: "Sarah Jackson",
    role: "Senior Project Manager",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/team-sarah.jpg",
    badgeColor: "#e8a355",
  },
  {
    name: "Kayla Monten",
    role: "Lead Photographer & Director",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/team-kayla.jpg",
    badgeColor: "#a9d0ea",
  },
];

export default function TeamCards() {
  return (
    <section className="bg-[#f2f0dd] px-6 py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        {team.map((member) => (
          <div
            key={member.name}
            className="overflow-hidden rounded-3xl border border-[#4b4636]/20"
          >
            {/* Photo */}
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
              <span
                className="absolute left-6 top-6 whitespace-nowrap rounded-full border-2 border-[#4b4636] px-5 py-2 text-sm font-medium text-[#2b2820] sm:text-base"
                style={{ backgroundColor: member.badgeColor }}
              >
                {member.role}
              </span>
            </div>

            {/* Text panel */}
            <div className="bg-[#e8d95a] px-8 py-8">
              <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[#4b4636] sm:text-4xl">
                {member.name}
              </h3>
              <p className="mt-4 leading-relaxed text-[#4b4636]/80">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}