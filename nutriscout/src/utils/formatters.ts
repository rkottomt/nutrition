export function formatCalories(cal: number): string {
  return cal.toLocaleString();
}

export function formatMacro(value: number, unit: string = 'g'): string {
  return `${value}${unit}`;
}

export function formatDistance(miles: number): string {
  if (miles < 0.1) return '< 0.1 mi';
  return `${miles.toFixed(1)} mi`;
}

export function getEfficiencyColor(score: number): string {
  if (score >= 8) return '#16a34a';
  if (score >= 5) return '#3b82f6';
  if (score >= 3) return '#f59e0b';
  return '#ef4444';
}

export function getEfficiencyLabel(score: number): string {
  if (score >= 8) return 'Excellent';
  if (score >= 5) return 'Good';
  if (score >= 3) return 'Fair';
  return 'Low';
}
