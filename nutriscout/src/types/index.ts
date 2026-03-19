export interface Restaurant {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  cuisineType: string;
  distance: number;
  hasBuilder?: boolean;
  builderType?: 'panda' | 'chipotle' | 'wingstop';
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  category: MenuCategory;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  saturatedFat?: number;
  sodium: number;
  fiber?: number;
  sugar?: number;
  image?: string;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
  proteinEfficiency: number;
  pandaCategory?: 'side' | 'entree' | 'appetizer' | 'drink';
}

export type MenuCategory = 'Entrees' | 'Sides' | 'Drinks' | 'Breakfast' | 'Salads' | 'Desserts' | 'Appetizers' | 'Bowls' | 'Sandwiches' | 'Wraps' | 'Kids' | 'Other';

export type SortOption = 'lowest-cal' | 'highest-protein' | 'best-efficiency' | 'lowest-sodium' | 'name-asc';

export type GoalPreset = 'lean-gains' | 'light-lunch' | 'bulk-mode' | 'heart-healthy';

export interface FilterState {
  maxCalories: number;
  minProtein: number;
  maxFat: number;
  maxSodium: number;
  category: MenuCategory | 'All';
  sortBy: SortOption;
  searchQuery: string;
  activePreset: GoalPreset | null;
}

export interface MealItem {
  menuItem: MenuItem;
  restaurantName: string;
  quantity: number;
}

export interface SavedMeal {
  id: string;
  items: MealItem[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  timestamp: number;
  name: string;
}

export interface UserGoals {
  dailyCalorieTarget: number;
  mealCalorieTarget: number;
  goal: 'lean-bulk' | 'cut' | 'maintain' | 'athlete';
}

export interface AIRecommendation {
  item_name: string;
  restaurant: string;
  calories: number;
  protein_g: number;
  carbs_g: number;
  fat_g: number;
  reasoning: string;
  combo_suggestion: string;
}

export interface PandaPlate {
  type: 'plate' | 'bigger-plate' | 'bowl';
  sides: MenuItem[];
  entrees: MenuItem[];
  maxSides: number;
  maxEntrees: number;
}

// Chipotle bowl builder types
export interface ChipotleIngredient {
  id: string;
  name: string;
  category: 'base' | 'protein' | 'rice' | 'beans' | 'toppings' | 'salsa' | 'extras';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sodium: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

// Wingstop builder types
export interface WingstopFlavor {
  id: string;
  name: string;
  isSpicy?: boolean;
  caloriesPerClassicWing: number;
  proteinPerClassicWing: number;
  carbsPerClassicWing: number;
  fatPerClassicWing: number;
  sodiumPerClassicWing: number;
  caloriesPerBonelessWing: number;
  proteinPerBonelessWing: number;
  carbsPerBonelessWing: number;
  fatPerBonelessWing: number;
  sodiumPerBonelessWing: number;
}
