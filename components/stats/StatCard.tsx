"use client";

import AnimatedCounter from "../AnimatedCounter";

type StatCardProps = {
  value: number;
  label: string;
  suffix?: string;
  highlight?: boolean;
};

export default function StatCard({
  value,
  label,
  suffix = "+",
  highlight = false,
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center px-8 py-6 ${
        !highlight ? "border-r border-theme" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        {highlight && (
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-green-500">
            <span className="text-sm font-bold text-green-400">{value}</span>
          </div>
        )}

        <h3 className="text-4xl font-bold">
          <AnimatedCounter end={value} suffix={suffix} />
        </h3>
      </div>

      <p className="mt-2 text-sm text-[color:var(--text-secondary)]">{label}</p>
    </div>
  );
}
