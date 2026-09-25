


export default function StatCard({ value, label, className = "" }) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-white/10
        bg-black/20
        p-3
        sm:rounded-2xl
        sm:p-5
        ${className}
      `}
    >
      {}
      <div className="text-2xl font-black leading-none sm:text-3xl">
        {value}
      </div>

      {}
      <div className="mt-1 text-[9px] uppercase tracking-[.08em] text-zinc-500 sm:text-xs sm:tracking-wider">
        {label}
      </div>
    </div>
  );
}
