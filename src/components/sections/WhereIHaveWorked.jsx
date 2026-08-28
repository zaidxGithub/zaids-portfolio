export default function WhereIHaveWorked() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          Where I Have Contributed
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Open source & collaboration.
        </h2>

        <div className="mt-10 glass glass-hover rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                Aug. 2025 – Oct. 2025
              </p>

              <h3 className="mt-2 text-2xl font-black">
                GirlScript Summer of Code
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                Open Source Contributor · Remote
              </p>
            </div>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold">
              12 Merged PRs
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400">
            Contributed to 10+ real-world repositories through frontend
            enhancements and backend improvements. Collaborated with
            maintainers through GitHub workflows, code reviews, issue
            discussions, and pull requests.
          </p>
        </div>
      </div>
    </section>
  );
}