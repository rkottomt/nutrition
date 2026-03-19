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

export function getNutriScoreColor(score: string): string {
  switch (score) {
    case 'A': return '#00ff87';
    case 'B': return '#8aff00';
    case 'C': return '#ffb300';
    case 'D': return '#ff6600';
    case 'F': return '#ff4444';
    default: return '#8888aa';
  }
}

export function getEfficiencyColor(score: number): string {
  if (score >= 8) return '#00ff87';
  if (score >= 5) return '#8aff00';
  if (score >= 3) return '#ffb300';
  return '#ff4444';
}

export function getEfficiencyLabel(score: number): string {
  if (score >= 8) return 'Excellent';
  if (score >= 5) return 'Good';
  if (score >= 3) return 'Fair';
  return 'Low';
}
