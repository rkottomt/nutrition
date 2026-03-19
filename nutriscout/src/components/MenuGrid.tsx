import { useStore } from '../store/useStore';
import MenuItemCard from './MenuItemCard';

export default function MenuGrid() {
  const { filteredItems, selectedRestaurant, aiRecommendations } = useStore();

  const recommendedNames = new Set(aiRecommendations.map(r => r.item_name.toLowerCase()));

  if (!selectedRestaurant) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🍔</div>
          <h2 className="text-2xl font-body font-semibold text-text-primary mb-2">
            Welcome to NutriScout
          </h2>
          <p className="text-text-muted max-w-md">
            Select a restaurant from the sidebar to browse their full nutritional menu.
            Filter by macros, compare items, and build your ideal meal.
          </p>
        </div>
      </div>
    );
  }

  if (filteredItems.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="text-lg font-body font-semibold text-text-primary mb-1">No items match your filters</h3>
          <p className="text-text-muted text-sm">Try adjusting your filter criteria or reset filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-body font-semibold text-text-primary text-lg">
          {selectedRestaurant.name}
          <span className="text-text-muted text-sm font-normal ml-2">
            {filteredItems.length} items
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {filteredItems.map((item, idx) => (
          <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${Math.min(idx * 30, 300)}ms`, animationFillMode: 'both' }}>
            <MenuItemCard
              item={item}
              isRecommended={recommendedNames.has(item.name.toLowerCase())}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
