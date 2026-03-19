import { useState } from 'react';
import { wingstopFlavors, wingCounts } from '../data/wingstopBuilder';
import type { WingstopFlavor, MenuItem } from '../types';
import { useStore } from '../store/useStore';
import MacroBar from './MacroBar';

type WingType = 'classic' | 'boneless';

export default function WingstopBuilder() {
  const { addToMeal } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [wingType, setWingType] = useState<WingType>('classic');
  const [count, setCount] = useState(6);
  const [flavor, setFlavor] = useState<WingstopFlavor | null>(null);

  const getNutrition = () => {
    if (!flavor) return { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 };
    if (wingType === 'classic') {
      return {
        calories: Math.round(flavor.caloriesPerClassicWing * count),
        protein: Math.round(flavor.proteinPerClassicWing * count * 10) / 10,
        carbs: Math.round(flavor.carbsPerClassicWing * count * 10) / 10,
        fat: Math.round(flavor.fatPerClassicWing * count * 10) / 10,
        sodium: Math.round(flavor.sodiumPerClassicWing * count),
      };
    }
    return {
      calories: Math.round(flavor.caloriesPerBonelessWing * count),
      protein: Math.round(flavor.proteinPerBonelessWing * count * 10) / 10,
      carbs: Math.round(flavor.carbsPerBonelessWing * count * 10) / 10,
      fat: Math.round(flavor.fatPerBonelessWing * count * 10) / 10,
      sodium: Math.round(flavor.sodiumPerBonelessWing * count),
    };
  };

  const totals = getNutrition();

  const [idCounter, setIdCounter] = useState(0);

  const addWingsToMeal = () => {
    if (!flavor) return;
    setIdCounter(c => c + 1);
    const item: MenuItem = {
      id: `wingstop-${idCounter}`,
      restaurantId: 'wingstop',
      name: `${count}pc ${wingType === 'classic' ? 'Classic' : 'Boneless'} Wings — ${flavor.name}`,
      category: 'Entrees',
      calories: totals.calories,
      protein: Math.round(totals.protein),
      carbs: Math.round(totals.carbs),
      fat: Math.round(totals.fat),
      sodium: totals.sodium,
      proteinEfficiency: totals.calories > 0 ? parseFloat(((totals.protein / totals.calories) * 100).toFixed(1)) : 0,
    };
    addToMeal(item, 'Wingstop');
  };

  const reset = () => {
    setWingType('classic');
    setCount(6);
    setFlavor(null);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full mb-4 py-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-700 font-display text-sm hover:bg-orange-100 transition-colors flex items-center justify-center gap-2"
      >
        🍗 Build Your Wingstop Order
        <span className="text-[10px] text-text-muted">(pick type, count & flavor)</span>
      </button>
    );
  }

  return (
    <div className="mb-4 rounded-xl bg-white border border-orange-200 overflow-hidden shadow-sm">
      <div className="p-4 bg-orange-50 border-b border-orange-100">
        <div className="flex items-center justify-between">
          <h3 className="font-body font-semibold text-text-primary flex items-center gap-2">
            🍗 Wingstop Wing Builder
          </h3>
          <div className="flex gap-2">
            <button onClick={reset} className="text-[10px] px-2 py-1 rounded-md font-display text-text-muted hover:text-accent-red hover:bg-red-50 transition-colors">Reset</button>
            <button onClick={() => setIsOpen(false)} className="text-[10px] px-2 py-1 rounded-md font-display text-text-muted hover:text-text-primary hover:bg-gray-100 transition-colors">✕ Close</button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-5">
        {/* Step 1: Wing Type */}
        <div>
          <h4 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider mb-2">
            Step 1: Choose Type
          </h4>
          <div className="flex gap-2">
            {(['classic', 'boneless'] as const).map(type => (
              <button
                key={type}
                onClick={() => setWingType(type)}
                className={`flex-1 py-3 rounded-xl text-center transition-all ${
                  wingType === type
                    ? 'bg-blue-50 border-2 border-accent-blue-dark text-accent-blue-dark shadow-sm'
                    : 'bg-gray-50 border-2 border-gray-200 text-text-muted hover:border-blue-200 hover:text-text-primary'
                }`}
              >
                <div className="text-2xl mb-1">{type === 'classic' ? '🍗' : '🍖'}</div>
                <div className="text-sm font-display font-bold">{type === 'classic' ? 'Classic' : 'Boneless'}</div>
                <div className="text-[10px] font-display text-text-muted">{type === 'classic' ? 'Bone-In Wings' : 'Boneless Wings'}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Count */}
        <div>
          <h4 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider mb-2">
            Step 2: How Many?
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {wingCounts.map(n => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`min-w-[48px] py-2 rounded-lg text-center font-display text-sm transition-all ${
                  count === n
                    ? 'bg-blue-50 text-accent-blue-dark border-2 border-accent-blue-dark font-bold shadow-sm'
                    : 'bg-gray-50 text-text-muted border-2 border-gray-200 hover:border-blue-200'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Flavor */}
        <div>
          <h4 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider mb-2">
            Step 3: Pick a Flavor
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
            {wingstopFlavors.map(f => {
              const isSelected = flavor?.id === f.id;
              const perWing = wingType === 'classic' ? f.caloriesPerClassicWing : f.caloriesPerBonelessWing;
              return (
                <button
                  key={f.id}
                  onClick={() => setFlavor(f)}
                  className={`py-2.5 px-3 rounded-lg text-left font-body transition-all ${
                    isSelected
                      ? 'bg-blue-50 text-accent-blue-dark border-2 border-accent-blue-dark shadow-sm'
                      : 'bg-gray-50 text-text-muted border-2 border-gray-200 hover:border-blue-200 hover:text-text-primary'
                  }`}
                >
                  <div className="text-xs font-semibold flex items-center gap-1">
                    {f.name}
                    {f.isSpicy && <span className="text-[10px]">🌶️</span>}
                  </div>
                  <div className="text-[10px] font-display mt-0.5">{perWing} cal/wing</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Nutrition Summary */}
        {flavor && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-display font-bold text-text-primary uppercase tracking-wider">
                {count}pc {wingType === 'classic' ? 'Classic' : 'Boneless'} — {flavor.name}
              </h4>
            </div>

            <div className="grid grid-cols-5 gap-3 mb-3">
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-amber">{totals.calories}</div>
                <div className="text-[9px] text-text-muted font-display uppercase">KCAL</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-blue-dark">{Math.round(totals.protein)}g</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-amber">{Math.round(totals.carbs)}g</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-accent-red">{Math.round(totals.fat)}g</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Fat</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-display font-bold text-text-muted">{totals.sodium}mg</div>
                <div className="text-[9px] text-text-muted font-display uppercase">Sodium</div>
              </div>
            </div>

            <MacroBar protein={Math.round(totals.protein)} carbs={Math.round(totals.carbs)} fat={Math.round(totals.fat)} />

            <div className="text-[10px] text-text-muted font-display mt-2 text-center">
              {(totals.calories / count).toFixed(0)} cal per wing
            </div>

            <button
              onClick={addWingsToMeal}
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
