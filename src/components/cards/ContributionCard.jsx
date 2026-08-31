export default function ContributionCard({ contribution }) {
  const c = contribution;
  return (
    <div className="glass glass-hover rounded-[2rem] p-7">
      <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
        {c.role}
      </p>
      <h3 className="mt-3 text-2xl font-black">{c.title}</h3>
      <p className="mt-2 font-semibold text-red-400">{c.metric}</p>
      <p className="mt-4 text-sm leading-7 text-zinc-400">{c.description}</p>
    </div>
  );
}
