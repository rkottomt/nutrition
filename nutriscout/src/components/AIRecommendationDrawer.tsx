import { useState } from 'react';
import { useStore } from '../store/useStore';
import type { AIRecommendation } from '../types';
import MacroBar from './MacroBar';

export default function AIRecommendationDrawer() {
  const {
    showAIDrawer, setShowAIDrawer,
    aiRecommendations, setAIRecommendations,
    aiLoading, setAILoading,
    filteredItems, selectedRestaurant,
    userGoals, setUserGoals,
    addToMeal,
  } = useStore();

  const [error, setError] = useState('');

  const fetchRecommendations = async () => {
    if (!selectedRestaurant || filteredItems.length === 0) return;
    setAILoading(true);
    setError('');
    try {
      const res = await fetch('/api/ai/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: filteredItems.slice(0, 30).map(i => ({ name: i.name, restaurant: selectedRestaurant.name, calories: i.calories, protein: i.protein, carbs: i.carbs, fat: i.fat, sodium: i.sodium })),
          goals: userGoals,
          restaurant: selectedRestaurant.name,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();
      setAIRecommendations(data.recommendations || []);
    } catch {
      setError('AI recommendations require the server. Using fallback analysis.');
      generateFallbackRecs();
    } finally {
      setAILoading(false);
    }
  };

  const generateFallbackRecs = () => {
    const sorted = [...filteredItems].sort((a, b) => b.proteinEfficiency - a.proteinEfficiency);
    const recs: AIRecommendation[] = sorted.slice(0, 5).map(item => ({
      item_name: item.name,
      restaurant: selectedRestaurant?.name || '',
      calories: item.calories,
      protein_g: item.protein,
      carbs_g: item.carbs,
      fat_g: item.fat,
      reasoning: `Protein efficiency score of ${item.proteinEfficiency} — ${item.protein}g protein for ${item.calories} calories.`,
      combo_suggestion: '',
    }));
    setAIRecommendations(recs);
  };

  if (!showAIDrawer) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-96 max-w-full bg-white/95 backdrop-blur-md border-l border-border-subtle shadow-2xl flex flex-col animate-slide-in">
      <div className="p-4 border-b border-border-subtle">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-body font-semibold text-text-primary flex items-center gap-2">🤖 AI Picks</h2>
          <button onClick={() => setShowAIDrawer(false)} className="text-text-muted hover:text-text-primary text-sm transition-colors">✕</button>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[9px] text-text-muted font-display uppercase tracking-wider">Daily Target</label>
              <input type="number" value={userGoals.dailyCalorieTarget} onChange={e => setUserGoals({ dailyCalorieTarget: Number(e.target.value) })} className="w-full bg-gray-50 border border-border-subtle rounded-lg px-2 py-1 text-xs text-text-primary font-display focus:outline-none focus:border-accent-blue" />
            </div>
            <div>
              <label className="text-[9px] text-text-muted font-display uppercase tracking-wider">Meal Target</label>
              <input type="number" value={userGoals.mealCalorieTarget} onChange={e => setUserGoals({ mealCalorieTarget: Number(e.target.value) })} className="w-full bg-gray-50 border border-border-subtle rounded-lg px-2 py-1 text-xs text-text-primary font-display focus:outline-none focus:border-accent-blue" />
            </div>
          </div>
          <div>
            <label className="text-[9px] text-text-muted font-display uppercase tracking-wider">Goal</label>
            <div className="grid grid-cols-2 gap-1 mt-1">
              {(['lean-bulk', 'cut', 'maintain', 'athlete'] as const).map(g => (
                <button key={g} onClick={() => setUserGoals({ goal: g })} className={`text-[10px] py-1.5 rounded-md font-display transition-colors ${userGoals.goal === g ? 'bg-blue-50 text-accent-blue-dark border border-blue-200' : 'bg-gray-50 text-text-muted border border-gray-200 hover:text-text-primary'}`}>
                  {g === 'lean-bulk' ? '💪 Lean Bulk' : g === 'cut' ? '✂️ Cut' : g === 'maintain' ? '⚖️ Maintain' : '🏃 Athlete'}
                </button>
              ))}
            </div>
          </div>
          <button onClick={fetchRecommendations} disabled={aiLoading || !selectedRestaurant} className="w-full py-2 rounded-lg bg-blue-50 text-accent-blue-dark font-display text-sm font-bold hover:bg-blue-100 transition-colors border border-blue-200 disabled:opacity-50">
            {aiLoading ? '⏳ Analyzing...' : '✨ Get AI Picks'}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {error && <div className="text-[11px] text-accent-amber bg-amber-50 rounded-lg p-3 border border-amber-200 font-body">{error}</div>}
        {aiRecommendations.length === 0 && !aiLoading && (
          <div className="text-center py-8">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm text-text-muted">Set your goals and click "Get AI Picks".</p>
          </div>
        )}
        {aiLoading && [1,2,3].map(i => <div key={i} className="bg-gray-50 rounded-xl p-4 animate-pulse"><div className="h-4 bg-gray-200 rounded w-3/4 mb-3" /><div className="h-2 bg-gray-200 rounded w-full mb-2" /></div>)}
        {aiRecommendations.map((rec, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-1.5 mb-1"><span className="text-sm">⭐</span><span className="font-display text-[10px] text-accent-blue-dark">#{idx + 1} PICK</span></div>
                <h4 className="font-body font-semibold text-text-primary text-sm">{rec.item_name}</h4>
              </div>
              <div className="text-right shrink-0">
                <div className="text-lg font-display font-bold text-text-primary">{rec.calories}</div>
                <div className="text-[9px] text-text-muted font-display">KCAL</div>
              </div>
            </div>
            <MacroBar protein={rec.protein_g} carbs={rec.carbs_g} fat={rec.fat_g} />
            <p className="text-[11px] text-text-muted font-body leading-relaxed mt-2 mb-2">{rec.reasoning}</p>
            {rec.combo_suggestion && <p className="text-[10px] text-accent-blue-dark bg-blue-50 rounded-md px-2 py-1 font-body">💡 {rec.combo_suggestion}</p>}
            <button onClick={() => { addToMeal({ id: `ai-${idx}-${Date.now()}`, restaurantId: '', name: rec.item_name, category: 'Entrees', calories: rec.calories, protein: rec.protein_g, carbs: rec.carbs_g, fat: rec.fat_g, sodium: 0, proteinEfficiency: 0 }, rec.restaurant); }}
              className="mt-2 w-full text-[10px] py-1.5 rounded-md font-display bg-blue-50 text-accent-blue-dark hover:bg-blue-100 transition-colors border border-blue-200">+ Add to Meal</button>
          </div>
        ))}
      </div>
    </div>
  );
}
