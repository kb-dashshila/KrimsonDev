import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    icon: FaEnvelope,
    href: "mailto:hello@example.com",
  },
  {
    icon: RiTwitterXFill,
    href: "https://x.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-theme bg-[color:var(--card)] text-[color:var(--text-primary)] transition-all hover:border-purple-500 hover:text-purple-500 dark:hover:text-purple-400"
          >
            <Icon size={22} />
          </Link>
        );
      })}
    </div>
  );
}
