import type { MenuItem } from '../types';

function pe(protein: number, calories: number): number {
  return calories > 0 ? parseFloat(((protein / calories) * 100).toFixed(1)) : 0;
}

// ─── CHIPOTLE ──────────────────────────────────────────
const chipotle: MenuItem[] = [
  { id: 'chip-1', restaurantId: 'chipotle', name: 'Chicken Burrito', category: 'Entrees', calories: 1005, protein: 54, carbs: 105, fat: 38, sodium: 2070, isSpicy: false, proteinEfficiency: pe(54,1005) },
  { id: 'chip-2', restaurantId: 'chipotle', name: 'Steak Burrito', category: 'Entrees', calories: 1030, protein: 51, carbs: 105, fat: 40, sodium: 1960, proteinEfficiency: pe(51,1030) },
  { id: 'chip-3', restaurantId: 'chipotle', name: 'Barbacoa Burrito', category: 'Entrees', calories: 1025, protein: 50, carbs: 107, fat: 39, sodium: 2200, proteinEfficiency: pe(50,1025) },
  { id: 'chip-4', restaurantId: 'chipotle', name: 'Carnitas Burrito', category: 'Entrees', calories: 1045, protein: 49, carbs: 105, fat: 42, sodium: 2100, proteinEfficiency: pe(49,1045) },
  { id: 'chip-5', restaurantId: 'chipotle', name: 'Sofritas Burrito', category: 'Entrees', calories: 935, protein: 32, carbs: 110, fat: 37, sodium: 2010, isVegetarian: true, proteinEfficiency: pe(32,935) },
  { id: 'chip-6', restaurantId: 'chipotle', name: 'Veggie Burrito', category: 'Entrees', calories: 885, protein: 27, carbs: 108, fat: 33, sodium: 1820, isVegetarian: true, proteinEfficiency: pe(27,885) },
  { id: 'chip-7', restaurantId: 'chipotle', name: 'Chicken Bowl', category: 'Bowls', calories: 740, protein: 53, carbs: 57, fat: 30, sodium: 1730, proteinEfficiency: pe(53,740) },
  { id: 'chip-8', restaurantId: 'chipotle', name: 'Steak Bowl', category: 'Bowls', calories: 765, protein: 50, carbs: 57, fat: 32, sodium: 1620, proteinEfficiency: pe(50,765) },
  { id: 'chip-9', restaurantId: 'chipotle', name: 'Barbacoa Bowl', category: 'Bowls', calories: 760, protein: 49, carbs: 59, fat: 31, sodium: 1860, proteinEfficiency: pe(49,760) },
  { id: 'chip-10', restaurantId: 'chipotle', name: 'Carnitas Bowl', category: 'Bowls', calories: 780, protein: 48, carbs: 57, fat: 34, sodium: 1760, proteinEfficiency: pe(48,780) },
  { id: 'chip-11', restaurantId: 'chipotle', name: 'Sofritas Bowl', category: 'Bowls', calories: 670, protein: 31, carbs: 62, fat: 29, sodium: 1670, isVegetarian: true, proteinEfficiency: pe(31,670) },
  { id: 'chip-12', restaurantId: 'chipotle', name: 'Chicken Tacos (3)', category: 'Entrees', calories: 630, protein: 41, carbs: 42, fat: 28, sodium: 1170, proteinEfficiency: pe(41,630) },
  { id: 'chip-13', restaurantId: 'chipotle', name: 'Steak Tacos (3)', category: 'Entrees', calories: 655, protein: 38, carbs: 42, fat: 30, sodium: 1060, proteinEfficiency: pe(38,655) },
  { id: 'chip-14', restaurantId: 'chipotle', name: 'Chicken Salad', category: 'Salads', calories: 680, protein: 52, carbs: 26, fat: 36, sodium: 1520, isGlutenFree: true, proteinEfficiency: pe(52,680) },
  { id: 'chip-15', restaurantId: 'chipotle', name: 'Steak Salad', category: 'Salads', calories: 705, protein: 49, carbs: 26, fat: 38, sodium: 1410, isGlutenFree: true, proteinEfficiency: pe(49,705) },
  { id: 'chip-16', restaurantId: 'chipotle', name: 'Chicken Quesadilla', category: 'Entrees', calories: 980, protein: 57, carbs: 69, fat: 50, sodium: 2090, proteinEfficiency: pe(57,980) },
  { id: 'chip-17', restaurantId: 'chipotle', name: 'Chips & Guacamole', category: 'Sides', calories: 770, protein: 9, carbs: 74, fat: 47, sodium: 750, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(9,770) },
  { id: 'chip-18', restaurantId: 'chipotle', name: 'Chips & Queso Blanco', category: 'Sides', calories: 780, protein: 18, carbs: 78, fat: 42, sodium: 1260, isVegetarian: true, proteinEfficiency: pe(18,780) },
  { id: 'chip-19', restaurantId: 'chipotle', name: 'Side of Guacamole', category: 'Sides', calories: 230, protein: 3, carbs: 12, fat: 20, sodium: 375, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(3,230) },
  { id: 'chip-20', restaurantId: 'chipotle', name: 'Side of Queso Blanco', category: 'Sides', calories: 240, protein: 10, carbs: 12, fat: 17, sodium: 680, isVegetarian: true, proteinEfficiency: pe(10,240) },
  { id: 'chip-21', restaurantId: 'chipotle', name: 'Side of Sour Cream', category: 'Sides', calories: 110, protein: 2, carbs: 2, fat: 11, sodium: 30, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(2,110) },
  { id: 'chip-22', restaurantId: 'chipotle', name: 'Side of Cheese', category: 'Sides', calories: 110, protein: 7, carbs: 0, fat: 9, sodium: 180, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(7,110) },
  { id: 'chip-23', restaurantId: 'chipotle', name: 'Mexican Coca-Cola', category: 'Drinks', calories: 150, protein: 0, carbs: 39, fat: 0, sodium: 45, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'chip-24', restaurantId: 'chipotle', name: 'Lemonade', category: 'Drinks', calories: 210, protein: 0, carbs: 54, fat: 0, sodium: 15, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'chip-25', restaurantId: 'chipotle', name: 'Side of Chips', category: 'Sides', calories: 540, protein: 6, carbs: 62, fat: 27, sodium: 375, isVegetarian: true, proteinEfficiency: pe(6,540) },
];

// ─── MCDONALD'S ────────────────────────────────────────
const mcdonalds: MenuItem[] = [
  { id: 'mcd-1', restaurantId: 'mcdonalds', name: 'Big Mac', category: 'Entrees', calories: 550, protein: 25, carbs: 45, fat: 30, sodium: 1010, proteinEfficiency: pe(25,550) },
  { id: 'mcd-2', restaurantId: 'mcdonalds', name: 'Quarter Pounder with Cheese', category: 'Entrees', calories: 520, protein: 30, carbs: 42, fat: 26, sodium: 1140, proteinEfficiency: pe(30,520) },
  { id: 'mcd-3', restaurantId: 'mcdonalds', name: 'Double Quarter Pounder', category: 'Entrees', calories: 740, protein: 48, carbs: 43, fat: 42, sodium: 1360, proteinEfficiency: pe(48,740) },
  { id: 'mcd-4', restaurantId: 'mcdonalds', name: 'McDouble', category: 'Entrees', calories: 400, protein: 22, carbs: 33, fat: 20, sodium: 920, proteinEfficiency: pe(22,400) },
  { id: 'mcd-5', restaurantId: 'mcdonalds', name: 'McChicken', category: 'Entrees', calories: 400, protein: 14, carbs: 39, fat: 21, sodium: 560, proteinEfficiency: pe(14,400) },
  { id: 'mcd-6', restaurantId: 'mcdonalds', name: 'Spicy McChicken', category: 'Entrees', calories: 420, protein: 14, carbs: 41, fat: 22, sodium: 680, isSpicy: true, proteinEfficiency: pe(14,420) },
  { id: 'mcd-7', restaurantId: 'mcdonalds', name: 'Filet-O-Fish', category: 'Entrees', calories: 390, protein: 16, carbs: 39, fat: 19, sodium: 580, proteinEfficiency: pe(16,390) },
  { id: 'mcd-8', restaurantId: 'mcdonalds', name: '10pc Chicken McNuggets', category: 'Entrees', calories: 410, protein: 23, carbs: 25, fat: 24, sodium: 900, proteinEfficiency: pe(23,410) },
  { id: 'mcd-9', restaurantId: 'mcdonalds', name: '20pc Chicken McNuggets', category: 'Entrees', calories: 830, protein: 46, carbs: 51, fat: 49, sodium: 1800, proteinEfficiency: pe(46,830) },
  { id: 'mcd-10', restaurantId: 'mcdonalds', name: 'Spicy Deluxe Crispy Chicken', category: 'Entrees', calories: 530, protein: 27, carbs: 46, fat: 26, sodium: 1130, isSpicy: true, proteinEfficiency: pe(27,530) },
  { id: 'mcd-11', restaurantId: 'mcdonalds', name: 'Deluxe Crispy Chicken', category: 'Entrees', calories: 530, protein: 27, carbs: 46, fat: 26, sodium: 1010, proteinEfficiency: pe(27,530) },
  { id: 'mcd-12', restaurantId: 'mcdonalds', name: 'Cheeseburger', category: 'Entrees', calories: 300, protein: 15, carbs: 33, fat: 13, sodium: 720, proteinEfficiency: pe(15,300) },
  { id: 'mcd-13', restaurantId: 'mcdonalds', name: 'Hamburger', category: 'Entrees', calories: 250, protein: 12, carbs: 31, fat: 9, sodium: 510, proteinEfficiency: pe(12,250) },
  { id: 'mcd-14', restaurantId: 'mcdonalds', name: 'World Famous Fries (Medium)', category: 'Sides', calories: 320, protein: 5, carbs: 43, fat: 15, sodium: 260, isVegetarian: true, proteinEfficiency: pe(5,320) },
  { id: 'mcd-15', restaurantId: 'mcdonalds', name: 'World Famous Fries (Large)', category: 'Sides', calories: 480, protein: 7, carbs: 65, fat: 23, sodium: 400, isVegetarian: true, proteinEfficiency: pe(7,480) },
  { id: 'mcd-16', restaurantId: 'mcdonalds', name: 'Apple Slices', category: 'Sides', calories: 15, protein: 0, carbs: 4, fat: 0, sodium: 0, isVegetarian: true, isGlutenFree: true, proteinEfficiency: 0 },
  { id: 'mcd-17', restaurantId: 'mcdonalds', name: 'Side Salad', category: 'Salads', calories: 15, protein: 1, carbs: 3, fat: 0, sodium: 10, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(1,15) },
  { id: 'mcd-18', restaurantId: 'mcdonalds', name: 'Egg McMuffin', category: 'Breakfast', calories: 300, protein: 17, carbs: 30, fat: 13, sodium: 770, proteinEfficiency: pe(17,300) },
  { id: 'mcd-19', restaurantId: 'mcdonalds', name: 'Sausage McMuffin with Egg', category: 'Breakfast', calories: 480, protein: 21, carbs: 30, fat: 30, sodium: 900, proteinEfficiency: pe(21,480) },
  { id: 'mcd-20', restaurantId: 'mcdonalds', name: 'Sausage Biscuit', category: 'Breakfast', calories: 460, protein: 11, carbs: 34, fat: 31, sodium: 1080, proteinEfficiency: pe(11,460) },
  { id: 'mcd-21', restaurantId: 'mcdonalds', name: 'Hotcakes', category: 'Breakfast', calories: 580, protein: 10, carbs: 101, fat: 15, sodium: 610, isVegetarian: true, proteinEfficiency: pe(10,580) },
  { id: 'mcd-22', restaurantId: 'mcdonalds', name: 'Sausage Burrito', category: 'Breakfast', calories: 310, protein: 12, carbs: 26, fat: 17, sodium: 800, isSpicy: true, proteinEfficiency: pe(12,310) },
  { id: 'mcd-23', restaurantId: 'mcdonalds', name: 'Hash Browns', category: 'Breakfast', calories: 140, protein: 1, carbs: 16, fat: 8, sodium: 310, isVegetarian: true, proteinEfficiency: pe(1,140) },
  { id: 'mcd-24', restaurantId: 'mcdonalds', name: 'McFlurry with OREO', category: 'Desserts', calories: 510, protein: 12, carbs: 80, fat: 17, sodium: 280, isVegetarian: true, proteinEfficiency: pe(12,510) },
  { id: 'mcd-25', restaurantId: 'mcdonalds', name: 'McFlurry with M&Ms', category: 'Desserts', calories: 630, protein: 13, carbs: 96, fat: 22, sodium: 210, isVegetarian: true, proteinEfficiency: pe(13,630) },
  { id: 'mcd-26', restaurantId: 'mcdonalds', name: 'Hot Fudge Sundae', category: 'Desserts', calories: 330, protein: 8, carbs: 52, fat: 10, sodium: 170, isVegetarian: true, proteinEfficiency: pe(8,330) },
  { id: 'mcd-27', restaurantId: 'mcdonalds', name: 'Apple Pie', category: 'Desserts', calories: 230, protein: 3, carbs: 32, fat: 11, sodium: 100, isVegetarian: true, proteinEfficiency: pe(3,230) },
  { id: 'mcd-28', restaurantId: 'mcdonalds', name: 'Coca-Cola (Medium)', category: 'Drinks', calories: 210, protein: 0, carbs: 58, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'mcd-29', restaurantId: 'mcdonalds', name: 'Sprite (Medium)', category: 'Drinks', calories: 200, protein: 0, carbs: 54, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'mcd-30', restaurantId: 'mcdonalds', name: 'Sweet Tea (Medium)', category: 'Drinks', calories: 160, protein: 0, carbs: 38, fat: 0, sodium: 15, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'mcd-31', restaurantId: 'mcdonalds', name: 'Premium Roast Coffee (Medium)', category: 'Drinks', calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
];

// ─── SUBWAY ────────────────────────────────────────────
const subway: MenuItem[] = [
  { id: 'sub-1', restaurantId: 'subway', name: 'Turkey Breast (6")', category: 'Sandwiches', calories: 250, protein: 18, carbs: 40, fat: 3, sodium: 700, proteinEfficiency: pe(18,250) },
  { id: 'sub-2', restaurantId: 'subway', name: 'Turkey Breast (Footlong)', category: 'Sandwiches', calories: 500, protein: 36, carbs: 80, fat: 6, sodium: 1400, proteinEfficiency: pe(36,500) },
  { id: 'sub-3', restaurantId: 'subway', name: 'Italian B.M.T. (6")', category: 'Sandwiches', calories: 360, protein: 17, carbs: 41, fat: 14, sodium: 1100, proteinEfficiency: pe(17,360) },
  { id: 'sub-4', restaurantId: 'subway', name: 'Italian B.M.T. (Footlong)', category: 'Sandwiches', calories: 720, protein: 34, carbs: 82, fat: 28, sodium: 2200, proteinEfficiency: pe(34,720) },
  { id: 'sub-5', restaurantId: 'subway', name: 'Chicken Teriyaki (6")', category: 'Sandwiches', calories: 320, protein: 26, carbs: 44, fat: 5, sodium: 800, proteinEfficiency: pe(26,320) },
  { id: 'sub-6', restaurantId: 'subway', name: 'Chicken Teriyaki (Footlong)', category: 'Sandwiches', calories: 640, protein: 52, carbs: 88, fat: 10, sodium: 1600, proteinEfficiency: pe(52,640) },
  { id: 'sub-7', restaurantId: 'subway', name: 'Steak & Cheese (6")', category: 'Sandwiches', calories: 350, protein: 24, carbs: 41, fat: 10, sodium: 890, proteinEfficiency: pe(24,350) },
  { id: 'sub-8', restaurantId: 'subway', name: 'Steak & Cheese (Footlong)', category: 'Sandwiches', calories: 700, protein: 48, carbs: 82, fat: 20, sodium: 1780, proteinEfficiency: pe(48,700) },
  { id: 'sub-9', restaurantId: 'subway', name: 'Tuna (6")', category: 'Sandwiches', calories: 480, protein: 20, carbs: 42, fat: 25, sodium: 600, proteinEfficiency: pe(20,480) },
  { id: 'sub-10', restaurantId: 'subway', name: 'Meatball Marinara (6")', category: 'Sandwiches', calories: 480, protein: 22, carbs: 52, fat: 20, sodium: 1010, proteinEfficiency: pe(22,480) },
  { id: 'sub-11', restaurantId: 'subway', name: 'Meatball Marinara (Footlong)', category: 'Sandwiches', calories: 960, protein: 44, carbs: 104, fat: 40, sodium: 2020, proteinEfficiency: pe(44,960) },
  { id: 'sub-12', restaurantId: 'subway', name: 'Cold Cut Combo (6")', category: 'Sandwiches', calories: 310, protein: 14, carbs: 40, fat: 10, sodium: 910, proteinEfficiency: pe(14,310) },
  { id: 'sub-13', restaurantId: 'subway', name: 'Spicy Italian (6")', category: 'Sandwiches', calories: 460, protein: 18, carbs: 42, fat: 24, sodium: 1300, isSpicy: true, proteinEfficiency: pe(18,460) },
  { id: 'sub-14', restaurantId: 'subway', name: 'Veggie Delite (6")', category: 'Sandwiches', calories: 200, protein: 8, carbs: 38, fat: 2, sodium: 280, isVegetarian: true, proteinEfficiency: pe(8,200) },
  { id: 'sub-15', restaurantId: 'subway', name: 'Rotisserie Chicken (6")', category: 'Sandwiches', calories: 290, protein: 23, carbs: 40, fat: 5, sodium: 650, proteinEfficiency: pe(23,290) },
  { id: 'sub-16', restaurantId: 'subway', name: 'Black Forest Ham (6")', category: 'Sandwiches', calories: 260, protein: 18, carbs: 40, fat: 4, sodium: 820, proteinEfficiency: pe(18,260) },
  { id: 'sub-17', restaurantId: 'subway', name: 'Roast Beef (6")', category: 'Sandwiches', calories: 290, protein: 19, carbs: 40, fat: 5, sodium: 670, proteinEfficiency: pe(19,290) },
  { id: 'sub-18', restaurantId: 'subway', name: 'Buffalo Chicken (6")', category: 'Sandwiches', calories: 350, protein: 24, carbs: 41, fat: 10, sodium: 1120, isSpicy: true, proteinEfficiency: pe(24,350) },
  { id: 'sub-19', restaurantId: 'subway', name: 'Cookies (Chocolate Chip)', category: 'Desserts', calories: 200, protein: 2, carbs: 29, fat: 10, sodium: 150, isVegetarian: true, proteinEfficiency: pe(2,200) },
  { id: 'sub-20', restaurantId: 'subway', name: 'Chips (Baked Lays)', category: 'Sides', calories: 130, protein: 2, carbs: 23, fat: 3, sodium: 170, isVegetarian: true, proteinEfficiency: pe(2,130) },
  { id: 'sub-21', restaurantId: 'subway', name: 'Fountain Drink (Medium)', category: 'Drinks', calories: 200, protein: 0, carbs: 54, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
];

// ─── CHICK-FIL-A ───────────────────────────────────────
const chickfila: MenuItem[] = [
  { id: 'cfa-1', restaurantId: 'chickfila', name: 'Chick-fil-A Chicken Sandwich', category: 'Entrees', calories: 440, protein: 28, carbs: 40, fat: 19, sodium: 1400, proteinEfficiency: pe(28,440) },
  { id: 'cfa-2', restaurantId: 'chickfila', name: 'Deluxe Chicken Sandwich', category: 'Entrees', calories: 500, protein: 29, carbs: 43, fat: 22, sodium: 1640, proteinEfficiency: pe(29,500) },
  { id: 'cfa-3', restaurantId: 'chickfila', name: 'Spicy Chicken Sandwich', category: 'Entrees', calories: 450, protein: 29, carbs: 40, fat: 19, sodium: 1620, isSpicy: true, proteinEfficiency: pe(29,450) },
  { id: 'cfa-4', restaurantId: 'chickfila', name: 'Spicy Deluxe Sandwich', category: 'Entrees', calories: 510, protein: 30, carbs: 44, fat: 22, sodium: 1870, isSpicy: true, proteinEfficiency: pe(30,510) },
  { id: 'cfa-5', restaurantId: 'chickfila', name: 'Grilled Chicken Sandwich', category: 'Entrees', calories: 320, protein: 28, carbs: 36, fat: 6, sodium: 800, proteinEfficiency: pe(28,320) },
  { id: 'cfa-6', restaurantId: 'chickfila', name: 'Grilled Chicken Club', category: 'Entrees', calories: 440, protein: 35, carbs: 36, fat: 14, sodium: 1120, proteinEfficiency: pe(35,440) },
  { id: 'cfa-7', restaurantId: 'chickfila', name: 'Chicken Nuggets (8ct)', category: 'Entrees', calories: 250, protein: 27, carbs: 11, fat: 11, sodium: 1040, isGlutenFree: false, proteinEfficiency: pe(27,250) },
  { id: 'cfa-8', restaurantId: 'chickfila', name: 'Chicken Nuggets (12ct)', category: 'Entrees', calories: 380, protein: 40, carbs: 16, fat: 17, sodium: 1560, proteinEfficiency: pe(40,380) },
  { id: 'cfa-9', restaurantId: 'chickfila', name: 'Grilled Nuggets (8ct)', category: 'Entrees', calories: 130, protein: 25, carbs: 1, fat: 3, sodium: 440, isGlutenFree: true, proteinEfficiency: pe(25,130) },
  { id: 'cfa-10', restaurantId: 'chickfila', name: 'Grilled Nuggets (12ct)', category: 'Entrees', calories: 200, protein: 38, carbs: 2, fat: 4, sodium: 660, isGlutenFree: true, proteinEfficiency: pe(38,200) },
  { id: 'cfa-11', restaurantId: 'chickfila', name: 'Chick-n-Strips (3ct)', category: 'Entrees', calories: 310, protein: 28, carbs: 14, fat: 15, sodium: 850, proteinEfficiency: pe(28,310) },
  { id: 'cfa-12', restaurantId: 'chickfila', name: 'Cobb Salad', category: 'Salads', calories: 510, protein: 40, carbs: 28, fat: 27, sodium: 1310, isGlutenFree: true, proteinEfficiency: pe(40,510) },
  { id: 'cfa-13', restaurantId: 'chickfila', name: 'Market Salad', category: 'Salads', calories: 340, protein: 28, carbs: 27, fat: 14, sodium: 700, isGlutenFree: true, proteinEfficiency: pe(28,340) },
  { id: 'cfa-14', restaurantId: 'chickfila', name: 'Spicy Southwest Salad', category: 'Salads', calories: 450, protein: 33, carbs: 30, fat: 22, sodium: 1060, isSpicy: true, proteinEfficiency: pe(33,450) },
  { id: 'cfa-15', restaurantId: 'chickfila', name: 'Chicken Wrap', category: 'Wraps', calories: 350, protein: 28, carbs: 29, fat: 14, sodium: 930, proteinEfficiency: pe(28,350) },
  { id: 'cfa-16', restaurantId: 'chickfila', name: 'Grilled Chicken Cool Wrap', category: 'Wraps', calories: 350, protein: 37, carbs: 29, fat: 13, sodium: 1140, proteinEfficiency: pe(37,350) },
  { id: 'cfa-17', restaurantId: 'chickfila', name: 'Waffle Fries (Medium)', category: 'Sides', calories: 400, protein: 5, carbs: 45, fat: 22, sodium: 240, isVegetarian: true, proteinEfficiency: pe(5,400) },
  { id: 'cfa-18', restaurantId: 'chickfila', name: 'Waffle Fries (Large)', category: 'Sides', calories: 500, protein: 6, carbs: 56, fat: 28, sodium: 300, isVegetarian: true, proteinEfficiency: pe(6,500) },
  { id: 'cfa-19', restaurantId: 'chickfila', name: 'Mac & Cheese', category: 'Sides', calories: 450, protein: 17, carbs: 42, fat: 24, sodium: 1160, isVegetarian: true, proteinEfficiency: pe(17,450) },
  { id: 'cfa-20', restaurantId: 'chickfila', name: 'Side Salad', category: 'Sides', calories: 70, protein: 4, carbs: 6, fat: 4, sodium: 100, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(4,70) },
  { id: 'cfa-21', restaurantId: 'chickfila', name: 'Chicken Noodle Soup (Medium)', category: 'Sides', calories: 220, protein: 15, carbs: 23, fat: 7, sodium: 1240, proteinEfficiency: pe(15,220) },
  { id: 'cfa-22', restaurantId: 'chickfila', name: 'Fruit Cup (Medium)', category: 'Sides', calories: 50, protein: 1, carbs: 13, fat: 0, sodium: 0, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(1,50) },
  { id: 'cfa-23', restaurantId: 'chickfila', name: 'Greek Yogurt Parfait', category: 'Breakfast', calories: 270, protein: 12, carbs: 46, fat: 5, sodium: 105, isVegetarian: true, proteinEfficiency: pe(12,270) },
  { id: 'cfa-24', restaurantId: 'chickfila', name: 'Chicken Biscuit', category: 'Breakfast', calories: 450, protein: 18, carbs: 48, fat: 20, sodium: 1310, proteinEfficiency: pe(18,450) },
  { id: 'cfa-25', restaurantId: 'chickfila', name: 'Egg White Grill', category: 'Breakfast', calories: 300, protein: 25, carbs: 31, fat: 7, sodium: 970, proteinEfficiency: pe(25,300) },
  { id: 'cfa-26', restaurantId: 'chickfila', name: 'Hash Brown Scramble Bowl', category: 'Breakfast', calories: 400, protein: 27, carbs: 22, fat: 22, sodium: 1090, isGlutenFree: true, proteinEfficiency: pe(27,400) },
  { id: 'cfa-27', restaurantId: 'chickfila', name: 'Chocolate Milkshake (Small)', category: 'Drinks', calories: 570, protein: 13, carbs: 82, fat: 22, sodium: 440, isVegetarian: true, proteinEfficiency: pe(13,570) },
  { id: 'cfa-28', restaurantId: 'chickfila', name: 'Lemonade (Medium)', category: 'Drinks', calories: 220, protein: 0, carbs: 58, fat: 1, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'cfa-29', restaurantId: 'chickfila', name: 'Iced Coffee (Medium)', category: 'Drinks', calories: 200, protein: 4, carbs: 37, fat: 5, sodium: 105, isVegetarian: true, proteinEfficiency: pe(4,200) },
  { id: 'cfa-30', restaurantId: 'chickfila', name: 'Chocolate Chunk Cookie', category: 'Desserts', calories: 370, protein: 5, carbs: 49, fat: 18, sodium: 240, isVegetarian: true, proteinEfficiency: pe(5,370) },
];

// ─── SHAKE SHACK ───────────────────────────────────────
const shakeshack: MenuItem[] = [
  { id: 'ss-1', restaurantId: 'shakeshack', name: 'ShackBurger', category: 'Entrees', calories: 530, protein: 28, carbs: 27, fat: 34, sodium: 1090, proteinEfficiency: pe(28,530) },
  { id: 'ss-2', restaurantId: 'shakeshack', name: 'SmokeShack', category: 'Entrees', calories: 610, protein: 30, carbs: 28, fat: 39, sodium: 1440, isSpicy: true, proteinEfficiency: pe(30,610) },
  { id: 'ss-3', restaurantId: 'shakeshack', name: 'Double ShackBurger', category: 'Entrees', calories: 770, protein: 46, carbs: 27, fat: 51, sodium: 1550, proteinEfficiency: pe(46,770) },
  { id: 'ss-4', restaurantId: 'shakeshack', name: 'Shack Stack', category: 'Entrees', calories: 750, protein: 28, carbs: 36, fat: 52, sodium: 1270, proteinEfficiency: pe(28,750) },
  { id: 'ss-5', restaurantId: 'shakeshack', name: 'Hamburger', category: 'Entrees', calories: 430, protein: 24, carbs: 27, fat: 24, sodium: 790, proteinEfficiency: pe(24,430) },
  { id: 'ss-6', restaurantId: 'shakeshack', name: 'Chick\'n Shack', category: 'Entrees', calories: 580, protein: 29, carbs: 54, fat: 27, sodium: 1000, proteinEfficiency: pe(29,580) },
  { id: 'ss-7', restaurantId: 'shakeshack', name: 'Avocado Bacon Chicken', category: 'Entrees', calories: 700, protein: 35, carbs: 55, fat: 38, sodium: 1280, proteinEfficiency: pe(35,700) },
  { id: 'ss-8', restaurantId: 'shakeshack', name: 'Hot Chicken', category: 'Entrees', calories: 610, protein: 29, carbs: 55, fat: 29, sodium: 1350, isSpicy: true, proteinEfficiency: pe(29,610) },
  { id: 'ss-9', restaurantId: 'shakeshack', name: 'Flat-Top Hot Dog', category: 'Entrees', calories: 370, protein: 13, carbs: 25, fat: 24, sodium: 920, proteinEfficiency: pe(13,370) },
  { id: 'ss-10', restaurantId: 'shakeshack', name: 'Cheese Dog', category: 'Entrees', calories: 480, protein: 19, carbs: 25, fat: 33, sodium: 1120, proteinEfficiency: pe(19,480) },
  { id: 'ss-11', restaurantId: 'shakeshack', name: 'Crinkle Cut Fries', category: 'Sides', calories: 470, protein: 6, carbs: 52, fat: 27, sodium: 920, isVegetarian: true, proteinEfficiency: pe(6,470) },
  { id: 'ss-12', restaurantId: 'shakeshack', name: 'Cheese Fries', category: 'Sides', calories: 610, protein: 12, carbs: 52, fat: 39, sodium: 1180, isVegetarian: true, proteinEfficiency: pe(12,610) },
  { id: 'ss-13', restaurantId: 'shakeshack', name: 'Chocolate Shake', category: 'Drinks', calories: 730, protein: 14, carbs: 90, fat: 36, sodium: 380, isVegetarian: true, proteinEfficiency: pe(14,730) },
  { id: 'ss-14', restaurantId: 'shakeshack', name: 'Vanilla Shake', category: 'Drinks', calories: 680, protein: 12, carbs: 84, fat: 34, sodium: 320, isVegetarian: true, proteinEfficiency: pe(12,680) },
  { id: 'ss-15', restaurantId: 'shakeshack', name: 'Strawberry Shake', category: 'Drinks', calories: 690, protein: 12, carbs: 86, fat: 34, sodium: 330, isVegetarian: true, proteinEfficiency: pe(12,690) },
  { id: 'ss-16', restaurantId: 'shakeshack', name: 'Lemonade', category: 'Drinks', calories: 170, protein: 0, carbs: 44, fat: 0, sodium: 15, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'ss-17', restaurantId: 'shakeshack', name: 'Shack-made Lemonade', category: 'Drinks', calories: 240, protein: 0, carbs: 60, fat: 0, sodium: 15, isVegetarian: true, proteinEfficiency: 0 },
];

// ─── WINGSTOP ──────────────────────────────────────────
const wingstop: MenuItem[] = [
  { id: 'ws-1', restaurantId: 'wingstop', name: 'Classic Wings (10pc)', category: 'Entrees', calories: 860, protein: 72, carbs: 0, fat: 62, sodium: 2200, isGlutenFree: true, proteinEfficiency: pe(72,860) },
  { id: 'ws-2', restaurantId: 'wingstop', name: 'Crispy Wings (10pc)', category: 'Entrees', calories: 1100, protein: 68, carbs: 44, fat: 70, sodium: 2400, proteinEfficiency: pe(68,1100) },
  { id: 'ws-3', restaurantId: 'wingstop', name: 'Boneless Wings (10pc)', category: 'Entrees', calories: 970, protein: 58, carbs: 60, fat: 54, sodium: 2100, proteinEfficiency: pe(58,970) },
  { id: 'ws-4', restaurantId: 'wingstop', name: 'Classic Wings - Lemon Pepper (6pc)', category: 'Entrees', calories: 510, protein: 43, carbs: 1, fat: 37, sodium: 1380, isGlutenFree: true, proteinEfficiency: pe(43,510) },
  { id: 'ws-5', restaurantId: 'wingstop', name: 'Classic Wings - Atomic (6pc)', category: 'Entrees', calories: 420, protein: 42, carbs: 3, fat: 30, sodium: 1650, isSpicy: true, isGlutenFree: true, proteinEfficiency: pe(42,420) },
  { id: 'ws-6', restaurantId: 'wingstop', name: 'Classic Wings - Garlic Parmesan (6pc)', category: 'Entrees', calories: 530, protein: 42, carbs: 6, fat: 39, sodium: 1590, isGlutenFree: true, proteinEfficiency: pe(42,530) },
  { id: 'ws-7', restaurantId: 'wingstop', name: 'Classic Wings - Original Hot (6pc)', category: 'Entrees', calories: 430, protein: 42, carbs: 2, fat: 31, sodium: 1700, isSpicy: true, isGlutenFree: true, proteinEfficiency: pe(42,430) },
  { id: 'ws-8', restaurantId: 'wingstop', name: 'Classic Wings - Mild (6pc)', category: 'Entrees', calories: 440, protein: 42, carbs: 2, fat: 31, sodium: 1500, isGlutenFree: true, proteinEfficiency: pe(42,440) },
  { id: 'ws-9', restaurantId: 'wingstop', name: 'Classic Wings - Mango Habanero (6pc)', category: 'Entrees', calories: 480, protein: 42, carbs: 18, fat: 30, sodium: 1540, isSpicy: true, isGlutenFree: true, proteinEfficiency: pe(42,480) },
  { id: 'ws-10', restaurantId: 'wingstop', name: 'Classic Wings - Hawaiian (6pc)', category: 'Entrees', calories: 460, protein: 42, carbs: 12, fat: 30, sodium: 1460, isGlutenFree: true, proteinEfficiency: pe(42,460) },
  { id: 'ws-11', restaurantId: 'wingstop', name: 'Cajun Fried Corn', category: 'Sides', calories: 240, protein: 6, carbs: 26, fat: 13, sodium: 470, isVegetarian: true, proteinEfficiency: pe(6,240) },
  { id: 'ws-12', restaurantId: 'wingstop', name: 'Seasoned Fries (Regular)', category: 'Sides', calories: 330, protein: 5, carbs: 43, fat: 16, sodium: 580, isVegetarian: true, proteinEfficiency: pe(5,330) },
  { id: 'ws-13', restaurantId: 'wingstop', name: 'Seasoned Fries (Large)', category: 'Sides', calories: 490, protein: 7, carbs: 64, fat: 24, sodium: 870, isVegetarian: true, proteinEfficiency: pe(7,490) },
  { id: 'ws-14', restaurantId: 'wingstop', name: 'Veggie Sticks (Celery & Carrots)', category: 'Sides', calories: 20, protein: 1, carbs: 4, fat: 0, sodium: 40, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(1,20) },
  { id: 'ws-15', restaurantId: 'wingstop', name: 'Cheese Fries', category: 'Sides', calories: 500, protein: 12, carbs: 48, fat: 30, sodium: 980, isVegetarian: true, proteinEfficiency: pe(12,500) },
  { id: 'ws-16', restaurantId: 'wingstop', name: 'Ranch Dip', category: 'Sides', calories: 230, protein: 1, carbs: 3, fat: 24, sodium: 340, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(1,230) },
  { id: 'ws-17', restaurantId: 'wingstop', name: 'Blue Cheese Dip', category: 'Sides', calories: 240, protein: 2, carbs: 3, fat: 25, sodium: 380, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(2,240) },
  { id: 'ws-18', restaurantId: 'wingstop', name: 'Chocolate Chunk Cookie', category: 'Desserts', calories: 170, protein: 2, carbs: 23, fat: 8, sodium: 95, isVegetarian: true, proteinEfficiency: pe(2,170) },
  { id: 'ws-19', restaurantId: 'wingstop', name: 'Coca-Cola (Medium)', category: 'Drinks', calories: 210, protein: 0, carbs: 58, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
];

// ─── PANDA EXPRESS ─────────────────────────────────────
const pandaexpress: MenuItem[] = [
  // SIDES
  { id: 'pe-s1', restaurantId: 'pandaexpress', name: 'Chow Mein', category: 'Sides', calories: 510, protein: 13, carbs: 80, fat: 22, sodium: 860, isVegetarian: true, pandaCategory: 'side', proteinEfficiency: pe(13,510) },
  { id: 'pe-s2', restaurantId: 'pandaexpress', name: 'Fried Rice', category: 'Sides', calories: 520, protein: 11, carbs: 85, fat: 16, sodium: 850, isVegetarian: false, pandaCategory: 'side', proteinEfficiency: pe(11,520) },
  { id: 'pe-s3', restaurantId: 'pandaexpress', name: 'White Steamed Rice', category: 'Sides', calories: 380, protein: 7, carbs: 87, fat: 0, sodium: 0, isVegetarian: true, isGlutenFree: true, pandaCategory: 'side', proteinEfficiency: pe(7,380) },
  { id: 'pe-s4', restaurantId: 'pandaexpress', name: 'Brown Steamed Rice', category: 'Sides', calories: 420, protein: 9, carbs: 86, fat: 4, sodium: 0, isVegetarian: true, isGlutenFree: true, pandaCategory: 'side', proteinEfficiency: pe(9,420) },
  { id: 'pe-s5', restaurantId: 'pandaexpress', name: 'Super Greens', category: 'Sides', calories: 90, protein: 6, carbs: 10, fat: 3, sodium: 280, isVegetarian: true, isGlutenFree: true, pandaCategory: 'side', proteinEfficiency: pe(6,90) },
  // ENTREES
  { id: 'pe-e1', restaurantId: 'pandaexpress', name: 'Orange Chicken', category: 'Entrees', calories: 490, protein: 25, carbs: 51, fat: 23, sodium: 820, isSpicy: false, pandaCategory: 'entree', proteinEfficiency: pe(25,490) },
  { id: 'pe-e2', restaurantId: 'pandaexpress', name: 'Beijing Beef', category: 'Entrees', calories: 470, protein: 14, carbs: 46, fat: 26, sodium: 660, isSpicy: true, pandaCategory: 'entree', proteinEfficiency: pe(14,470) },
  { id: 'pe-e3', restaurantId: 'pandaexpress', name: 'Kung Pao Chicken', category: 'Entrees', calories: 290, protein: 16, carbs: 14, fat: 19, sodium: 970, isSpicy: true, pandaCategory: 'entree', proteinEfficiency: pe(16,290) },
  { id: 'pe-e4', restaurantId: 'pandaexpress', name: 'Broccoli Beef', category: 'Entrees', calories: 150, protein: 9, carbs: 13, fat: 7, sodium: 520, pandaCategory: 'entree', proteinEfficiency: pe(9,150) },
  { id: 'pe-e5', restaurantId: 'pandaexpress', name: 'Grilled Teriyaki Chicken', category: 'Entrees', calories: 300, protein: 36, carbs: 8, fat: 13, sodium: 530, isGlutenFree: true, pandaCategory: 'entree', proteinEfficiency: pe(36,300) },
  { id: 'pe-e6', restaurantId: 'pandaexpress', name: 'Mushroom Chicken', category: 'Entrees', calories: 220, protein: 15, carbs: 10, fat: 14, sodium: 840, pandaCategory: 'entree', proteinEfficiency: pe(15,220) },
  { id: 'pe-e7', restaurantId: 'pandaexpress', name: 'SweetFire Chicken Breast', category: 'Entrees', calories: 380, protein: 17, carbs: 47, fat: 15, sodium: 380, isSpicy: true, pandaCategory: 'entree', proteinEfficiency: pe(17,380) },
  { id: 'pe-e8', restaurantId: 'pandaexpress', name: 'String Bean Chicken Breast', category: 'Entrees', calories: 190, protein: 14, carbs: 13, fat: 9, sodium: 740, pandaCategory: 'entree', proteinEfficiency: pe(14,190) },
  { id: 'pe-e9', restaurantId: 'pandaexpress', name: 'Black Pepper Chicken', category: 'Entrees', calories: 280, protein: 15, carbs: 15, fat: 19, sodium: 760, isSpicy: true, pandaCategory: 'entree', proteinEfficiency: pe(15,280) },
  { id: 'pe-e10', restaurantId: 'pandaexpress', name: 'Honey Walnut Shrimp', category: 'Entrees', calories: 360, protein: 14, carbs: 35, fat: 23, sodium: 470, pandaCategory: 'entree', proteinEfficiency: pe(14,360) },
  { id: 'pe-e11', restaurantId: 'pandaexpress', name: 'Honey Sesame Chicken Breast', category: 'Entrees', calories: 420, protein: 16, carbs: 53, fat: 21, sodium: 500, pandaCategory: 'entree', proteinEfficiency: pe(16,420) },
  { id: 'pe-e12', restaurantId: 'pandaexpress', name: 'Black Pepper Angus Steak', category: 'Entrees', calories: 180, protein: 19, carbs: 11, fat: 7, sodium: 710, isSpicy: true, pandaCategory: 'entree', proteinEfficiency: pe(19,180) },
  { id: 'pe-e13', restaurantId: 'pandaexpress', name: 'Eggplant Tofu', category: 'Entrees', calories: 340, protein: 7, carbs: 39, fat: 21, sodium: 680, isVegetarian: true, isSpicy: true, pandaCategory: 'entree', proteinEfficiency: pe(7,340) },
  // APPETIZERS
  { id: 'pe-a1', restaurantId: 'pandaexpress', name: 'Chicken Egg Roll (1)', category: 'Appetizers', calories: 200, protein: 8, carbs: 20, fat: 10, sodium: 390, pandaCategory: 'appetizer', proteinEfficiency: pe(8,200) },
  { id: 'pe-a2', restaurantId: 'pandaexpress', name: 'Veggie Spring Roll (2)', category: 'Appetizers', calories: 190, protein: 4, carbs: 22, fat: 10, sodium: 420, isVegetarian: true, pandaCategory: 'appetizer', proteinEfficiency: pe(4,190) },
  { id: 'pe-a3', restaurantId: 'pandaexpress', name: 'Cream Cheese Rangoon (3)', category: 'Appetizers', calories: 190, protein: 5, carbs: 24, fat: 8, sodium: 310, isVegetarian: true, pandaCategory: 'appetizer', proteinEfficiency: pe(5,190) },
  // DRINKS
  { id: 'pe-d1', restaurantId: 'pandaexpress', name: 'Fountain Drink (Medium)', category: 'Drinks', calories: 200, protein: 0, carbs: 54, fat: 0, sodium: 10, isVegetarian: true, pandaCategory: 'drink', proteinEfficiency: 0 },
  { id: 'pe-d2', restaurantId: 'pandaexpress', name: 'Bottled Water', category: 'Drinks', calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0, isVegetarian: true, isGlutenFree: true, pandaCategory: 'drink', proteinEfficiency: 0 },
];

// ─── FIVE GUYS ─────────────────────────────────────────
const fiveguys: MenuItem[] = [
  { id: 'fg-1', restaurantId: 'fiveguys', name: 'Hamburger', category: 'Entrees', calories: 700, protein: 39, carbs: 39, fat: 43, sodium: 430, proteinEfficiency: pe(39,700) },
  { id: 'fg-2', restaurantId: 'fiveguys', name: 'Cheeseburger', category: 'Entrees', calories: 840, protein: 47, carbs: 40, fat: 55, sodium: 1050, proteinEfficiency: pe(47,840) },
  { id: 'fg-3', restaurantId: 'fiveguys', name: 'Bacon Burger', category: 'Entrees', calories: 780, protein: 43, carbs: 39, fat: 50, sodium: 690, proteinEfficiency: pe(43,780) },
  { id: 'fg-4', restaurantId: 'fiveguys', name: 'Bacon Cheeseburger', category: 'Entrees', calories: 920, protein: 51, carbs: 40, fat: 62, sodium: 1310, proteinEfficiency: pe(51,920) },
  { id: 'fg-5', restaurantId: 'fiveguys', name: 'Little Hamburger', category: 'Entrees', calories: 480, protein: 23, carbs: 38, fat: 26, sodium: 280, proteinEfficiency: pe(23,480) },
  { id: 'fg-6', restaurantId: 'fiveguys', name: 'Little Cheeseburger', category: 'Entrees', calories: 550, protein: 27, carbs: 39, fat: 32, sodium: 590, proteinEfficiency: pe(27,550) },
  { id: 'fg-7', restaurantId: 'fiveguys', name: 'Little Bacon Burger', category: 'Entrees', calories: 560, protein: 27, carbs: 38, fat: 33, sodium: 540, proteinEfficiency: pe(27,560) },
  { id: 'fg-8', restaurantId: 'fiveguys', name: 'Little Bacon Cheeseburger', category: 'Entrees', calories: 630, protein: 31, carbs: 39, fat: 39, sodium: 850, proteinEfficiency: pe(31,630) },
  { id: 'fg-9', restaurantId: 'fiveguys', name: 'Hot Dog', category: 'Entrees', calories: 545, protein: 18, carbs: 40, fat: 35, sodium: 1130, proteinEfficiency: pe(18,545) },
  { id: 'fg-10', restaurantId: 'fiveguys', name: 'Cheese Dog', category: 'Entrees', calories: 615, protein: 22, carbs: 40, fat: 41, sodium: 1440, proteinEfficiency: pe(22,615) },
  { id: 'fg-11', restaurantId: 'fiveguys', name: 'Bacon Dog', category: 'Entrees', calories: 625, protein: 22, carbs: 40, fat: 42, sodium: 1390, proteinEfficiency: pe(22,625) },
  { id: 'fg-12', restaurantId: 'fiveguys', name: 'BLT', category: 'Sandwiches', calories: 440, protein: 20, carbs: 37, fat: 26, sodium: 680, proteinEfficiency: pe(20,440) },
  { id: 'fg-13', restaurantId: 'fiveguys', name: 'Grilled Cheese', category: 'Sandwiches', calories: 470, protein: 16, carbs: 37, fat: 26, sodium: 715, isVegetarian: true, proteinEfficiency: pe(16,470) },
  { id: 'fg-14', restaurantId: 'fiveguys', name: 'Veggie Sandwich', category: 'Sandwiches', calories: 440, protein: 15, carbs: 60, fat: 15, sodium: 920, isVegetarian: true, proteinEfficiency: pe(15,440) },
  { id: 'fg-15', restaurantId: 'fiveguys', name: 'Regular Fries', category: 'Sides', calories: 526, protein: 8, carbs: 64, fat: 23, sodium: 531, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(8,526) },
  { id: 'fg-16', restaurantId: 'fiveguys', name: 'Large Fries', category: 'Sides', calories: 953, protein: 15, carbs: 116, fat: 41, sodium: 962, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(15,953) },
  { id: 'fg-17', restaurantId: 'fiveguys', name: 'Cajun Fries (Regular)', category: 'Sides', calories: 526, protein: 8, carbs: 64, fat: 23, sodium: 786, isVegetarian: true, isGlutenFree: true, isSpicy: true, proteinEfficiency: pe(8,526) },
  { id: 'fg-18', restaurantId: 'fiveguys', name: 'Vanilla Milkshake', category: 'Drinks', calories: 580, protein: 12, carbs: 68, fat: 31, sodium: 340, isVegetarian: true, proteinEfficiency: pe(12,580) },
  { id: 'fg-19', restaurantId: 'fiveguys', name: 'Chocolate Milkshake', category: 'Drinks', calories: 630, protein: 13, carbs: 77, fat: 33, sodium: 400, isVegetarian: true, proteinEfficiency: pe(13,630) },
  { id: 'fg-20', restaurantId: 'fiveguys', name: 'Peanut Butter Milkshake', category: 'Drinks', calories: 700, protein: 20, carbs: 70, fat: 42, sodium: 450, isVegetarian: true, proteinEfficiency: pe(20,700) },
];

// ─── PANERA BREAD ──────────────────────────────────────
const panera: MenuItem[] = [
  { id: 'pan-1', restaurantId: 'panera', name: 'Fuji Apple Chicken Salad (Whole)', category: 'Salads', calories: 570, protein: 30, carbs: 49, fat: 28, sodium: 960, proteinEfficiency: pe(30,570) },
  { id: 'pan-2', restaurantId: 'panera', name: 'Caesar Salad with Chicken (Whole)', category: 'Salads', calories: 470, protein: 32, carbs: 22, fat: 28, sodium: 1030, proteinEfficiency: pe(32,470) },
  { id: 'pan-3', restaurantId: 'panera', name: 'Greek Salad (Whole)', category: 'Salads', calories: 400, protein: 8, carbs: 18, fat: 34, sodium: 1120, isVegetarian: true, proteinEfficiency: pe(8,400) },
  { id: 'pan-4', restaurantId: 'panera', name: 'Southwest Caesar Salad with Chicken', category: 'Salads', calories: 620, protein: 35, carbs: 38, fat: 36, sodium: 1280, isSpicy: true, proteinEfficiency: pe(35,620) },
  { id: 'pan-5', restaurantId: 'panera', name: 'Broccoli Cheddar Soup (Bread Bowl)', category: 'Bowls', calories: 910, protein: 28, carbs: 114, fat: 36, sodium: 1930, isVegetarian: true, proteinEfficiency: pe(28,910) },
  { id: 'pan-6', restaurantId: 'panera', name: 'Broccoli Cheddar Soup (Cup)', category: 'Sides', calories: 230, protein: 9, carbs: 15, fat: 15, sodium: 960, isVegetarian: true, proteinEfficiency: pe(9,230) },
  { id: 'pan-7', restaurantId: 'panera', name: 'Chicken Noodle Soup (Cup)', category: 'Sides', calories: 110, protein: 8, carbs: 13, fat: 3, sodium: 900, proteinEfficiency: pe(8,110) },
  { id: 'pan-8', restaurantId: 'panera', name: 'Creamy Tomato Soup (Cup)', category: 'Sides', calories: 250, protein: 5, carbs: 22, fat: 16, sodium: 850, isVegetarian: true, proteinEfficiency: pe(5,250) },
  { id: 'pan-9', restaurantId: 'panera', name: 'Bacon Turkey Bravo Sandwich', category: 'Sandwiches', calories: 600, protein: 32, carbs: 52, fat: 28, sodium: 1680, proteinEfficiency: pe(32,600) },
  { id: 'pan-10', restaurantId: 'panera', name: 'Napa Almond Chicken Salad Sandwich', category: 'Sandwiches', calories: 670, protein: 25, carbs: 56, fat: 38, sodium: 1070, proteinEfficiency: pe(25,670) },
  { id: 'pan-11', restaurantId: 'panera', name: 'Classic Grilled Cheese', category: 'Sandwiches', calories: 740, protein: 25, carbs: 56, fat: 44, sodium: 1390, isVegetarian: true, proteinEfficiency: pe(25,740) },
  { id: 'pan-12', restaurantId: 'panera', name: 'Frontega Chicken Panini', category: 'Sandwiches', calories: 860, protein: 40, carbs: 79, fat: 39, sodium: 1870, proteinEfficiency: pe(40,860) },
  { id: 'pan-13', restaurantId: 'panera', name: 'Roasted Turkey & Avocado BLT', category: 'Sandwiches', calories: 610, protein: 33, carbs: 51, fat: 30, sodium: 1350, proteinEfficiency: pe(33,610) },
  { id: 'pan-14', restaurantId: 'panera', name: 'Mediterranean Veggie Sandwich', category: 'Sandwiches', calories: 560, protein: 17, carbs: 62, fat: 27, sodium: 1310, isVegetarian: true, proteinEfficiency: pe(17,560) },
  { id: 'pan-15', restaurantId: 'panera', name: 'Steak & White Cheddar Panini', category: 'Sandwiches', calories: 870, protein: 44, carbs: 65, fat: 46, sodium: 2040, proteinEfficiency: pe(44,870) },
  { id: 'pan-16', restaurantId: 'panera', name: 'Chipotle Chicken Avocado Melt', category: 'Sandwiches', calories: 830, protein: 47, carbs: 60, fat: 43, sodium: 1980, isSpicy: true, proteinEfficiency: pe(47,830) },
  { id: 'pan-17', restaurantId: 'panera', name: 'Teriyaki Chicken & Broccoli Bowl', category: 'Bowls', calories: 470, protein: 30, carbs: 66, fat: 8, sodium: 1220, proteinEfficiency: pe(30,470) },
  { id: 'pan-18', restaurantId: 'panera', name: 'Baja Bowl with Chicken', category: 'Bowls', calories: 640, protein: 38, carbs: 57, fat: 28, sodium: 1590, isSpicy: true, proteinEfficiency: pe(38,640) },
  { id: 'pan-19', restaurantId: 'panera', name: 'Chocolate Chip Cookie', category: 'Desserts', calories: 360, protein: 4, carbs: 49, fat: 18, sodium: 300, isVegetarian: true, proteinEfficiency: pe(4,360) },
  { id: 'pan-20', restaurantId: 'panera', name: 'Kitchen Sink Cookie', category: 'Desserts', calories: 390, protein: 5, carbs: 50, fat: 20, sodium: 340, isVegetarian: true, proteinEfficiency: pe(5,390) },
  { id: 'pan-21', restaurantId: 'panera', name: 'Iced Coffee (Large)', category: 'Drinks', calories: 20, protein: 0, carbs: 4, fat: 0, sodium: 15, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'pan-22', restaurantId: 'panera', name: 'Mango Smoothie', category: 'Drinks', calories: 300, protein: 16, carbs: 55, fat: 2, sodium: 180, isVegetarian: true, proteinEfficiency: pe(16,300) },
  { id: 'pan-23', restaurantId: 'panera', name: 'French Baguette', category: 'Sides', calories: 270, protein: 11, carbs: 56, fat: 1, sodium: 620, isVegetarian: true, proteinEfficiency: pe(11,270) },
  { id: 'pan-24', restaurantId: 'panera', name: 'Chips', category: 'Sides', calories: 160, protein: 2, carbs: 15, fat: 10, sodium: 170, isVegetarian: true, proteinEfficiency: pe(2,160) },
];

// ─── QDOBA ─────────────────────────────────────────────
const qdoba: MenuItem[] = [
  { id: 'qd-1', restaurantId: 'qdoba', name: 'Chicken Burrito', category: 'Entrees', calories: 915, protein: 52, carbs: 92, fat: 36, sodium: 2110, proteinEfficiency: pe(52,915) },
  { id: 'qd-2', restaurantId: 'qdoba', name: 'Steak Burrito', category: 'Entrees', calories: 950, protein: 53, carbs: 92, fat: 38, sodium: 2020, proteinEfficiency: pe(53,950) },
  { id: 'qd-3', restaurantId: 'qdoba', name: 'Ground Beef Burrito', category: 'Entrees', calories: 1010, protein: 50, carbs: 93, fat: 44, sodium: 2290, proteinEfficiency: pe(50,1010) },
  { id: 'qd-4', restaurantId: 'qdoba', name: 'Impossible Meat Burrito', category: 'Entrees', calories: 935, protein: 42, carbs: 100, fat: 36, sodium: 2400, isVegetarian: true, proteinEfficiency: pe(42,935) },
  { id: 'qd-5', restaurantId: 'qdoba', name: 'Chicken Bowl', category: 'Bowls', calories: 665, protein: 49, carbs: 52, fat: 28, sodium: 1770, proteinEfficiency: pe(49,665) },
  { id: 'qd-6', restaurantId: 'qdoba', name: 'Steak Bowl', category: 'Bowls', calories: 700, protein: 50, carbs: 52, fat: 30, sodium: 1680, proteinEfficiency: pe(50,700) },
  { id: 'qd-7', restaurantId: 'qdoba', name: 'Chicken Tacos (3)', category: 'Entrees', calories: 640, protein: 40, carbs: 45, fat: 32, sodium: 1410, proteinEfficiency: pe(40,640) },
  { id: 'qd-8', restaurantId: 'qdoba', name: 'Chicken Quesadilla', category: 'Entrees', calories: 1060, protein: 55, carbs: 72, fat: 58, sodium: 2180, proteinEfficiency: pe(55,1060) },
  { id: 'qd-9', restaurantId: 'qdoba', name: 'Chicken Nachos', category: 'Entrees', calories: 1260, protein: 62, carbs: 96, fat: 68, sodium: 2700, proteinEfficiency: pe(62,1260) },
  { id: 'qd-10', restaurantId: 'qdoba', name: 'Chips & Queso', category: 'Sides', calories: 640, protein: 16, carbs: 60, fat: 38, sodium: 1340, isVegetarian: true, proteinEfficiency: pe(16,640) },
  { id: 'qd-11', restaurantId: 'qdoba', name: 'Chips & Guacamole', category: 'Sides', calories: 570, protein: 8, carbs: 58, fat: 34, sodium: 680, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(8,570) },
  { id: 'qd-12', restaurantId: 'qdoba', name: 'Tortilla Soup (Cup)', category: 'Sides', calories: 170, protein: 8, carbs: 16, fat: 9, sodium: 780, proteinEfficiency: pe(8,170) },
  { id: 'qd-13', restaurantId: 'qdoba', name: 'Mexican Street Corn', category: 'Sides', calories: 180, protein: 5, carbs: 20, fat: 10, sodium: 350, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(5,180) },
  { id: 'qd-14', restaurantId: 'qdoba', name: 'Churros (2)', category: 'Desserts', calories: 230, protein: 3, carbs: 30, fat: 12, sodium: 170, isVegetarian: true, proteinEfficiency: pe(3,230) },
  { id: 'qd-15', restaurantId: 'qdoba', name: 'Fountain Drink (Medium)', category: 'Drinks', calories: 200, protein: 0, carbs: 54, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'qd-16', restaurantId: 'qdoba', name: 'Loaded Tortilla Soup (Bowl)', category: 'Bowls', calories: 340, protein: 16, carbs: 32, fat: 18, sodium: 1560, isSpicy: true, proteinEfficiency: pe(16,340) },
];

// ─── MOD PIZZA ─────────────────────────────────────────
const modpizza: MenuItem[] = [
  { id: 'mod-1', restaurantId: 'modpizza', name: 'Mad Dog (11")', category: 'Entrees', calories: 1190, protein: 58, carbs: 110, fat: 54, sodium: 3020, isSpicy: true, proteinEfficiency: pe(58,1190) },
  { id: 'mod-2', restaurantId: 'modpizza', name: 'Dillon James (11")', category: 'Entrees', calories: 1040, protein: 50, carbs: 110, fat: 40, sodium: 2580, proteinEfficiency: pe(50,1040) },
  { id: 'mod-3', restaurantId: 'modpizza', name: 'Lucy Sunshine (11")', category: 'Entrees', calories: 790, protein: 36, carbs: 108, fat: 22, sodium: 1800, proteinEfficiency: pe(36,790) },
  { id: 'mod-4', restaurantId: 'modpizza', name: 'Jasper (11")', category: 'Entrees', calories: 1230, protein: 56, carbs: 111, fat: 56, sodium: 3100, proteinEfficiency: pe(56,1230) },
  { id: 'mod-5', restaurantId: 'modpizza', name: 'Tristan (11")', category: 'Entrees', calories: 870, protein: 42, carbs: 110, fat: 28, sodium: 2080, proteinEfficiency: pe(42,870) },
  { id: 'mod-6', restaurantId: 'modpizza', name: 'Calexico (11")', category: 'Entrees', calories: 1050, protein: 48, carbs: 112, fat: 42, sodium: 2640, isSpicy: true, proteinEfficiency: pe(48,1050) },
  { id: 'mod-7', restaurantId: 'modpizza', name: 'Simple MOD Pizza', category: 'Entrees', calories: 680, protein: 30, carbs: 108, fat: 14, sodium: 1560, isVegetarian: true, proteinEfficiency: pe(30,680) },
  { id: 'mod-8', restaurantId: 'modpizza', name: 'MOD Caesar Salad', category: 'Salads', calories: 360, protein: 8, carbs: 16, fat: 30, sodium: 590, isVegetarian: true, proteinEfficiency: pe(8,360) },
  { id: 'mod-9', restaurantId: 'modpizza', name: 'Garden Salad', category: 'Salads', calories: 170, protein: 4, carbs: 14, fat: 12, sodium: 310, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(4,170) },
  { id: 'mod-10', restaurantId: 'modpizza', name: 'Chocolate No Name Cake', category: 'Desserts', calories: 350, protein: 5, carbs: 52, fat: 14, sodium: 310, isVegetarian: true, proteinEfficiency: pe(5,350) },
  { id: 'mod-11', restaurantId: 'modpizza', name: 'Cinnamon Strips', category: 'Desserts', calories: 290, protein: 4, carbs: 42, fat: 12, sodium: 240, isVegetarian: true, proteinEfficiency: pe(4,290) },
  { id: 'mod-12', restaurantId: 'modpizza', name: 'Fountain Drink (Medium)', category: 'Drinks', calories: 200, protein: 0, carbs: 54, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'mod-13', restaurantId: 'modpizza', name: 'Milkshake (Vanilla)', category: 'Drinks', calories: 380, protein: 8, carbs: 48, fat: 18, sodium: 220, isVegetarian: true, proteinEfficiency: pe(8,380) },
];

// ─── JERSEY MIKE'S ─────────────────────────────────────
const jerseymikes: MenuItem[] = [
  { id: 'jm-1', restaurantId: 'jerseymikes', name: '#13 The Original Italian (Regular)', category: 'Sandwiches', calories: 870, protein: 40, carbs: 64, fat: 50, sodium: 2390, proteinEfficiency: pe(40,870) },
  { id: 'jm-2', restaurantId: 'jerseymikes', name: '#7 Turkey & Provolone (Regular)', category: 'Sandwiches', calories: 560, protein: 34, carbs: 56, fat: 20, sodium: 1650, proteinEfficiency: pe(34,560) },
  { id: 'jm-3', restaurantId: 'jerseymikes', name: '#6 Roast Beef & Provolone (Regular)', category: 'Sandwiches', calories: 580, protein: 38, carbs: 54, fat: 22, sodium: 1460, proteinEfficiency: pe(38,580) },
  { id: 'jm-4', restaurantId: 'jerseymikes', name: '#9 Club Supreme (Regular)', category: 'Sandwiches', calories: 690, protein: 44, carbs: 56, fat: 30, sodium: 2060, proteinEfficiency: pe(44,690) },
  { id: 'jm-5', restaurantId: 'jerseymikes', name: '#43 Chipotle Cheese Steak (Regular)', category: 'Sandwiches', calories: 780, protein: 48, carbs: 58, fat: 38, sodium: 2080, isSpicy: true, proteinEfficiency: pe(48,780) },
  { id: 'jm-6', restaurantId: 'jerseymikes', name: '#17 Mike\'s Famous Philly (Regular)', category: 'Sandwiches', calories: 750, protein: 46, carbs: 56, fat: 36, sodium: 1880, proteinEfficiency: pe(46,750) },
  { id: 'jm-7', restaurantId: 'jerseymikes', name: '#5 Super Sub (Regular)', category: 'Sandwiches', calories: 720, protein: 38, carbs: 58, fat: 36, sodium: 2160, proteinEfficiency: pe(38,720) },
  { id: 'jm-8', restaurantId: 'jerseymikes', name: '#10 Tuna Fish (Regular)', category: 'Sandwiches', calories: 830, protein: 34, carbs: 56, fat: 50, sodium: 1280, proteinEfficiency: pe(34,830) },
  { id: 'jm-9', restaurantId: 'jerseymikes', name: '#3 Ham & Provolone (Regular)', category: 'Sandwiches', calories: 530, protein: 30, carbs: 56, fat: 18, sodium: 1540, proteinEfficiency: pe(30,530) },
  { id: 'jm-10', restaurantId: 'jerseymikes', name: '#56 Big Kahuna Cheese Steak (Regular)', category: 'Sandwiches', calories: 820, protein: 48, carbs: 62, fat: 40, sodium: 2250, isSpicy: true, proteinEfficiency: pe(48,820) },
  { id: 'jm-11', restaurantId: 'jerseymikes', name: '#1 BLT (Regular)', category: 'Sandwiches', calories: 640, protein: 22, carbs: 54, fat: 38, sodium: 1380, proteinEfficiency: pe(22,640) },
  { id: 'jm-12', restaurantId: 'jerseymikes', name: '#14 Veggie (Regular)', category: 'Sandwiches', calories: 510, protein: 22, carbs: 60, fat: 20, sodium: 1180, isVegetarian: true, proteinEfficiency: pe(22,510) },
  { id: 'jm-13', restaurantId: 'jerseymikes', name: '#8 Club Sub (Regular)', category: 'Sandwiches', calories: 620, protein: 36, carbs: 56, fat: 26, sodium: 1720, proteinEfficiency: pe(36,620) },
  { id: 'jm-14', restaurantId: 'jerseymikes', name: 'BBQ Chips', category: 'Sides', calories: 150, protein: 2, carbs: 15, fat: 9, sodium: 210, isVegetarian: true, proteinEfficiency: pe(2,150) },
  { id: 'jm-15', restaurantId: 'jerseymikes', name: 'Salt & Vinegar Chips', category: 'Sides', calories: 140, protein: 2, carbs: 16, fat: 8, sodium: 280, isVegetarian: true, proteinEfficiency: pe(2,140) },
  { id: 'jm-16', restaurantId: 'jerseymikes', name: 'Chocolate Chunk Cookie', category: 'Desserts', calories: 400, protein: 4, carbs: 52, fat: 20, sodium: 350, isVegetarian: true, proteinEfficiency: pe(4,400) },
  { id: 'jm-17', restaurantId: 'jerseymikes', name: 'Fountain Drink (Medium)', category: 'Drinks', calories: 200, protein: 0, carbs: 54, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
];

// ─── PRIMANTI BROS ─────────────────────────────────────
const primantibros: MenuItem[] = [
  { id: 'pb-1', restaurantId: 'primantibros', name: 'Pitts-Burger', category: 'Entrees', calories: 960, protein: 48, carbs: 62, fat: 55, sodium: 1640, proteinEfficiency: pe(48,960) },
  { id: 'pb-2', restaurantId: 'primantibros', name: 'Capicola & Cheese', category: 'Sandwiches', calories: 720, protein: 32, carbs: 60, fat: 38, sodium: 2100, proteinEfficiency: pe(32,720) },
  { id: 'pb-3', restaurantId: 'primantibros', name: 'Pastrami & Cheese', category: 'Sandwiches', calories: 740, protein: 38, carbs: 58, fat: 38, sodium: 2080, proteinEfficiency: pe(38,740) },
  { id: 'pb-4', restaurantId: 'primantibros', name: 'Roast Beef & Cheese', category: 'Sandwiches', calories: 680, protein: 42, carbs: 56, fat: 30, sodium: 1560, proteinEfficiency: pe(42,680) },
  { id: 'pb-5', restaurantId: 'primantibros', name: 'Kolbassi & Cheese', category: 'Sandwiches', calories: 850, protein: 34, carbs: 62, fat: 50, sodium: 2180, proteinEfficiency: pe(34,850) },
  { id: 'pb-6', restaurantId: 'primantibros', name: 'Black Angus Steak & Cheese', category: 'Sandwiches', calories: 780, protein: 46, carbs: 58, fat: 38, sodium: 1740, proteinEfficiency: pe(46,780) },
  { id: 'pb-7', restaurantId: 'primantibros', name: 'Turkey & Cheese', category: 'Sandwiches', calories: 600, protein: 34, carbs: 58, fat: 24, sodium: 1640, proteinEfficiency: pe(34,600) },
  { id: 'pb-8', restaurantId: 'primantibros', name: 'Chicken Fingers (6pc)', category: 'Entrees', calories: 540, protein: 36, carbs: 30, fat: 30, sodium: 1200, proteinEfficiency: pe(36,540) },
  { id: 'pb-9', restaurantId: 'primantibros', name: 'Fish & Cheese', category: 'Sandwiches', calories: 690, protein: 28, carbs: 64, fat: 34, sodium: 1480, proteinEfficiency: pe(28,690) },
  { id: 'pb-10', restaurantId: 'primantibros', name: 'Cheese & Egg', category: 'Sandwiches', calories: 580, protein: 24, carbs: 56, fat: 28, sodium: 1100, isVegetarian: true, proteinEfficiency: pe(24,580) },
  { id: 'pb-11', restaurantId: 'primantibros', name: 'Primanti Wings (10pc)', category: 'Entrees', calories: 780, protein: 60, carbs: 8, fat: 56, sodium: 2400, isGlutenFree: true, proteinEfficiency: pe(60,780) },
  { id: 'pb-12', restaurantId: 'primantibros', name: 'Coleslaw', category: 'Sides', calories: 130, protein: 1, carbs: 12, fat: 9, sodium: 280, isVegetarian: true, isGlutenFree: true, proteinEfficiency: pe(1,130) },
  { id: 'pb-13', restaurantId: 'primantibros', name: 'Fries', category: 'Sides', calories: 380, protein: 5, carbs: 48, fat: 20, sodium: 460, isVegetarian: true, proteinEfficiency: pe(5,380) },
  { id: 'pb-14', restaurantId: 'primantibros', name: 'Loaded Fries', category: 'Sides', calories: 640, protein: 18, carbs: 52, fat: 40, sodium: 980, proteinEfficiency: pe(18,640) },
  { id: 'pb-15', restaurantId: 'primantibros', name: 'Coca-Cola (Medium)', category: 'Drinks', calories: 210, protein: 0, carbs: 58, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: 0 },
  { id: 'pb-16', restaurantId: 'primantibros', name: 'Iron City Beer', category: 'Drinks', calories: 145, protein: 1, carbs: 12, fat: 0, sodium: 10, isVegetarian: true, proteinEfficiency: pe(1,145) },
];

export const allMenuItems: Record<string, MenuItem[]> = {
  chipotle,
  mcdonalds,
  subway,
  chickfila,
  shakeshack,
  wingstop,
  pandaexpress,
  fiveguys,
  panera,
  qdoba,
  modpizza,
  jerseymikes,
  primantibros,
};

export function getMenuForRestaurant(restaurantId: string): MenuItem[] {
  return allMenuItems[restaurantId] || [];
}

export function getAllMenuItems(): MenuItem[] {
  return Object.values(allMenuItems).flat();
}
