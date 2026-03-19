import { useStore } from '../store/useStore';

export default function ComparisonTable() {
  const { comparisonItems, clearComparison, addToMeal, selectedRestaurant } = useStore();

  if (comparisonItems.length < 2) return null;

  const metrics = [
    { key: 'calories', label: 'Calories', unit: 'kcal', best: 'min' as const },
    { key: 'protein', label: 'Protein', unit: 'g', best: 'max' as const },
    { key: 'carbs', label: 'Carbs', unit: 'g', best: 'min' as const },
    { key: 'fat', label: 'Fat', unit: 'g', best: 'min' as const },
    { key: 'sodium', label: 'Sodium', unit: 'mg', best: 'min' as const },
    { key: 'proteinEfficiency', label: 'PE Score', unit: '', best: 'max' as const },
  ];

  const getVal = (item: typeof comparisonItems[number], key: string): number => {
    return (item as unknown as Record<string, number>)[key];
  };

  const getBestIndex = (key: string, best: 'min' | 'max') => {
    const values = comparisonItems.map(item => getVal(item, key));
    return best === 'min' ? values.indexOf(Math.min(...values)) : values.indexOf(Math.max(...values));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border-subtle shadow-lg animate-slide-up">
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-body font-semibold text-text-primary text-sm flex items-center gap-2">
            📊 Compare Items
            <span className="text-[10px] text-text-muted font-display">{comparisonItems.length} selected</span>
          </h3>
          <button onClick={clearComparison} className="text-xs text-text-muted hover:text-accent-red font-display transition-colors">Clear ✕</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left text-[10px] text-text-muted font-display uppercase tracking-wider py-2 pr-4">Metric</th>
                {comparisonItems.map(item => (
                  <th key={item.id} className="text-center py-2 px-3">
                    <div className="text-xs text-text-primary font-body font-semibold truncate max-w-[140px]">{item.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metrics.map(m => {
                const bestIdx = getBestIndex(m.key, m.best);
                return (
                  <tr key={m.key} className="border-t border-border-subtle">
                    <td className="text-[11px] text-text-muted font-display py-2 pr-4">{m.label}</td>
                    {comparisonItems.map((item, idx) => {
                      const val = getVal(item, m.key);
                      const isBest = idx === bestIdx;
                      return (
                        <td key={item.id} className="text-center py-2 px-3">
                          <span className={`text-xs font-display font-bold inline-block px-2 py-0.5 rounded ${isBest ? 'bg-green-50 text-green-600' : 'text-text-primary'}`}>
                            {m.key === 'proteinEfficiency' ? val.toFixed(1) : val}{m.unit && ` ${m.unit}`}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex gap-2 mt-3 justify-end">
          {comparisonItems.map(item => (
            <button key={item.id} onClick={() => selectedRestaurant && addToMeal(item, selectedRestaurant.name)} className="text-[10px] px-3 py-1.5 rounded-md font-display bg-blue-50 text-accent-blue-dark hover:bg-blue-100 transition-colors border border-blue-200">
              + {item.name.slice(0, 20)} to Meal
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
