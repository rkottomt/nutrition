import type { MenuItem } from '../types';
import { useStore } from '../store/useStore';
import MacroBar from './MacroBar';
import ProteinEfficiencyBadge from './ProteinEfficiencyBadge';

interface Props {
  item: MenuItem;
  isRecommended?: boolean;
}

export default function MenuItemCard({ item, isRecommended }: Props) {
  const { addToMeal, selectedRestaurant, comparisonItems, toggleCompare } = useStore();
  const isComparing = comparisonItems.some(i => i.id === item.id);

  return (
    <div
      className={`
        relative rounded-xl p-4 transition-all duration-200 cursor-default
        border backdrop-blur-sm
        ${isRecommended
          ? 'bg-accent-green/5 border-accent-green/30 shadow-[0_0_20px_rgba(0,255,135,0.1)]'
          : 'bg-bg-card border-border-subtle hover:bg-bg-card-hover hover:border-accent-green/20 hover:-translate-y-0.5'}
        ${isComparing ? 'ring-2 ring-accent-blue' : ''}
      `}
    >
      {isRecommended && (
        <div className="absolute -top-2 -right-2 text-lg">⭐</div>
      )}

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-body font-semibold text-text-primary text-sm leading-tight flex-1">
          {item.name}
        </h3>
        <div className="text-right shrink-0">
          <div className="text-2xl font-display font-bold text-text-primary leading-none">
            {item.calories}
          </div>
          <div className="text-[10px] text-text-muted font-display">KCAL</div>
        </div>
      </div>

      <MacroBar protein={item.protein} carbs={item.carbs} fat={item.fat} />

      <div className="grid grid-cols-4 gap-2 mt-3">
        <MacroStat label="Protein" value={item.protein} unit="g" color="#4fc3f7" />
        <MacroStat label="Carbs" value={item.carbs} unit="g" color="#ffb300" />
        <MacroStat label="Fat" value={item.fat} unit="g" color="#ff4444" />
        <MacroStat label="Sodium" value={item.sodium} unit="mg" color="#8888aa" />
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-1">
          <ProteinEfficiencyBadge score={item.proteinEfficiency} />
          {item.isVegetarian && <span className="text-xs" title="Vegetarian">🌱</span>}
          {item.isGlutenFree && <span className="text-xs" title="Gluten-Free">🌾</span>}
          {item.isSpicy && <span className="text-xs" title="Spicy">🌶️</span>}
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={() => toggleCompare(item)}
            className={`text-[10px] px-2 py-1 rounded-md font-display transition-colors ${
              isComparing
                ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/40'
                : 'bg-white/5 text-text-muted hover:bg-white/10 border border-transparent'
            }`}
          >
            {isComparing ? '✓ Compare' : 'Compare'}
          </button>
          <button
            onClick={() => selectedRestaurant && addToMeal(item, selectedRestaurant.name)}
            className="text-[10px] px-2 py-1 rounded-md font-display bg-accent-green/10 text-accent-green hover:bg-accent-green/20 transition-colors border border-accent-green/20"
          >
            + Meal
          </button>
        </div>
      </div>
    </div>
  );
}

function MacroStat({ label, value, unit, color }: { label: string; value: number; unit: string; color: string }) {
  return (
    <div className="text-center">
      <div className="font-display font-bold text-sm" style={{ color }}>
        {value}
        <span className="text-[10px] font-normal">{unit}</span>
      </div>
      <div className="text-[9px] text-text-muted uppercase tracking-wider">{label}</div>
    </div>
  );
}
