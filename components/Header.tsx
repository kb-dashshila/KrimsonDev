"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Navbar from "./Navbar";

const basePath = "/KrimsonDev";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const savedTheme = localStorage.getItem("theme");

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const isDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    root.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    const nextDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextDark);

    localStorage.setItem("theme", nextDark ? "dark" : "light");

    setDarkMode(nextDark);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-theme bg-[color:var(--background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[color:var(--text-primary)] lg:text-2xl"
        >
          K<span className="text-[color:var(--primary)]">B.</span>
        </Link>

        {/* Desktop / Tablet Navbar */}
        <div className="hidden flex-1 justify-center md:flex">
          <Navbar />
        </div>

        {/* Desktop / Tablet Actions */}
        <div className="hidden items-center gap-2 lg:gap-3 md:flex">
          {/* Resume */}
          <a
            href={`${basePath}/images/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              rounded-xl
              bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6]
              px-3 lg:px-4
              py-2.5
              text-sm font-medium text-white
              shadow-lg shadow-[#4F8CFF]/20
              transition hover:opacity-90
            "
          >
            <Download size={16} />

            <span className="hidden lg:inline">Download Resume</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-theme
              bg-[color:var(--card)]
              text-[color:var(--text-primary)]
              transition hover:border-[color:var(--primary)]
            "
          >
            {darkMode ? (
              <Moon size={18} className="text-blue-300" />
            ) : (
              <Sun size={18} className="text-yellow-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-[color:var(--text-primary)] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-[500px] border-t border-theme" : "max-h-0"
        }`}
      >
        <div className="bg-[color:var(--background)] px-4 py-6">
          <Navbar mobile onClick={() => setIsMenuOpen(false)} />

          <div className="mt-6 flex flex-col gap-3">
            {/* Resume */}
            <a
              href={`${basePath}/images/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center gap-2
                rounded-xl
                bg-gradient-to-r from-[#4F8CFF] to-[#8B5CF6]
                px-4 py-3
                text-sm font-medium text-white
              "
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="
                flex items-center justify-center gap-2
                rounded-xl
                border border-theme
                bg-[color:var(--card)]
                px-4 py-3
                text-[color:var(--text-primary)]
              "
            >
              {darkMode ? (
                <>
                  <Moon size={18} />
                  Dark Mode
                </>
              ) : (
                <>
                  <Sun size={18} />
                  Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
