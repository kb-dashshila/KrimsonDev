import TimelineItem from "./TimelineItem";

interface TimelineItemType {
  year: string;
  title: string;
}

interface TimelineProps {
  items: TimelineItemType[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="rounded-3xl border border-theme bg-[color:var(--card)] p-8 backdrop-blur-sm">
      <div className="relative">
        <div className="absolute left-[11px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-purple-500" />

        <div className="space-y-10">
          {items.map((item) => (
            <TimelineItem key={item.year} year={item.year} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
