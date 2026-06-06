import { CheckCircle2 } from "lucide-react";

interface AboutFeatureProps {
  text: string;
}

export default function AboutFeature({ text }: AboutFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
      <span className="text-slate-300">{text}</span>
    </div>
  );
}
