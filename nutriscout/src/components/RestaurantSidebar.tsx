import { useStore } from '../store/useStore';
import { getNutriScoreColor, formatDistance } from '../utils/formatters';
import type { Restaurant } from '../types';

interface Props {
  onSelect?: (restaurant: Restaurant) => void;
}

export default function RestaurantSidebar({ onSelect }: Props) {
  const { restaurants, selectedRestaurant, selectRestaurant, viewMode, setViewMode } = useStore();

  const handleSelect = (r: Restaurant) => {
    if (onSelect) {
      onSelect(r);
    } else {
      selectRestaurant(r);
    }
  };

  return (
    <aside className="w-full bg-bg-secondary border-r border-border-subtle flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-border-subtle">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">📍</span>
          <div>
            <h1 className="font-body font-bold text-text-primary text-lg leading-tight">NutriScout</h1>
            <p className="text-[10px] text-text-muted font-display">CMU Campus • Oakland</p>
          </div>
        </div>

        <div className="flex bg-bg-primary rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 text-xs py-1.5 rounded-md font-display transition-colors ${
              viewMode === 'list' ? 'bg-bg-card text-text-primary' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            📋 List
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 text-xs py-1.5 rounded-md font-display transition-colors ${
              viewMode === 'map' ? 'bg-bg-card text-text-primary' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            🗺️ Map
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {restaurants.map(r => {
          const isSelected = selectedRestaurant?.id === r.id;
          const scoreColor = getNutriScoreColor(r.nutriScore);

          return (
            <button
              key={r.id}
              onClick={() => handleSelect(r)}
              className={`w-full text-left p-3 border-b border-border-subtle transition-colors ${
                isSelected
                  ? 'bg-accent-green/5 border-l-2 border-l-accent-green'
                  : 'hover:bg-bg-card border-l-2 border-l-transparent'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="font-body font-semibold text-text-primary text-sm truncate">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-text-muted mt-0.5">
                    {r.cuisineType} • {formatDistance(r.distance)}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-accent-amber">★ {r.rating}</span>
                    {r.hasPandaBuilder && (
                      <span className="text-[9px] bg-accent-amber/10 text-accent-amber px-1.5 py-0.5 rounded font-display">
                        PLATE BUILDER
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-display font-bold"
                  style={{
                    background: `${scoreColor}15`,
                    color: scoreColor,
                    border: `1px solid ${scoreColor}40`,
                  }}
                >
                  {r.nutriScore}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-3 border-t border-border-subtle">
        <div className="flex gap-2 text-[9px] text-text-muted font-display">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-green inline-block" /> A-B</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-amber inline-block" /> C</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-red inline-block" /> D-F</span>
          <span className="ml-auto">NutriScore</span>
        </div>
      </div>
    </aside>
  );
}
