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
        border shadow-sm
        ${isRecommended
          ? 'bg-blue-50 border-accent-blue shadow-blue-100'
          : 'bg-white border-border-subtle hover:bg-bg-card-hover hover:border-accent-baby-dark hover:-translate-y-0.5 hover:shadow-md'}
        ${isComparing ? 'ring-2 ring-accent-blue-dark' : ''}
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
        <MacroStat label="Protein" value={item.protein} unit="g" color="#3b82f6" />
        <MacroStat label="Carbs" value={item.carbs} unit="g" color="#f59e0b" />
        <MacroStat label="Fat" value={item.fat} unit="g" color="#ef4444" />
        <MacroStat label="Sodium" value={item.sodium} unit="mg" color="#64748b" />
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
                ? 'bg-blue-50 text-accent-blue-dark border border-blue-200'
                : 'bg-gray-50 text-text-muted hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {isComparing ? '✓ Compare' : 'Compare'}
          </button>
          <button
            onClick={() => selectedRestaurant && addToMeal(item, selectedRestaurant.name)}
            className="text-[10px] px-2 py-1 rounded-md font-display bg-blue-50 text-accent-blue-dark hover:bg-blue-100 transition-colors border border-blue-200"
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
