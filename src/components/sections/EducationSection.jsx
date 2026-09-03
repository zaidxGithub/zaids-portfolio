import { GraduationCap } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

export default function EducationSection() {
  return (




    <section className="relative overflow-hidden">
  <div className="grid-bg pointer-events-none absolute inset-0" />

  <div className="relative">
    {/* section content */}
  <section id="education" className="container-x py-28">

      <SectionHeader
        eyebrow="Education / foundation"
        title="The foundation"
        accent="behind the work."
        description="A snapshot of my academic journey and the fundamentals I am building on."
      />
      <div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
        <div className="glass glass-hover rounded-[2rem] p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <span className="tag border-red-500/25 text-red-400">
                2023 — 2027
              </span>
              <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                Integral University
              </h3>
              <p className="mt-2 text-zinc-400">Lucknow, Uttar Pradesh</p>
              <p className="mt-6 text-xl font-bold">
                B.Tech — Computer Science & Engineering
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                4th Year · 7th Semester · Expected graduation 2027
              </p>
            </div>
            <div className="rounded-3xl border border-red-500/25 bg-red-500/10 p-5 text-center">
              <GraduationCap className="mx-auto text-red-500" size={30} />
              <p className="mt-3 text-4xl font-black">9.3</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Current CGPA
              </p>
            </div>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="foundation-card">
              <p className="text-xs uppercase tracking-[.18em] text-zinc-500">
                Senior Secondary · 12th
              </p>
              <p className="mt-2 text-3xl font-black">81.25%</p>
              <p className="mt-1 text-sm text-zinc-500">School education</p>
            </div>
            <div className="foundation-card">
              <p className="text-xs uppercase tracking-[.18em] text-zinc-500">
                Secondary · 10th
              </p>
              <p className="mt-2 text-3xl font-black">65%</p>
              <p className="mt-1 text-sm text-zinc-500">School education</p>
            </div>
          </div>
        </div>
        <div className="glass glass-hover rounded-[2rem] p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-red-400">
            Academic focus
          </p>
          <h3 className="mt-4 text-3xl font-black">
            From fundamentals to products.
          </h3>
          <p className="mt-5 leading-7 text-zinc-400">
            I am strengthening computer science fundamentals through C++, DSA,
            databases and software engineering while applying them through MERN
            projects, open source and hackathons.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["C++", "DSA", "DBMS", "OOP", "MERN", "Git/GitHub"].map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>


    </section>

  </div>
</section>


  );
}
