export default function ProcessCard({ number, title, description, index }) {
  return (
    <article className="process-card glass glass-hover">
      <div className="process-number">{number}</div>
      <div className="process-orb" />
      <h3 className="mt-8 text-3xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-400">{description}</p>
      <div className="mt-7 h-px bg-gradient-to-r from-red-500/60 to-transparent" />
      <p className="mt-4 text-xs font-bold uppercase tracking-[.18em] text-zinc-500">
        Step {index + 1} 
      </p>
    </article>
  );
}
