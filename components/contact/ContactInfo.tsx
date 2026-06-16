import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full space-y-8 lg:space-y-0">
      <div>
        <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-blue-500 dark:text-blue-400">
          CONTACT ME
        </span>

        {/* Scaled down typography context on small screens to prevent title wrapping issues */}
        <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[color:var(--text-primary)] leading-tight">
          Let&apos;s build something
          <br className="hidden sm:inline" /> great together
        </h2>

        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex-shrink-0">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 dark:text-blue-400" />
            </div>
            {/* break-all protects long raw text blocks from expanding outside viewport panels */}
            <span className="text-base sm:text-lg text-[color:var(--text-secondary)] break-all select-all">
              kumkumbala@yahoo.com
            </span>
          </div>

          <div className="flex items-center gap-4 min-w-0">
            <div className="flex-shrink-0">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 dark:text-blue-400" />
            </div>
            <span className="text-base sm:text-lg text-[color:var(--text-secondary)] break-all">
              Mumbai, India
            </span>
          </div>

          <div className="flex items-center gap-4 min-w-0">
            <div className="flex-shrink-0">
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 dark:text-blue-400" />
            </div>
            {/* Added underline and truncate to prevent long URLs from breaking the container layout */}
            <a
              href="https://www.linkedin.com/in/kumkum-r-89bb40246/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg text-[color:var(--text-secondary)] hover:text-blue-500 transition truncate hover:underline"
            >
              linkedin.com/in/kumkum-r-89bb40246/
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Vector Illustration Display adjustments */}
      <div className="hidden lg:flex justify-center mt-6 lg:mt-10">
        <div className="relative">
          <svg width="260" height="150" viewBox="0 0 260 150" fill="none">
            <path
              d="M10 120C70 180 180 160 240 40"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="10"
                y1="120"
                x2="240"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E5FF" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute right-0 top-0 text-6xl sm:text-7xl rotate-12 select-none pointer-events-none">
            ✈️
          </div>
        </div>
      </div>
    </div>
  );
}
