import type { ChipotleIngredient } from '../types';

export const chipotleIngredients: ChipotleIngredient[] = [
  // BASES
  { id: 'ch-base-bowl', name: 'Burrito Bowl (no tortilla)', category: 'base', calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0, isVegetarian: true },
  { id: 'ch-base-tortilla', name: 'Flour Tortilla (Burrito)', category: 'base', calories: 320, protein: 9, carbs: 50, fat: 9, sodium: 690 },
  { id: 'ch-base-crispy', name: 'Crispy Corn Tortilla (Tacos x3)', category: 'base', calories: 200, protein: 3, carbs: 26, fat: 7, sodium: 30, isVegetarian: true },
  { id: 'ch-base-soft', name: 'Soft Flour Tortilla (Tacos x3)', category: 'base', calories: 250, protein: 7, carbs: 42, fat: 7, sodium: 510 },
  { id: 'ch-base-salad', name: 'Salad (Romaine Lettuce)', category: 'base', calories: 15, protein: 1, carbs: 3, fat: 0, sodium: 5, isVegetarian: true },

  // RICE
  { id: 'ch-rice-white', name: 'White Rice', category: 'rice', calories: 210, protein: 4, carbs: 40, fat: 4, sodium: 340, isVegetarian: true },
  { id: 'ch-rice-brown', name: 'Brown Rice', category: 'rice', calories: 210, protein: 5, carbs: 39, fat: 4, sodium: 195, isVegetarian: true },
  { id: 'ch-rice-cauli', name: 'Cauliflower Rice', category: 'rice', calories: 40, protein: 2, carbs: 4, fat: 2, sodium: 310, isVegetarian: true },

  // BEANS
  { id: 'ch-beans-black', name: 'Black Beans', category: 'beans', calories: 130, protein: 8, carbs: 22, fat: 1, sodium: 260, isVegetarian: true },
  { id: 'ch-beans-pinto', name: 'Pinto Beans', category: 'beans', calories: 130, protein: 8, carbs: 22, fat: 1, sodium: 330, isVegetarian: true },

  // PROTEIN
  { id: 'ch-pro-chicken', name: 'Chicken', category: 'protein', calories: 180, protein: 32, carbs: 0, fat: 7, sodium: 310 },
  { id: 'ch-pro-steak', name: 'Steak', category: 'protein', calories: 150, protein: 21, carbs: 1, fat: 6, sodium: 330 },
  { id: 'ch-pro-barbacoa', name: 'Barbacoa', category: 'protein', calories: 170, protein: 24, carbs: 2, fat: 7, sodium: 510 },
  { id: 'ch-pro-carnitas', name: 'Carnitas', category: 'protein', calories: 210, protein: 23, carbs: 0, fat: 12, sodium: 450 },
  { id: 'ch-pro-sofritas', name: 'Sofritas', category: 'protein', calories: 150, protein: 8, carbs: 9, fat: 10, sodium: 560, isVegetarian: true },
  { id: 'ch-pro-veggie', name: 'Fajita Veggies (no protein)', category: 'protein', calories: 20, protein: 1, carbs: 4, fat: 0, sodium: 170, isVegetarian: true },

  // TOPPINGS
  { id: 'ch-top-fajita', name: 'Fajita Veggies', category: 'toppings', calories: 20, protein: 1, carbs: 4, fat: 0, sodium: 170, isVegetarian: true },
  { id: 'ch-top-guac', name: 'Guacamole', category: 'toppings', calories: 230, protein: 3, carbs: 12, fat: 20, sodium: 375, isVegetarian: true },
  { id: 'ch-top-queso', name: 'Queso Blanco', category: 'toppings', calories: 120, protein: 5, carbs: 6, fat: 9, sodium: 340, isVegetarian: true },
  { id: 'ch-top-sour', name: 'Sour Cream', category: 'toppings', calories: 110, protein: 2, carbs: 2, fat: 11, sodium: 30, isVegetarian: true },
  { id: 'ch-top-cheese', name: 'Cheese', category: 'toppings', calories: 110, protein: 7, carbs: 0, fat: 9, sodium: 180, isVegetarian: true },
  { id: 'ch-top-lettuce', name: 'Romaine Lettuce', category: 'toppings', calories: 5, protein: 0, carbs: 1, fat: 0, sodium: 5, isVegetarian: true },
  { id: 'ch-top-corn', name: 'Roasted Chili-Corn Salsa', category: 'toppings', calories: 80, protein: 1, carbs: 15, fat: 2, sodium: 325, isVegetarian: true },

  // SALSAS
  { id: 'ch-sal-fresh', name: 'Fresh Tomato Salsa (Mild)', category: 'salsa', calories: 25, protein: 0, carbs: 4, fat: 0, sodium: 550, isVegetarian: true },
  { id: 'ch-sal-green', name: 'Tomatillo-Green Chili (Medium)', category: 'salsa', calories: 15, protein: 0, carbs: 3, fat: 0, sodium: 500, isVegetarian: true, isSpicy: true },
  { id: 'ch-sal-red', name: 'Tomatillo-Red Chili (Hot)', category: 'salsa', calories: 30, protein: 1, carbs: 4, fat: 1, sodium: 500, isVegetarian: true, isSpicy: true },
  { id: 'ch-sal-honey', name: 'Honey Vinaigrette (Salad)', category: 'salsa', calories: 220, protein: 0, carbs: 16, fat: 18, sodium: 360, isVegetarian: true },

  // EXTRAS
  { id: 'ch-ext-chips', name: 'Side of Chips', category: 'extras', calories: 540, protein: 6, carbs: 62, fat: 27, sodium: 375, isVegetarian: true },
  { id: 'ch-ext-drink', name: 'Fountain Drink', category: 'extras', calories: 150, protein: 0, carbs: 39, fat: 0, sodium: 45, isVegetarian: true },
];

export const chipotleCategories = [
  { key: 'base' as const, label: 'Base', maxItems: 1, required: true },
  { key: 'rice' as const, label: 'Rice', maxItems: 1, required: false },
  { key: 'beans' as const, label: 'Beans', maxItems: 1, required: false },
  { key: 'protein' as const, label: 'Protein', maxItems: 1, required: true },
  { key: 'toppings' as const, label: 'Toppings', maxItems: 10, required: false },
  { key: 'salsa' as const, label: 'Salsa', maxItems: 3, required: false },
  { key: 'extras' as const, label: 'Extras', maxItems: 5, required: false },
];
