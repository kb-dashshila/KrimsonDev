interface SkillsTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function SkillsTabs({
  tabs,
  activeTab,
  onChange,
}: SkillsTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-6 py-3 rounded-xl transition-all duration-300
          ${
            activeTab === tab
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
