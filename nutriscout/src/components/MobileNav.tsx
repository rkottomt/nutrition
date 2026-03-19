interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
  mealCount: number;
}

export default function MobileNav({ activeTab, onTabChange, mealCount }: Props) {
  const tabs = [
    { id: 'restaurants', label: 'Spots', icon: '📍' },
    { id: 'menu', label: 'Menu', icon: '🥗' },
    { id: 'ai', label: 'AI Picks', icon: '🤖' },
    { id: 'meal', label: 'Meal', icon: '🧮', badge: mealCount },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-border-subtle">
      <div className="flex">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-3 flex flex-col items-center gap-0.5 transition-colors relative ${
              activeTab === tab.id ? 'text-accent-green' : 'text-text-muted'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="text-[9px] font-display uppercase tracking-wider">{tab.label}</span>
            {tab.badge && tab.badge > 0 && (
              <span className="absolute top-1.5 right-1/4 bg-accent-green text-bg-primary text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-display font-bold">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
