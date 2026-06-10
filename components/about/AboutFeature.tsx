import { CheckCircle2 } from "lucide-react";

interface AboutFeatureProps {
  text: string;
}

export default function AboutFeature({ text }: AboutFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={18}
        className="text-cyan-500 dark:text-cyan-400 shrink-0"
      />
      <span className="text-[color:var(--text-secondary)]">{text}</span>
    </div>
  );
}
