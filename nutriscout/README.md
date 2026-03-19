# NutriScout — CMU Fast Food Nutrition Scavenger

A sports-performance-dashboard-style web app that helps Carnegie Mellon University students find nearby fast food restaurants, browse their full nutritional menus, filter by macros, compare items, and build optimized meals.

## Features

- **Restaurant Discovery** — 13 pre-seeded CMU-area fast food chains with NutriScore ratings
- **Full Nutritional Menus** — Complete hardcoded menus with calories, protein, carbs, fat, sodium
- **Smart Filters** — Calorie/protein/fat/sodium sliders, category pills, sort options
- **Quick Presets** — Lean Gains, Light Lunch, Bulk Mode, Heart Healthy one-click filters
- **Protein Efficiency Score** — (protein / calories) × 100 on every item
- **Panda Express Plate Builder** — Build bowls, plates, and bigger plates with live macro totals
- **Meal Builder** — Add items to a running meal tracker with progress rings
- **Comparison Mode** — Compare 2–4 items side-by-side with highlighted winners
- **Map View** — Leaflet map with OpenStreetMap dark tiles, restaurant pins colored by NutriScore
- **AI Recommendations** — Claude-powered analysis of filtered menu items (with fallback)
- **Mobile Responsive** — Bottom tab navigation on mobile

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS v4
- Zustand (state management)
- Leaflet (maps)
- Express (AI API proxy)

## Getting Started

```bash
cd nutriscout
npm install
npm run dev
```

This starts both the Vite dev server (port 5173) and Express API server (port 3001).

## Environment Variables

Copy `.env.example` to `.env` and add your API keys:

```
ANTHROPIC_API_KEY=your_key  # Optional — enables AI recommendations
```

Without an API key, the AI feature falls back to a protein-efficiency-based analysis.

## Restaurants Included

Chipotle, McDonald's, Subway, Chick-fil-A, Shake Shack, Wingstop, Panda Express, Five Guys, Panera Bread, Qdoba, MOD Pizza, Jersey Mike's, Primanti Bros

All menu items are hardcoded with real nutritional data — no external API calls needed.
