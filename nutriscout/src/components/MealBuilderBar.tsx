import { useState } from 'react';
import { useStore } from '../store/useStore';

function ProgressRing({ value, max, color, label, size = 48 }: {
  value: number; max: number; color: string; label: string; size?: number;
}) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(value / max, 1);
  const offset = circumference - pct * circumference;

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size/2} cy={size/2} r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth={strokeWidth} fill="none" />
          <circle
            cx={size/2} cy={size/2} r={radius}
            stroke={pct >= 1 ? '#ff4444' : color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-display font-bold text-text-primary">{value}</span>
        </div>
      </div>
      <span className="text-[9px] text-text-muted font-display uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function MealBuilderBar() {
  const { mealItems, removeFromMeal, clearMeal, saveMeal, mealTarget, setMealTarget } = useStore();
  const [showDetails, setShowDetails] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [showSave, setShowSave] = useState(false);

  const totals = mealItems.reduce(
    (acc, m) => ({
      calories: acc.calories + m.menuItem.calories * m.quantity,
      protein: acc.protein + m.menuItem.protein * m.quantity,
      carbs: acc.carbs + m.menuItem.carbs * m.quantity,
      fat: acc.fat + m.menuItem.fat * m.quantity,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  if (mealItems.length === 0) return null;

  return (
    <div className="bg-bg-secondary border-b border-border-subtle">
      <div className="flex items-center gap-4 px-4 py-2">
        <div className="flex items-center gap-1 mr-2">
          <span className="text-sm">🧮</span>
          <span className="text-xs font-display font-bold text-text-primary">MEAL</span>
          <span className="text-[10px] bg-accent-green/15 text-accent-green px-1.5 py-0.5 rounded-full font-display ml-1">
            {mealItems.reduce((s, m) => s + m.quantity, 0)}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-1">
          <ProgressRing value={totals.calories} max={mealTarget} color="#ffb300" label="KCAL" />
          <ProgressRing value={totals.protein} max={Math.round(mealTarget * 0.08)} color="#4fc3f7" label="PROT" />
          <ProgressRing value={totals.carbs} max={Math.round(mealTarget * 0.13)} color="#ffb300" label="CARB" />
          <ProgressRing value={totals.fat} max={Math.round(mealTarget * 0.04)} color="#ff4444" label="FAT" />
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-text-muted font-display">TARGET:</span>
            <input
              type="number"
              value={mealTarget}
              onChange={e => setMealTarget(Number(e.target.value))}
              className="w-14 bg-bg-primary border border-border-subtle rounded px-1.5 py-0.5 text-xs text-text-primary font-display text-center focus:outline-none focus:border-accent-blue/40"
            />
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-[10px] px-2 py-1 rounded-md font-display bg-white/5 text-text-muted hover:bg-white/10 transition-colors"
          >
            {showDetails ? '▲' : '▼'}
          </button>
          <button
            onClick={() => setShowSave(true)}
            className="text-[10px] px-2 py-1 rounded-md font-display bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors"
          >
            Save
          </button>
          <button
            onClick={clearMeal}
            className="text-[10px] px-2 py-1 rounded-md font-display bg-accent-red/10 text-accent-red hover:bg-accent-red/20 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="px-4 pb-3 space-y-1">
          {mealItems.map(m => (
            <div key={m.menuItem.id} className="flex items-center justify-between bg-bg-card rounded-lg px-3 py-1.5">
              <div className="flex-1 min-w-0">
                <span className="text-xs text-text-primary font-body truncate block">{m.menuItem.name}</span>
                <span className="text-[10px] text-text-muted font-display">{m.restaurantName} • {m.menuItem.calories} kcal × {m.quantity}</span>
              </div>
              <button
                onClick={() => removeFromMeal(m.menuItem.id)}
                className="text-text-muted hover:text-accent-red text-xs ml-2 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {showSave && (
        <div className="px-4 pb-3 flex gap-2">
          <input
            type="text"
            placeholder="Meal name..."
            value={saveName}
            onChange={e => setSaveName(e.target.value)}
            className="flex-1 bg-bg-primary border border-border-subtle rounded-lg px-3 py-1.5 text-xs text-text-primary font-body focus:outline-none focus:border-accent-blue/40"
            autoFocus
          />
          <button
            onClick={() => {
              if (saveName.trim()) {
                saveMeal(saveName.trim());
                setSaveName('');
                setShowSave(false);
              }
            }}
            className="text-xs px-3 py-1.5 rounded-lg bg-accent-green/15 text-accent-green font-display hover:bg-accent-green/25 transition-colors"
          >
            Save
          </button>
          <button
            onClick={() => setShowSave(false)}
            className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-text-muted font-display hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
