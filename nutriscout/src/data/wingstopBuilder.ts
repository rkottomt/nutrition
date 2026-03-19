import type { WingstopFlavor } from '../types';

// Per-wing nutrition based on Wingstop's published data
// Classic (bone-in) values per wing, Boneless values per boneless wing piece
export const wingstopFlavors: WingstopFlavor[] = [
  {
    id: 'ws-atomic', name: 'Atomic', isSpicy: true,
    caloriesPerClassicWing: 70, proteinPerClassicWing: 7, carbsPerClassicWing: 0.5, fatPerClassicWing: 5, sodiumPerClassicWing: 275,
    caloriesPerBonelessWing: 97, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 6, fatPerBonelessWing: 5.4, sodiumPerBonelessWing: 210,
  },
  {
    id: 'ws-mango-hab', name: 'Mango Habanero', isSpicy: true,
    caloriesPerClassicWing: 80, proteinPerClassicWing: 7, carbsPerClassicWing: 3, fatPerClassicWing: 5, sodiumPerClassicWing: 257,
    caloriesPerBonelessWing: 107, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 9, fatPerBonelessWing: 5.4, sodiumPerBonelessWing: 220,
  },
  {
    id: 'ws-original-hot', name: 'Original Hot', isSpicy: true,
    caloriesPerClassicWing: 72, proteinPerClassicWing: 7, carbsPerClassicWing: 0.3, fatPerClassicWing: 5.2, sodiumPerClassicWing: 283,
    caloriesPerBonelessWing: 99, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 6.3, fatPerBonelessWing: 5.6, sodiumPerBonelessWing: 230,
  },
  {
    id: 'ws-cajun', name: 'Cajun', isSpicy: true,
    caloriesPerClassicWing: 75, proteinPerClassicWing: 7, carbsPerClassicWing: 0.5, fatPerClassicWing: 5.5, sodiumPerClassicWing: 270,
    caloriesPerBonelessWing: 100, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 6.5, fatPerBonelessWing: 5.5, sodiumPerBonelessWing: 225,
  },
  {
    id: 'ws-mild', name: 'Mild',
    caloriesPerClassicWing: 73, proteinPerClassicWing: 7, carbsPerClassicWing: 0.3, fatPerClassicWing: 5.2, sodiumPerClassicWing: 250,
    caloriesPerBonelessWing: 100, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 6.3, fatPerBonelessWing: 5.5, sodiumPerBonelessWing: 210,
  },
  {
    id: 'ws-lemon-pepper', name: 'Lemon Pepper',
    caloriesPerClassicWing: 85, proteinPerClassicWing: 7.2, carbsPerClassicWing: 0.2, fatPerClassicWing: 6.2, sodiumPerClassicWing: 230,
    caloriesPerBonelessWing: 110, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 6.2, fatPerBonelessWing: 6.2, sodiumPerBonelessWing: 200,
  },
  {
    id: 'ws-garlic-parm', name: 'Garlic Parmesan',
    caloriesPerClassicWing: 88, proteinPerClassicWing: 7, carbsPerClassicWing: 1, fatPerClassicWing: 6.5, sodiumPerClassicWing: 265,
    caloriesPerBonelessWing: 115, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 7, fatPerBonelessWing: 6.8, sodiumPerBonelessWing: 230,
  },
  {
    id: 'ws-hawaiian', name: 'Hawaiian',
    caloriesPerClassicWing: 77, proteinPerClassicWing: 7, carbsPerClassicWing: 2, fatPerClassicWing: 5, sodiumPerClassicWing: 243,
    caloriesPerBonelessWing: 103, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 8, fatPerBonelessWing: 5.3, sodiumPerBonelessWing: 210,
  },
  {
    id: 'ws-hickory-bbq', name: 'Hickory Smoked BBQ',
    caloriesPerClassicWing: 78, proteinPerClassicWing: 7, carbsPerClassicWing: 3, fatPerClassicWing: 5, sodiumPerClassicWing: 260,
    caloriesPerBonelessWing: 105, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 9, fatPerBonelessWing: 5.3, sodiumPerBonelessWing: 225,
  },
  {
    id: 'ws-plain', name: 'Plain (No Flavor)',
    caloriesPerClassicWing: 68, proteinPerClassicWing: 7, carbsPerClassicWing: 0, fatPerClassicWing: 4.8, sodiumPerClassicWing: 200,
    caloriesPerBonelessWing: 93, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 6, fatPerBonelessWing: 5, sodiumPerBonelessWing: 180,
  },
  {
    id: 'ws-louisiana-rub', name: 'Louisiana Rub',
    caloriesPerClassicWing: 72, proteinPerClassicWing: 7, carbsPerClassicWing: 0.5, fatPerClassicWing: 5, sodiumPerClassicWing: 250,
    caloriesPerBonelessWing: 98, proteinPerBonelessWing: 5.8, carbsPerBonelessWing: 6.5, fatPerBonelessWing: 5.2, sodiumPerBonelessWing: 215,
  },
];

export const wingCounts = [4, 5, 6, 8, 10, 12, 15, 16, 18, 20, 24, 30];
