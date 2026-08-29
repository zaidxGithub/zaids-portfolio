export default function SkillGroupCard({ group, list, index }) {
  return (
    <div
      className={`glass glass-hover rounded-3xl p-7 ${index === 0 ? "border-red-500/25" : ""}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black">{group}</h3>
        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
          0{index + 1}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {list.map((skill, skillIndex) => (
          <span
            key={skill}
            className="skill-chip tag border-red-500/20 bg-red-500/[0.04] text-zinc-200"
            style={{ "--delay": `${Math.min(skillIndex * 45, 360)}ms` }}
          >
            <span className="skill-dot mr-2 inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
