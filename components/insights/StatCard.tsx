interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold">{value}</h3>
      <p className="text-[color:var(--text-secondary)] mt-2">{label}</p>
    </div>
  );
}
