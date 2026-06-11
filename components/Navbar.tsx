"use client";

import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

type NavbarProps = {
  mobile?: boolean;
  onClick?: () => void;
};

export default function Navbar({ mobile = false, onClick }: NavbarProps) {
  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-2"
          : "flex items-center gap-4 lg:gap-6 xl:gap-8"
      }
    >
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`transition-colors duration-300
            text-[color:var(--text-secondary)]
            hover:text-[color:var(--text-primary)]
            ${
              mobile
                ? "rounded-lg px-3 py-3 text-base hover:bg-[color:var(--card)]"
                : "text-sm lg:text-base font-medium"
            }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
