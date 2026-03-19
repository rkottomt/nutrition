import { useState } from 'react';
import { chipotleIngredients, chipotleCategories } from '../data/chipotleBuilder';
import type { ChipotleIngredient, MenuItem } from '../types';
import { useStore } from '../store/useStore';
import MacroBar from './MacroBar';

export default function ChipotleBowlBuilder() {
  const { addToMeal } = useStore();
  const [selected, setSelected] = useState<Record<string, ChipotleIngredient[]>>({
    base: [], rice: [], beans: [], protein: [], toppings: [], salsa: [], extras: [],
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (cat: string, item: ChipotleIngredient, maxItems: number) => {
    setSelected(prev => {
      const current = prev[cat] || [];
      const exists = current.find(i => i.id === item.id);
      if (exists) {
        return { ...prev, [cat]: current.filter(i => i.id !== item.id) };
      }
      if (current.length >= maxItems) {
        if (maxItems === 1) return { ...prev, [cat]: [item] };
        return prev;
      }
      return { ...prev, [cat]: [...current, item] };
    });
  };

  const allSelected = Object.values(selected).flat();
  const totals = allSelected.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calories,
      protein: acc.protein + item.protein,
      carbs: acc.carbs + item.carbs,
      fat: acc.fat + item.fat,
      sodium: acc.sodium + item.sodium,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 }
  );

  const reset = () => {
    setSelected({ base: [], rice: [], beans: [], protein: [], toppings: [], salsa: [], extras: [] });
  };

  const addBowlToMeal = () => {
    if (allSelected.length === 0) return;
    const baseName = selected.base[0]?.name || 'Bowl';
    const protName = selected.protein[0]?.name || '';
    const plateItem: MenuItem = {
      id: `chipotle-bowl-${Date.now()}`,
      restaurantId: 'chipotle',
      name: `Chipotle ${baseName}${protName ? ` w/ ${protName}` : ''} (Custom)`,
      category: 'Bowls',
      calories: totals.calories,
      protein: totals.protein,
      carbs: totals.carbs,
      fat: totals.fat,
      sodium: totals.sodium,
      proteinEfficiency: totals.calories > 0 ? parseFloat(((totals.protein / totals.calories) * 100).toFixed(1)) : 0,
    };
    addToMeal(plateItem, 'Chipotle Mexican Grill');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full mb-4 py-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 font-display text-sm hover:bg-amber-100 transition-colors flex items-center justify-center gap-2"
      >
        🌯 Build Your Chipotle Bowl
        <span className="text-[10px] text-text-muted">(customize every ingredient)</span>
      </button>
    );
  }

  return (
    <div className="mb-4 rounded-xl bg-white border border-amber-200 overflow-hidden shadow-sm">
      <div className="p-4 bg-amber-50 border-b border-amber-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-body font-semibold text-text-primary flex items-center gap-2">
            🌯 Chipotle Bowl Builder
          </h3>
          <div className="flex gap-2">
            <button onClick={reset} className="text-[10px] px-2 py-1 rounded-md font-display text-text-muted hover:text-accent-red hover:bg-red-50 transition-colors">Reset</button>
            <button onClick={() => setIsOpen(false)} className="text-[10px] px-2 py-1 rounded-md font-display text-text-muted hover:text-text-primary hover:bg-gray-100 transition-colors">✕ Close</button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {chipotleCategories.map(cat => {
          const items = chipotleIngredients.filter(i => i.category === cat.key);
          const catSelected = selected[cat.key] || [];

          return (
            <div key={cat.key}>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider">
                  {cat.label}
                </h4>
                {cat.required && <span className="text-[9px] text-accent-red font-display">Required</span>}
                <span className="text-[9px] text-text-muted font-display">
                  ({catSelected.length}/{cat.maxItems === 10 || cat.maxItems === 5 || cat.maxItems === 3 ? '∞' : cat.maxItems})
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map(item => {
                  const isSelected = catSelected.some(s => s.id === item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggle(cat.key, item, cat.maxItems)}
                      className={`text-xs px-3 py-2 rounded-lg font-body transition-all ${
                        isSelected
                          ? 'bg-blue-50 text-accent-blue-dark border border-blue-200 shadow-sm'
                          : 'bg-gray-50 text-text-muted border border-gray-200 hover:border-blue-200 hover:text-text-primary hover:bg-blue-50/50'
                      }`}
                    >
                      {item.name}
                      <span className="text-[10px] ml-1 font-display opacity-70">+{item.calories}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {allSelected.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-display font-bold text-text-primary uppercase tracking-wider">
                Your Bowl Totals
              </h4>
              <span className="text-[10px] text-text-muted font-display">
                {allSelected.length} ingredient{allSelected.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-3">
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-amber">{totals.calories}</div>
                <div className="text-[9px] text-text-muted font-display uppercase">KCAL</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-blue-dark">{totals.protein}g</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-amber">{totals.carbs}g</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-red">{totals.fat}g</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Fat</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-text-muted">{totals.sodium}mg</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Sodium</div>
              </div>
            </div>

            <MacroBar protein={totals.protein} carbs={totals.carbs} fat={totals.fat} />

            <button
              onClick={addBowlToMeal}
              className="w-full mt-3 py-2 rounded-lg bg-blue-50 text-accent-blue-dark font-display text-sm font-bold hover:bg-blue-100 transition-colors border border-blue-200"
            >
              + Add to Meal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
