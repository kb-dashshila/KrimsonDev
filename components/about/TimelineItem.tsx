interface TimelineItemProps {
  year: string;
  title: string;
}

export default function TimelineItem({ year, title }: TimelineItemProps) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-purple-500/30" />

      <h3 className="text-lg font-semibold text-white">{year}</h3>

      <p className="mt-1 text-slate-400">{title}</p>
    </div>
  );
}
