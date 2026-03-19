import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/ai/recommend', async (req, res) => {
  const { items, goals, restaurant } = req.body;
  const apiKey = process.env.VITE_ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'Anthropic API key not configured',
      recommendations: generateFallback(items, goals),
    });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        system: `You are a sports nutritionist helping a college student at Carnegie Mellon University optimize their fast food choices for body composition. Analyze the provided menu items and recommend the top 3-5 options based on:
1. Highest protein-to-calorie ratio
2. Overall macro balance for lean muscle gain
3. Practical combinations (e.g., item + side that together hit goals)

For each recommendation, explain WHY in 1-2 sentences using plain language.
Return ONLY valid JSON: { "recommendations": [{ "item_name": string, "restaurant": string, "calories": number, "protein_g": number, "carbs_g": number, "fat_g": number, "reasoning": string, "combo_suggestion": string }] }`,
        messages: [{
          role: 'user',
          content: `User goals: ${JSON.stringify(goals)}\n\nRestaurant: ${restaurant}\n\nMenu items:\n${JSON.stringify(items, null, 2)}\n\nReturn only valid JSON.`,
        }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic API error:', err);
      return res.json({ recommendations: generateFallback(items, goals) });
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || '';

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return res.json(parsed);
    }

    return res.json({ recommendations: generateFallback(items, goals) });
  } catch (err) {
    console.error('AI recommendation error:', err);
    return res.json({ recommendations: generateFallback(items, goals) });
  }
});

interface SimpleItem {
  name: string;
  restaurant: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sodium: number;
}

function generateFallback(items: SimpleItem[], goals: { goal: string; mealCalorieTarget: number }) {
  const sorted = [...items].sort((a, b) => {
    const peA = a.calories > 0 ? (a.protein / a.calories) * 100 : 0;
    const peB = b.calories > 0 ? (b.protein / b.calories) * 100 : 0;
    return peB - peA;
  });

  return sorted.slice(0, 5).map(item => ({
    item_name: item.name,
    restaurant: item.restaurant,
    calories: item.calories,
    protein_g: item.protein,
    carbs_g: item.carbs,
    fat_g: item.fat,
    reasoning: `Best protein efficiency with ${item.protein}g protein at ${item.calories} calories.`,
    combo_suggestion: 'Pair with a side salad for extra fiber.',
  }));
}

app.listen(PORT, () => {
  console.log(`NutriScout API running on port ${PORT}`);
});
