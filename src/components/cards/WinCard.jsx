export default function WinCard({ win }) {
  return (
    <article className="glass glass-hover overflow-hidden rounded-[2rem] p-6">
      {win.image && (
        <div className="mt-1 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className="aspect-[16/10] w-full">
            <img
              src={win.image}
              alt={win.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-red-400">
        Achievement
      </p>

      <h3 className="mt-2 text-xl font-black">
        {win.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        {win.description}
      </p>

      {win.date && (
        <p className="mt-3 text-xs text-zinc-500">
          {win.date}
        </p>
      )}
    </article>
  );
}