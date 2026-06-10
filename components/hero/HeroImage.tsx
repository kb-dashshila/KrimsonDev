import Image from "next/image";

const techIcons = [
  {
    src: "/react-icon.png",
    alt: "React",
    className: "top-10 left-0 md:top-24",
  },
  {
    src: "/js-icon.png",
    alt: "JavaScript",
    className: "bottom-12 left-2 md:bottom-32 md:left-8",
  },
  {
    src: "/next-icon.png",
    alt: "Next.js",
    className: "top-10 right-0 md:top-28",
  },
  {
    src: "/aem-icon.webp",
    alt: "AEM",
    className: "bottom-10 right-2 md:bottom-24 md:right-4",
  },
];

export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Glow */}
      <div className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full bg-purple-600/20 blur-[70px] md:blur-[90px]" />

      {/* Rings */}
      <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full border border-blue-500/20" />
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-purple-500/30" />
      <div className="absolute w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full border border-cyan-500/20" />

      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0b1220] p-3 md:p-4 shadow-2xl">
        <Image
          src="/profile.png"
          alt="Profile"
          width={420}
          height={520}
          priority
          className="w-[250px] sm:w-[300px] md:w-[420px] h-auto rounded-2xl object-cover"
        />
      </div>

      {/* Floating Icons */}
      {techIcons.map((icon) => (
        <div
          key={icon.alt}
          className={`absolute ${icon.className}
            flex items-center justify-center
            w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
            rounded-2xl border border-slate-700
            bg-slate-900/80 backdrop-blur-md`}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={42}
            height={42}
            className="w-6 sm:w-8 md:w-10 h-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
