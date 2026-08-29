export default function StatCard({ value, label, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-black/20 p-5 ${className}`}
    >
      <div className="text-3xl font-black">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
        {label}
      </div>
    </div>
  );
}
