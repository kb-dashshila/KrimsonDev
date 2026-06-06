import StatCard from "./StatCard";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 50,
    suffix: "+",
    label: "Reusable Components",
  },
  {
    value: 95,
    suffix: "+",
    label: "Lighthouse Score",
    highlight: true,
  },
];

export default function StatsSection() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-800 bg-[#050B1A]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              highlight={stat.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
