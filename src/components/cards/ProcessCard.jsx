export default function ProcessCard({ number, title, description, index }) {
  return (

<article className="process-card glass glass-hover p-3 sm:p-6 lg:p-8">

  {}
  <div className="process-number">{number}</div>

  {}
  <div className="process-orb" />

  {}
  <h3 className="mt-4 text-xl font-black leading-tight sm:mt-7 sm:text-3xl">
    {title}
  </h3>

  {}
  <p className="mt-2 text-xs leading-5 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
    {description}
  </p>

  {}
  <div className="mt-4 h-px bg-gradient-to-r from-red-500/60 to-transparent sm:mt-7" />

  {}
  <p className="mt-2 text-[9px] font-bold uppercase tracking-[.12em] text-zinc-500 sm:mt-4 sm:text-xs sm:tracking-[.18em]">
    Step {index + 1}
  </p>

</article>
  );
}
