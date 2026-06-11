import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--background)] px-6 py-8 md:px-10">
      <div className="mx-auto max-w-7xl rounded-3xl border border-theme bg-[color:var(--card)] p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="mb-5 text-5xl font-bold tracking-tight text-[color:var(--text-primary)] ">
              K<span className="text-[color:var(--primary)]">B</span>
              <span className="text-[color:var(--alert)] ">.</span>
            </h2>

            <p className="max-w-xs text-base leading-7 text-[color:var(--text-secondary)]">
              Frontend Engineer specialized in React, Next.js and AEM.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[color:var(--text-primary)]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[color:var(--text-secondary)]">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="transition hover:text-white"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[color:var(--text-primary)]">
              Technologies
            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-[color:var(--text-secondary)]">
              <Link href="https://react.dev/" target="_blank">
                React
              </Link>
              <Link href="https://www.aem.live/" target="_blank">
                AEM
              </Link>
              <Link href="https://nextjs.org/" target="_blank">
                Next.js
              </Link>
              <Link href="https://www.typescriptlang.org/" target="_blank">
                TypeScript
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                JavaScript
              </Link>
              <Link href="https://tailwindcss.com/" target="_blank">
                Tailwind CSS
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[color:var(--text-primary)]">
              Let&apos;s Connect
            </h3>

            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-theme text-[color:var(--text-primary)] transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-theme text-[color:var(--text-primary)] transition hover:border-white"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="mailto:kbdashshila@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-theme text-[color:var(--text-primary)] transition hover:border-purple-500 hover:text-purple-500"
              >
                <FaEnvelope size={20} />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-theme text-[color:var(--text-primary)] transition hover:border-white"
              >
                <RiTwitterXFill size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-theme pt-6 text-sm text-[color:var(--text-secondary)] md:flex-row">
          <p>© {currentYear} KB. All rights reserved.</p>

          {/* <Link
            href="#top"
            className="flex items-center gap-2 transition text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
          >
            Back to top
            <FaArrowUp size={12} />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
