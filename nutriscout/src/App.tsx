import { useEffect, useState, useCallback } from 'react';
import { useStore } from './store/useStore';
import RestaurantSidebar from './components/RestaurantSidebar';
import FilterBar from './components/FilterBar';
import MenuGrid from './components/MenuGrid';
import MealBuilderBar from './components/MealBuilderBar';
import ComparisonTable from './components/ComparisonTable';
import MapView from './components/MapView';
import AIRecommendationDrawer from './components/AIRecommendationDrawer';
import PandaPlateBuilder from './components/PandaPlateBuilder';
import ChipotleBowlBuilder from './components/ChipotleBowlBuilder';
import WingstopBuilder from './components/WingstopBuilder';
import MobileNav from './components/MobileNav';

export default function App() {
  const {
    viewMode, selectedRestaurant,
    showAIDrawer, setShowAIDrawer,
    loadSavedMeals,
    mealItems, selectRestaurant,
  } = useStore();

  const [mobileTab, setMobileTab] = useState('restaurants');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    loadSavedMeals();
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [loadSavedMeals]);

  const handleSelectRestaurant = useCallback((restaurant: Parameters<typeof selectRestaurant>[0]) => {
    selectRestaurant(restaurant);
    if (isMobile) setMobileTab('menu');
  }, [selectRestaurant, isMobile]);

  const handleMobileTab = (tab: string) => {
    setMobileTab(tab);
    if (tab === 'ai') setShowAIDrawer(true);
    else setShowAIDrawer(false);
  };

  const mealCount = mealItems.reduce((s, m) => s + m.quantity, 0);

  const renderBuilder = () => {
    if (!selectedRestaurant?.hasBuilder) return null;
    switch (selectedRestaurant.builderType) {
      case 'panda': return <PandaPlateBuilder />;
      case 'chipotle': return <ChipotleBowlBuilder />;
      case 'wingstop': return <WingstopBuilder />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-bg-primary">
      <MealBuilderBar />
      <div className="flex flex-1 overflow-hidden">
        {(!isMobile || mobileTab === 'restaurants') && (
          <div className={`${isMobile ? 'w-full' : 'w-72 shrink-0'}`}>
            <RestaurantSidebar onSelect={handleSelectRestaurant} />
          </div>
        )}
        {(!isMobile || mobileTab === 'menu' || mobileTab === 'meal') && (
          <main className="flex-1 flex flex-col overflow-hidden">
            {mobileTab !== 'meal' && <FilterBar />}
            {mobileTab === 'meal' && isMobile ? (
              <MealDetails />
            ) : viewMode === 'map' ? (
              <MapView />
            ) : (
              <div className="flex-1 overflow-y-auto pb-16 md:pb-0">
                {selectedRestaurant?.hasBuilder && (
                  <div className="p-4 pb-0">{renderBuilder()}</div>
                )}
                <MenuGrid />
              </div>
            )}
          </main>
        )}
      </div>

      {!isMobile && selectedRestaurant && !showAIDrawer && (
        <button onClick={() => setShowAIDrawer(true)} className="fixed bottom-6 right-6 z-30 bg-accent-blue-dark hover:bg-blue-600 text-white font-display font-bold text-sm px-4 py-3 rounded-full shadow-lg shadow-blue-200 transition-all hover:scale-105 flex items-center gap-2">
          🤖 AI Picks
        </button>
      )}

      <AIRecommendationDrawer />
      <ComparisonTable />
      {isMobile && <MobileNav activeTab={mobileTab} onTabChange={handleMobileTab} mealCount={mealCount} />}
    </div>
  );
}

function MealDetails() {
  const { mealItems, removeFromMeal, clearMeal, saveMeal, savedMeals, mealTarget } = useStore();
  const [saveName, setSaveName] = useState('');

  const totals = mealItems.reduce((acc, m) => ({
    calories: acc.calories + m.menuItem.calories * m.quantity,
    protein: acc.protein + m.menuItem.protein * m.quantity,
    carbs: acc.carbs + m.menuItem.carbs * m.quantity,
    fat: acc.fat + m.menuItem.fat * m.quantity,
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <div className="flex-1 overflow-y-auto p-4 pb-20 space-y-4">
      <h2 className="font-body font-semibold text-text-primary text-lg">🧮 Meal Builder</h2>
      {mealItems.length === 0 ? (
        <div className="text-center py-8"><div className="text-4xl mb-3">🍽️</div><p className="text-text-muted text-sm">No items yet. Browse menus to add items.</p></div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-2 bg-white rounded-xl p-4 border border-border-subtle shadow-sm">
            <div className="text-center"><div className="text-xl font-display font-bold text-accent-amber">{totals.calories}</div><div className="text-[9px] text-text-muted font-display">KCAL /{mealTarget}</div></div>
            <div className="text-center"><div className="text-xl font-display font-bold text-accent-blue-dark">{totals.protein}g</div><div className="text-[9px] text-text-muted font-display">PROTEIN</div></div>
            <div className="text-center"><div className="text-xl font-display font-bold text-accent-amber">{totals.carbs}g</div><div className="text-[9px] text-text-muted font-display">CARBS</div></div>
            <div className="text-center"><div className="text-xl font-display font-bold text-accent-red">{totals.fat}g</div><div className="text-[9px] text-text-muted font-display">FAT</div></div>
          </div>
          <div className="space-y-2">
            {mealItems.map(m => (
              <div key={m.menuItem.id} className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-border-subtle shadow-sm">
                <div className="flex-1 min-w-0"><div className="text-sm text-text-primary font-body font-semibold truncate">{m.menuItem.name}</div><div className="text-[11px] text-text-muted font-display">{m.restaurantName} • {m.menuItem.calories} kcal × {m.quantity}</div></div>
                <button onClick={() => removeFromMeal(m.menuItem.id)} className="text-accent-red text-sm ml-3">✕</button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Meal name..." value={saveName} onChange={e => setSaveName(e.target.value)} className="flex-1 bg-white border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-primary font-body focus:outline-none focus:border-accent-blue" />
            <button onClick={() => { if (saveName.trim()) { saveMeal(saveName.trim()); setSaveName(''); } }} className="px-4 py-2 rounded-lg bg-blue-50 text-accent-blue-dark font-display text-sm hover:bg-blue-100 transition-colors border border-blue-200">Save</button>
            <button onClick={clearMeal} className="px-4 py-2 rounded-lg bg-red-50 text-accent-red font-display text-sm hover:bg-red-100 transition-colors border border-red-200">Clear</button>
          </div>
        </>
      )}
      {savedMeals.length > 0 && (
        <div>
          <h3 className="font-body font-semibold text-text-primary text-sm mb-2">Saved Meals</h3>
          <div className="space-y-2">
            {savedMeals.map(meal => (
              <div key={meal.id} className="bg-white rounded-lg px-4 py-3 border border-border-subtle shadow-sm">
                <div className="text-sm text-text-primary font-body font-semibold">{meal.name}</div>
                <div className="text-[11px] text-text-muted font-display">{meal.totalCalories} kcal • {meal.totalProtein}g P • {meal.totalCarbs}g C • {meal.totalFat}g F</div>
                <div className="text-[10px] text-text-muted font-display mt-1">{new Date(meal.timestamp).toLocaleDateString()}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
