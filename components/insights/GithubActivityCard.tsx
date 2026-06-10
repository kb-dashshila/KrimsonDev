import { ArrowRight } from "lucide-react";
import StatCard from "./StatCard";

export default function GithubActivityCard() {
  return (
    <div className="rounded-3xl border border-theme bg-[color:var(--card)] backdrop-blur-md p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
            GitHub Activity
          </p>
          <h2 className="text-3xl font-bold mt-2 text-[color:var(--text-primary)]">
            Open Source & Contributions
          </h2>
        </div>

        <button className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300">
          View GitHub Profile
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Contribution Graph Placeholder */}
      <div className="rounded-2xl border border-theme p-6 bg-panel">
        <h3 className="text-5xl font-bold text-[color:var(--text-primary)]">
          1,248
        </h3>
        <p className="text-[color:var(--text-secondary)] mt-2 mb-6">
          Contributions this year
        </p>

        <div className="grid grid-cols-26 gap-1">
          {Array.from({ length: 182 }).map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-sm ${
                Math.random() > 0.3 ? "bg-green-500" : "bg-green-900"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8 border-t border-theme pt-6">
        <StatCard value="42" label="Repositories" />
        <StatCard value="18" label="Stars" />
        <StatCard value="7" label="Pull Requests" />
      </div>
    </div>
  );
}
