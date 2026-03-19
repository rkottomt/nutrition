import { useStore } from '../store/useStore';
import type { MenuCategory, SortOption, GoalPreset } from '../types';

const categories: (MenuCategory | 'All')[] = ['All', 'Entrees', 'Bowls', 'Sandwiches', 'Wraps', 'Salads', 'Sides', 'Appetizers', 'Breakfast', 'Drinks', 'Desserts'];
const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'name-asc', label: 'Name A-Z' },
  { value: 'lowest-cal', label: 'Lowest Calories' },
  { value: 'highest-protein', label: 'Highest Protein' },
  { value: 'best-efficiency', label: 'Best PE Score' },
  { value: 'lowest-sodium', label: 'Lowest Sodium' },
];
const presets: { value: GoalPreset; label: string; icon: string }[] = [
  { value: 'lean-gains', label: 'Lean Gains', icon: '🎯' },
  { value: 'light-lunch', label: 'Light Lunch', icon: '🥗' },
  { value: 'bulk-mode', label: 'Bulk Mode', icon: '💪' },
  { value: 'heart-healthy', label: 'Heart Healthy', icon: '🩺' },
];

export default function FilterBar() {
  const { filters, setFilter, applyPreset, resetFilters, selectedRestaurant, searchQuery, setSearchQuery } = useStore();

  if (!selectedRestaurant) return null;

  return (
    <div className="bg-white border-b border-border-subtle px-4 py-3 space-y-3">
      <div className="flex gap-3 items-center">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-border-subtle rounded-lg px-3 py-1.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue font-body"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-xs">✕</button>
          )}
        </div>
        <select
          value={filters.sortBy}
          onChange={e => setFilter('sortBy', e.target.value as SortOption)}
          className="bg-gray-50 border border-border-subtle rounded-lg px-3 py-1.5 text-sm text-text-primary font-body focus:outline-none focus:border-accent-blue appearance-none cursor-pointer"
        >
          {sortOptions.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <button onClick={resetFilters} className="text-xs text-text-muted hover:text-accent-red font-display transition-colors px-2 py-1 rounded-md hover:bg-red-50">Reset</button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {presets.map(p => (
          <button
            key={p.value}
            onClick={() => applyPreset(filters.activePreset === p.value ? null : p.value)}
            className={`text-xs px-3 py-1.5 rounded-full font-display transition-all ${
              filters.activePreset === p.value
                ? 'bg-blue-50 text-accent-blue-dark border border-blue-200'
                : 'bg-gray-50 text-text-muted border border-gray-200 hover:border-blue-200 hover:text-text-primary'
            }`}
          >
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter('category', cat)}
            className={`text-[11px] px-2.5 py-1 rounded-md font-display whitespace-nowrap transition-colors ${
              filters.category === cat
                ? 'bg-blue-50 text-accent-blue-dark border border-blue-200'
                : 'bg-gray-50 text-text-muted border border-transparent hover:text-text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SliderControl label="Max Calories" value={filters.maxCalories} min={100} max={1500} step={50} onChange={v => setFilter('maxCalories', v)} color="#f59e0b" suffix=" kcal" />
        <SliderControl label="Min Protein" value={filters.minProtein} min={0} max={80} step={5} onChange={v => setFilter('minProtein', v)} color="#3b82f6" suffix="g" />
        <SliderControl label="Max Fat" value={filters.maxFat} min={0} max={80} step={5} onChange={v => setFilter('maxFat', v)} color="#ef4444" suffix="g" />
        <SliderControl label="Max Sodium" value={filters.maxSodium} min={0} max={3000} step={100} onChange={v => setFilter('maxSodium', v)} color="#64748b" suffix=" mg" />
      </div>
    </div>
  );
}

function SliderControl({ label, value, min, max, step, onChange, color, suffix }: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; color: string; suffix: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <span className="text-[10px] text-text-muted font-display uppercase tracking-wider">{label}</span>
        <span className="text-xs font-display font-bold" style={{ color }}>{value}{suffix}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} className="w-full" style={{ accentColor: color }} />
    </div>
  );
}
