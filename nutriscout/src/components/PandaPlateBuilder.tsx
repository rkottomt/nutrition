import { useStore } from '../store/useStore';
import { getMenuForRestaurant } from '../data/menuData';
import type { MenuItem, PandaPlate } from '../types';
import MacroBar from './MacroBar';

const plateTypes: { value: PandaPlate['type']; label: string; desc: string; icon: string }[] = [
  { value: 'bowl', label: 'Bowl', desc: '1 side + 1 entree', icon: '🥣' },
  { value: 'plate', label: 'Plate', desc: '1 side + 2 entrees', icon: '🍽️' },
  { value: 'bigger-plate', label: 'Bigger Plate', desc: '1 side + 3 entrees', icon: '🍛' },
];

export default function PandaPlateBuilder() {
  const {
    pandaPlate, setPandaPlateType, addPandaSide, removePandaSide,
    addPandaEntree, removePandaEntree, resetPandaPlate,
    showPandaBuilder, setShowPandaBuilder, addToMeal,
  } = useStore();

  const menu = getMenuForRestaurant('pandaexpress');
  const sides = menu.filter(i => i.pandaCategory === 'side');
  const entrees = menu.filter(i => i.pandaCategory === 'entree');

  const allSelected = [...pandaPlate.sides, ...pandaPlate.entrees];
  const totals = allSelected.reduce((acc, item) => ({
    calories: acc.calories + item.calories, protein: acc.protein + item.protein,
    carbs: acc.carbs + item.carbs, fat: acc.fat + item.fat, sodium: acc.sodium + item.sodium,
  }), { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 });

  const isComplete = pandaPlate.sides.length === pandaPlate.maxSides && pandaPlate.entrees.length === pandaPlate.maxEntrees;

  if (!showPandaBuilder) {
    return (
      <button onClick={() => setShowPandaBuilder(true)} className="w-full mb-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-display text-sm hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
        🐼 Open Plate Builder
        <span className="text-[10px] text-text-muted">(Build a bowl, plate, or bigger plate)</span>
      </button>
    );
  }

  return (
    <div className="mb-4 rounded-xl bg-white border border-red-200 overflow-hidden shadow-sm">
      <div className="p-4 bg-red-50 border-b border-red-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-body font-semibold text-text-primary flex items-center gap-2">🐼 Panda Express Plate Builder</h3>
          <div className="flex gap-2">
            <button onClick={resetPandaPlate} className="text-[10px] px-2 py-1 rounded-md font-display text-text-muted hover:text-accent-red hover:bg-red-50 transition-colors">Reset</button>
            <button onClick={() => setShowPandaBuilder(false)} className="text-[10px] px-2 py-1 rounded-md font-display text-text-muted hover:text-text-primary hover:bg-gray-100 transition-colors">✕ Close</button>
          </div>
        </div>
        <div className="flex gap-2">
          {plateTypes.map(pt => (
            <button key={pt.value} onClick={() => setPandaPlateType(pt.value)} className={`flex-1 py-2 rounded-lg text-center transition-all ${pandaPlate.type === pt.value ? 'bg-white border-2 border-red-300 text-red-700 shadow-sm' : 'bg-white/50 border-2 border-transparent text-text-muted hover:text-text-primary'}`}>
              <div className="text-lg">{pt.icon}</div>
              <div className="text-xs font-display font-bold">{pt.label}</div>
              <div className="text-[9px] font-display">{pt.desc}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h4 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider mb-2">Side ({pandaPlate.sides.length}/{pandaPlate.maxSides})</h4>
          <div className="flex flex-wrap gap-2">
            {sides.map(side => {
              const isSelected = pandaPlate.sides.some(s => s.id === side.id);
              return (
                <button key={side.id} onClick={() => { if (isSelected) { removePandaSide(pandaPlate.sides.findIndex(s => s.id === side.id)); } else { addPandaSide(side); } }} disabled={!isSelected && pandaPlate.sides.length >= pandaPlate.maxSides}
                  className={`text-xs px-3 py-2 rounded-lg font-body transition-all ${isSelected ? 'bg-blue-50 text-accent-blue-dark border border-blue-200' : pandaPlate.sides.length >= pandaPlate.maxSides ? 'bg-gray-50 text-text-muted/50 border border-gray-200 cursor-not-allowed' : 'bg-gray-50 text-text-muted border border-gray-200 hover:border-blue-200'}`}>
                  {side.name} <span className="text-[10px] ml-1 font-display">({side.calories} cal)</span>
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-display font-bold text-text-muted uppercase tracking-wider mb-2">Entrees ({pandaPlate.entrees.length}/{pandaPlate.maxEntrees})</h4>
          <div className="flex flex-wrap gap-2">
            {entrees.map(entree => {
              const count = pandaPlate.entrees.filter(e => e.id === entree.id).length;
              return (
                <button key={entree.id} onClick={() => addPandaEntree(entree)} disabled={pandaPlate.entrees.length >= pandaPlate.maxEntrees}
                  className={`text-xs px-3 py-2 rounded-lg font-body transition-all relative ${count > 0 ? 'bg-blue-50 text-accent-blue-dark border border-blue-200' : pandaPlate.entrees.length >= pandaPlate.maxEntrees ? 'bg-gray-50 text-text-muted/50 border border-gray-200 cursor-not-allowed' : 'bg-gray-50 text-text-muted border border-gray-200 hover:border-blue-200'}`}>
                  {entree.name} <span className="text-[10px] ml-1 font-display">({entree.calories} cal)</span>
                  {count > 0 && <span className="absolute -top-1.5 -right-1.5 bg-accent-blue-dark text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-display font-bold">{count}</span>}
                </button>
              );
            })}
          </div>
          {pandaPlate.entrees.length > 0 && (
            <div className="flex gap-1 mt-2">
              {pandaPlate.entrees.map((e, i) => (
                <span key={i} className="text-[10px] bg-gray-50 rounded px-2 py-1 text-text-muted font-display flex items-center gap-1">{e.name}<button onClick={() => removePandaEntree(i)} className="text-accent-red hover:text-accent-red/80 ml-0.5">✕</button></span>
              ))}
            </div>
          )}
        </div>
        {allSelected.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-display font-bold text-text-primary uppercase tracking-wider">Totals</h4>
              {isComplete && <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-display border border-green-200">✓ Complete</span>}
            </div>
            <div className="grid grid-cols-5 gap-3 mb-3">
              <div className="text-center"><div className="text-xl font-display font-bold text-accent-amber">{totals.calories}</div><div className="text-[9px] text-text-muted font-display">KCAL</div></div>
              <div className="text-center"><div className="text-xl font-display font-bold text-accent-blue-dark">{totals.protein}g</div><div className="text-[9px] text-text-muted font-display">Protein</div></div>
              <div className="text-center"><div className="text-xl font-display font-bold text-accent-amber">{totals.carbs}g</div><div className="text-[9px] text-text-muted font-display">Carbs</div></div>
              <div className="text-center"><div className="text-xl font-display font-bold text-accent-red">{totals.fat}g</div><div className="text-[9px] text-text-muted font-display">Fat</div></div>
              <div className="text-center"><div className="text-xl font-display font-bold text-text-muted">{totals.sodium}mg</div><div className="text-[9px] text-text-muted font-display">Sodium</div></div>
            </div>
            <MacroBar protein={totals.protein} carbs={totals.carbs} fat={totals.fat} />
            {isComplete && (
              <button onClick={() => {
                const plateItem: MenuItem = { id: `panda-plate-${Date.now()}`, restaurantId: 'pandaexpress', name: `Panda ${pandaPlate.type === 'bowl' ? 'Bowl' : pandaPlate.type === 'plate' ? 'Plate' : 'Bigger Plate'}: ${allSelected.map(i => i.name).join(' + ')}`, category: 'Entrees', calories: totals.calories, protein: totals.protein, carbs: totals.carbs, fat: totals.fat, sodium: totals.sodium, proteinEfficiency: totals.calories > 0 ? parseFloat(((totals.protein / totals.calories) * 100).toFixed(1)) : 0 };
                addToMeal(plateItem, 'Panda Express');
              }} className="w-full mt-3 py-2 rounded-lg bg-blue-50 text-accent-blue-dark font-display text-sm font-bold hover:bg-blue-100 transition-colors border border-blue-200">
                + Add to Meal
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
