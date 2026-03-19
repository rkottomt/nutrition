import { getEfficiencyColor, getEfficiencyLabel } from '../utils/formatters';

interface Props {
  score: number;
}

export default function ProteinEfficiencyBadge({ score }: Props) {
  const color = getEfficiencyColor(score);

  return (
    <div
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-display"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}40`,
        color,
      }}
    >
      <span className="text-[10px]">PE</span>
      <span className="font-bold">{score.toFixed(1)}</span>
    </div>
  );
}
