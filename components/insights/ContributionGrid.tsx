// components/insights/ContributionGrid.tsx

export default function ContributionGrid() {
  return (
    <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
      {Array.from({ length: 182 }).map((_, i) => {
        const shades = [
          "bg-green-950",
          "bg-green-800",
          "bg-green-700",
          "bg-green-600",
          "bg-green-500",
        ];

        return (
          <div
            key={i}
            className={`h-3 w-3 rounded-sm ${
              shades[Math.floor(Math.random() * shades.length)]
            }`}
          />
        );
      })}
    </div>
  );
}
