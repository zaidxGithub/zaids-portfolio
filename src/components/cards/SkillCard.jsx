export default function SkillCard({ title, skills }) {
  return (
    <article className="glass glass-hover rounded-[1.5rem] p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-red-400">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-red-500/40 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}