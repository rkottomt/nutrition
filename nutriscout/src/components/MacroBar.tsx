interface MacroBarProps {
  protein: number;
  carbs: number;
  fat: number;
}

export default function MacroBar({ protein, carbs, fat }: MacroBarProps) {
  const total = (protein * 4) + (carbs * 4) + (fat * 9);
  if (total === 0) return null;

  const pPct = ((protein * 4) / total) * 100;
  const cPct = ((carbs * 4) / total) * 100;
  const fPct = ((fat * 9) / total) * 100;

  return (
    <div className="w-full">
      <div className="flex h-2 rounded-full overflow-hidden bg-black/30">
        <div
          className="transition-all duration-700 ease-out"
          style={{ width: `${pPct}%`, background: '#4fc3f7' }}
          title={`Protein: ${protein}g (${pPct.toFixed(0)}%)`}
        />
        <div
          className="transition-all duration-700 ease-out"
          style={{ width: `${cPct}%`, background: '#ffb300' }}
          title={`Carbs: ${carbs}g (${cPct.toFixed(0)}%)`}
        />
        <div
          className="transition-all duration-700 ease-out"
          style={{ width: `${fPct}%`, background: '#ff4444' }}
          title={`Fat: ${fat}g (${fPct.toFixed(0)}%)`}
        />
      </div>
      <div className="flex justify-between mt-1 text-[10px] font-display">
        <span style={{ color: '#4fc3f7' }}>P {pPct.toFixed(0)}%</span>
        <span style={{ color: '#ffb300' }}>C {cPct.toFixed(0)}%</span>
        <span style={{ color: '#ff4444' }}>F {fPct.toFixed(0)}%</span>
      </div>
    </div>
  );
}
