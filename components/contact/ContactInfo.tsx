import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500 dark:text-blue-400">
          CONTACT ME
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[color:var(--text-primary)] leading-tight">
          Let's build something
          <br />
          great together
        </h2>

        <div className="mt-10 space-y-8">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <span className="text-lg text-[color:var(--text-secondary)]">
              kbdashshila@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <span className="text-lg text-[color:var(--text-secondary)]">
              Mumbai, India
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <span className="text-lg text-[color:var(--text-secondary)]">
              https://www.linkedin.com/in/kumkum-r-89bb40246/
            </span>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden lg:flex justify-center mt-10">
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

          <div className="absolute right-0 top-0 text-7xl rotate-12">✈️</div>
        </div>
      </div>
    </div>
  );
}
