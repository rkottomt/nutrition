import { useEffect } from 'react';
import { useStore } from './store/useStore';
import RestaurantSidebar from './components/RestaurantSidebar';
import FilterBar from './components/FilterBar';
import MenuGrid from './components/MenuGrid';
import MealBuilderBar from './components/MealBuilderBar';
import ComparisonTable from './components/ComparisonTable';
import MapView from './components/MapView';
import AIRecommendationDrawer from './components/AIRecommendationDrawer';
import PandaPlateBuilder from './components/PandaPlateBuilder';

export default function App() {
  const {
    viewMode, selectedRestaurant,
    showAIDrawer, setShowAIDrawer,
    loadSavedMeals,
    comparisonItems,
  } = useStore();

  useEffect(() => {
    loadSavedMeals();
  }, [loadSavedMeals]);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <MealBuilderBar />

      <div className="flex flex-1 overflow-hidden">
        <RestaurantSidebar />

        <main className="flex-1 flex flex-col overflow-hidden">
          <FilterBar />

          {viewMode === 'map' ? (
            <MapView />
          ) : (
            <div className="flex-1 overflow-y-auto">
              {selectedRestaurant?.hasPandaBuilder && (
                <div className="p-4 pb-0">
                  <PandaPlateBuilder />
                </div>
              )}
              <MenuGrid />
            </div>
          )}
        </main>
      </div>

      {/* Floating AI Button */}
      {selectedRestaurant && !showAIDrawer && (
        <button
          onClick={() => setShowAIDrawer(true)}
          className="fixed bottom-6 right-6 z-30 bg-accent-green/90 hover:bg-accent-green text-bg-primary font-display font-bold text-sm px-4 py-3 rounded-full shadow-lg shadow-accent-green/20 transition-all hover:scale-105 flex items-center gap-2"
        >
          🤖 AI Picks
        </button>
      )}

      <AIRecommendationDrawer />
      <ComparisonTable />
    </div>
  );
}
