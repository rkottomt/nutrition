import { create } from 'zustand';
import type { Restaurant, MenuItem, MealItem, SavedMeal, FilterState, UserGoals, AIRecommendation, PandaPlate, SortOption, GoalPreset } from '../types';
import { restaurants } from '../data/cmuRestaurantsSeed';
import { getMenuForRestaurant } from '../data/menuData';

interface AppState {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  menuItems: MenuItem[];
  filteredItems: MenuItem[];

  filters: FilterState;
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  applyPreset: (preset: GoalPreset | null) => void;
  resetFilters: () => void;

  selectRestaurant: (restaurant: Restaurant) => void;

  mealItems: MealItem[];
  addToMeal: (item: MenuItem, restaurantName: string) => void;
  removeFromMeal: (itemId: string) => void;
  clearMeal: () => void;
  saveMeal: (name: string) => void;
  savedMeals: SavedMeal[];
  loadSavedMeals: () => void;

  mealTarget: number;
  setMealTarget: (target: number) => void;

  comparisonItems: MenuItem[];
  toggleCompare: (item: MenuItem) => void;
  clearComparison: () => void;

  viewMode: 'list' | 'map';
  setViewMode: (mode: 'list' | 'map') => void;

  showAIDrawer: boolean;
  setShowAIDrawer: (show: boolean) => void;
  aiRecommendations: AIRecommendation[];
  setAIRecommendations: (recs: AIRecommendation[]) => void;
  aiLoading: boolean;
  setAILoading: (loading: boolean) => void;
  userGoals: UserGoals;
  setUserGoals: (goals: Partial<UserGoals>) => void;

  pandaPlate: PandaPlate;
  setPandaPlateType: (type: PandaPlate['type']) => void;
  setPandaMaxSides: (max: number) => void;
  addPandaSide: (item: MenuItem) => void;
  removePandaSide: (index: number) => void;
  addPandaEntree: (item: MenuItem) => void;
  removePandaEntree: (index: number) => void;
  resetPandaPlate: () => void;
  showPandaBuilder: boolean;
  setShowPandaBuilder: (show: boolean) => void;

  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const defaultFilters: FilterState = {
  maxCalories: 1500,
  minProtein: 0,
  maxFat: 80,
  maxSodium: 3000,
  category: 'All',
  sortBy: 'name-asc',
  searchQuery: '',
  activePreset: null,
};

function applyFiltersAndSort(items: MenuItem[], filters: FilterState): MenuItem[] {
  const filtered = items.filter(item => {
    if (item.calories > filters.maxCalories) return false;
    if (item.protein < filters.minProtein) return false;
    if (item.fat > filters.maxFat) return false;
    if (item.sodium > filters.maxSodium) return false;
    if (filters.category !== 'All' && item.category !== filters.category) return false;
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      if (!item.name.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const sortFns: Record<SortOption, (a: MenuItem, b: MenuItem) => number> = {
    'lowest-cal': (a, b) => a.calories - b.calories,
    'highest-protein': (a, b) => b.protein - a.protein,
    'best-efficiency': (a, b) => b.proteinEfficiency - a.proteinEfficiency,
    'lowest-sodium': (a, b) => a.sodium - b.sodium,
    'name-asc': (a, b) => a.name.localeCompare(b.name),
  };

  filtered.sort(sortFns[filters.sortBy]);
  return filtered;
}

const getPlateConfig = (type: PandaPlate['type']) => {
  switch (type) {
    case 'bowl': return { maxSides: 1, maxEntrees: 1 };
    case 'plate': return { maxSides: 1, maxEntrees: 2 };
    case 'bigger-plate': return { maxSides: 1, maxEntrees: 3 };
  }
};

export const useStore = create<AppState>((set, get) => ({
  restaurants: restaurants.sort((a, b) => a.distance - b.distance),
  selectedRestaurant: null,
  menuItems: [],
  filteredItems: [],

  filters: { ...defaultFilters },

  setFilter: (key, value) => {
    set(state => {
      const newFilters = { ...state.filters, [key]: value, activePreset: null };
      return {
        filters: newFilters,
        filteredItems: applyFiltersAndSort(state.menuItems, newFilters),
      };
    });
  },

  applyPreset: (preset) => {
    let newFilters: FilterState;
    switch (preset) {
      case 'lean-gains':
        newFilters = { ...defaultFilters, minProtein: 30, maxCalories: 500, activePreset: preset };
        break;
      case 'light-lunch':
        newFilters = { ...defaultFilters, maxCalories: 400, maxFat: 15, activePreset: preset };
        break;
      case 'bulk-mode':
        newFilters = { ...defaultFilters, minProtein: 40, maxCalories: 1500, activePreset: preset };
        break;
      case 'heart-healthy':
        newFilters = { ...defaultFilters, maxSodium: 800, maxFat: 10, activePreset: preset };
        break;
      default:
        newFilters = { ...defaultFilters };
    }
    set(state => ({
      filters: newFilters,
      filteredItems: applyFiltersAndSort(state.menuItems, newFilters),
    }));
  },

  resetFilters: () => {
    set(state => ({
      filters: { ...defaultFilters },
      filteredItems: applyFiltersAndSort(state.menuItems, defaultFilters),
    }));
  },

  selectRestaurant: (restaurant) => {
    const items = getMenuForRestaurant(restaurant.id);
    const state = get();
    set({
      selectedRestaurant: restaurant,
      menuItems: items,
      filteredItems: applyFiltersAndSort(items, state.filters),
      showPandaBuilder: false,
    });
  },

  mealItems: [],
  addToMeal: (item, restaurantName) => {
    set(state => {
      const existing = state.mealItems.find(m => m.menuItem.id === item.id);
      if (existing) {
        return {
          mealItems: state.mealItems.map(m =>
            m.menuItem.id === item.id ? { ...m, quantity: m.quantity + 1 } : m
          ),
        };
      }
      return { mealItems: [...state.mealItems, { menuItem: item, restaurantName, quantity: 1 }] };
    });
  },
  removeFromMeal: (itemId) => {
    set(state => ({
      mealItems: state.mealItems.filter(m => m.menuItem.id !== itemId),
    }));
  },
  clearMeal: () => set({ mealItems: [] }),
  saveMeal: (name) => {
    const state = get();
    const meal: SavedMeal = {
      id: Date.now().toString(),
      items: state.mealItems,
      totalCalories: state.mealItems.reduce((s, m) => s + m.menuItem.calories * m.quantity, 0),
      totalProtein: state.mealItems.reduce((s, m) => s + m.menuItem.protein * m.quantity, 0),
      totalCarbs: state.mealItems.reduce((s, m) => s + m.menuItem.carbs * m.quantity, 0),
      totalFat: state.mealItems.reduce((s, m) => s + m.menuItem.fat * m.quantity, 0),
      timestamp: Date.now(),
      name,
    };
    const saved = [...state.savedMeals, meal];
    localStorage.setItem('nutriscout-meals', JSON.stringify(saved));
    set({ savedMeals: saved, mealItems: [] });
  },
  savedMeals: [],
  loadSavedMeals: () => {
    try {
      const data = localStorage.getItem('nutriscout-meals');
      if (data) set({ savedMeals: JSON.parse(data) });
    } catch { /* ignore */ }
  },

  mealTarget: 600,
  setMealTarget: (target) => set({ mealTarget: target }),

  comparisonItems: [],
  toggleCompare: (item) => {
    set(state => {
      const exists = state.comparisonItems.find(i => i.id === item.id);
      if (exists) return { comparisonItems: state.comparisonItems.filter(i => i.id !== item.id) };
      if (state.comparisonItems.length >= 4) return state;
      return { comparisonItems: [...state.comparisonItems, item] };
    });
  },
  clearComparison: () => set({ comparisonItems: [] }),

  viewMode: 'list',
  setViewMode: (mode) => set({ viewMode: mode }),

  showAIDrawer: false,
  setShowAIDrawer: (show) => set({ showAIDrawer: show }),
  aiRecommendations: [],
  setAIRecommendations: (recs) => set({ aiRecommendations: recs }),
  aiLoading: false,
  setAILoading: (loading) => set({ aiLoading: loading }),

  userGoals: {
    dailyCalorieTarget: 2000,
    mealCalorieTarget: 600,
    goal: 'maintain',
  },
  setUserGoals: (goals) => set(state => ({ userGoals: { ...state.userGoals, ...goals } })),

  pandaPlate: {
    type: 'plate',
    sides: [],
    entrees: [],
    maxSides: 1,
    maxEntrees: 2,
  },
  setPandaPlateType: (type) => {
    const config = getPlateConfig(type);
    set({ pandaPlate: { type, sides: [], entrees: [], ...config } });
  },
  setPandaMaxSides: (max) => {
    set(state => ({
      pandaPlate: { ...state.pandaPlate, maxSides: max, sides: [] },
    }));
  },
  addPandaSide: (item) => {
    set(state => {
      if (state.pandaPlate.sides.length >= state.pandaPlate.maxSides) return state;
      return { pandaPlate: { ...state.pandaPlate, sides: [...state.pandaPlate.sides, item] } };
    });
  },
  removePandaSide: (index) => {
    set(state => ({
      pandaPlate: { ...state.pandaPlate, sides: state.pandaPlate.sides.filter((_, i) => i !== index) },
    }));
  },
  addPandaEntree: (item) => {
    set(state => {
      if (state.pandaPlate.entrees.length >= state.pandaPlate.maxEntrees) return state;
      return { pandaPlate: { ...state.pandaPlate, entrees: [...state.pandaPlate.entrees, item] } };
    });
  },
  removePandaEntree: (index) => {
    set(state => ({
      pandaPlate: { ...state.pandaPlate, entrees: state.pandaPlate.entrees.filter((_, i) => i !== index) },
    }));
  },
  resetPandaPlate: () => {
    set({ pandaPlate: { type: 'plate', sides: [], entrees: [], maxSides: 1, maxEntrees: 2 } });
  },
  showPandaBuilder: false,
  setShowPandaBuilder: (show) => set({ showPandaBuilder: show }),

  searchQuery: '',
  setSearchQuery: (q) => {
    set(state => {
      const newFilters = { ...state.filters, searchQuery: q };
      return {
        searchQuery: q,
        filters: newFilters,
        filteredItems: applyFiltersAndSort(state.menuItems, newFilters),
      };
    });
  },
}));
