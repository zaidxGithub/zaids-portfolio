import { education } from "../../data/portfolioData";

export default function Foundation() {
  return (
    <section id="foundation" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          The Foundation
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Education & academic foundation.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <div
              key={item.id}
              className="glass glass-hover rounded-[2rem] p-6"
            >
              {item.institution && (
                <>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    University
                  </p>

                  <h3 className="mt-3 text-xl font-black">
                    {item.institution}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {item.degree} — {item.branch}
                  </p>

                  <p className="mt-4 text-sm text-zinc-400">
                    {item.year}
                  </p>

                  <p className="mt-2 text-lg font-bold">
                    CGPA: {item.cgpa}
                  </p>
                </>
              )}

              {item.level && (
                <>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Academic
                  </p>

                  <h3 className="mt-3 text-xl font-black">
                    {item.level}
                  </h3>

                  <p className="mt-4 text-2xl font-black">
                    {item.percentage}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}