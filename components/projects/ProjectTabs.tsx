interface ProjectTabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function ProjectTabs({
  tabs,
  activeTab,
  onChange,
}: ProjectTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`rounded-xl px-5 py-2.5 transition-all duration-300
          ${
            activeTab === tab
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
