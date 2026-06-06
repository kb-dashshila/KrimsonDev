import Image from "next/image";

const techIcons = [
  {
    src: "/react-icon.png",
    alt: "React",
    className: "top-24 left-0",
  },
  {
    src: "/js-icon.png",
    alt: "JavaScript",
    className: "bottom-32 left-8",
  },
  {
    src: "/next-icon.png",
    alt: "Next.js",
    className: "top-28 right-0",
  },
  {
    src: "/aem-icon.webp",
    alt: "AEM",
    className: "bottom-24 right-4",
  },
];

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-purple-600/20 blur-[90px]" />

      {/* Rings */}
      <div className="absolute h-[380px] w-[380px] rounded-full border border-blue-500/20" />
      <div className="absolute h-[300px] w-[300px] rounded-full border border-purple-500/30" />
      <div className="absolute h-[220px] w-[220px] rounded-full border border-cyan-500/20" />

      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0b1220] p-4 shadow-2xl">
        <Image
          src="/profile.png"
          alt="Profile"
          width={420}
          height={520}
          priority
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Floating Icons */}
      {techIcons.map((icon) => (
        <div
          key={icon.alt}
          className={`absolute ${icon.className}
          flex h-20 w-20 items-center justify-center rounded-2xl
          border border-slate-700 bg-slate-900/80 backdrop-blur-md`}
        >
          <Image src={icon.src} alt={icon.alt} width={42} height={42} />
        </div>
      ))}
    </div>
  );
}
