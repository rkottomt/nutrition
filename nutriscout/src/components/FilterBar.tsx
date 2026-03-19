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
    <div className="bg-bg-secondary border-b border-border-subtle px-4 py-3 space-y-3">
      {/* Search + Sort Row */}
      <div className="flex gap-3 items-center">
        <div className="relative flex-1 max-w-xs">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-bg-primary border border-border-subtle rounded-lg px-3 py-1.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/40 font-body"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary text-xs"
            >
              ✕
            </button>
          )}
        </div>

        <select
          value={filters.sortBy}
          onChange={e => setFilter('sortBy', e.target.value as SortOption)}
          className="bg-bg-primary border border-border-subtle rounded-lg px-3 py-1.5 text-sm text-text-primary font-body focus:outline-none focus:border-accent-blue/40 appearance-none cursor-pointer"
        >
          {sortOptions.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>

        <button
          onClick={resetFilters}
          className="text-xs text-text-muted hover:text-accent-red font-display transition-colors px-2 py-1 rounded-md hover:bg-accent-red/10"
        >
          Reset
        </button>
      </div>

      {/* Presets Row */}
      <div className="flex gap-2 flex-wrap">
        {presets.map(p => (
          <button
            key={p.value}
            onClick={() => applyPreset(filters.activePreset === p.value ? null : p.value)}
            className={`text-xs px-3 py-1.5 rounded-full font-display transition-all ${
              filters.activePreset === p.value
                ? 'bg-accent-green/15 text-accent-green border border-accent-green/30'
                : 'bg-bg-card text-text-muted border border-border-subtle hover:border-accent-blue/30 hover:text-text-primary'
            }`}
          >
            {p.icon} {p.label}
          </button>
        ))}
      </div>

      {/* Category Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter('category', cat)}
            className={`text-[11px] px-2.5 py-1 rounded-md font-display whitespace-nowrap transition-colors ${
              filters.category === cat
                ? 'bg-accent-blue/15 text-accent-blue border border-accent-blue/30'
                : 'bg-bg-card text-text-muted border border-transparent hover:text-text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sliders Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SliderControl
          label="Max Calories"
          value={filters.maxCalories}
          min={100}
          max={1500}
          step={50}
          onChange={v => setFilter('maxCalories', v)}
          color="#ffb300"
          suffix=" kcal"
        />
        <SliderControl
          label="Min Protein"
          value={filters.minProtein}
          min={0}
          max={80}
          step={5}
          onChange={v => setFilter('minProtein', v)}
          color="#4fc3f7"
          suffix="g"
        />
        <SliderControl
          label="Max Fat"
          value={filters.maxFat}
          min={0}
          max={80}
          step={5}
          onChange={v => setFilter('maxFat', v)}
          color="#ff4444"
          suffix="g"
        />
        <SliderControl
          label="Max Sodium"
          value={filters.maxSodium}
          min={0}
          max={3000}
          step={100}
          onChange={v => setFilter('maxSodium', v)}
          color="#8888aa"
          suffix=" mg"
        />
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
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: color }}
      />
    </div>
  );
}
