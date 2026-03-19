import { useStore } from '../store/useStore';
import { formatDistance } from '../utils/formatters';
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
    <aside className="w-full bg-white border-r border-border-subtle flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-border-subtle">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-lg">📍</div>
          <div>
            <h1 className="font-body font-bold text-text-primary text-lg leading-tight">NutriScout</h1>
            <p className="text-[10px] text-text-muted font-display">CMU Campus • Oakland</p>
          </div>
        </div>

        <div className="flex bg-gray-100 rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 text-xs py-1.5 rounded-md font-display transition-colors ${
              viewMode === 'list' ? 'bg-white text-text-primary shadow-sm' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            📋 List
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 text-xs py-1.5 rounded-md font-display transition-colors ${
              viewMode === 'map' ? 'bg-white text-text-primary shadow-sm' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            🗺️ Map
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {restaurants.map(r => {
          const isSelected = selectedRestaurant?.id === r.id;

          return (
            <button
              key={r.id}
              onClick={() => handleSelect(r)}
              className={`w-full text-left p-3 border-b border-border-subtle transition-colors ${
                isSelected
                  ? 'bg-blue-50 border-l-2 border-l-accent-blue-dark'
                  : 'hover:bg-gray-50 border-l-2 border-l-transparent'
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
                    {r.hasBuilder && (
                      <span className="text-[9px] bg-blue-50 text-accent-blue-dark px-1.5 py-0.5 rounded font-display border border-blue-200">
                        {r.builderType === 'chipotle' ? '🌯 BOWL BUILDER' : r.builderType === 'wingstop' ? '🍗 WING BUILDER' : '🐼 PLATE BUILDER'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
