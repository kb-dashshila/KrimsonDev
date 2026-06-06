import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
}

export default function SkillCard({ name, icon: Icon, color }: SkillCardProps) {
  return (
    <div className="group">
      <div className="h-32 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-purple-500 hover:-translate-y-2">
        <Icon
          size={52}
          style={{ color }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <p className="mt-4 text-center text-slate-300">{name}</p>
    </div>
  );
}
