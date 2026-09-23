import { GraduationCap } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden"
    >
      {}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      {}
      <div className="relative">

        <div className="container-x py-20 sm:py-24 lg:py-28">

          <SectionHeader
            eyebrow="Education / foundation"
            title="The foundation"
            accent="behind the work."
            description="A snapshot of my academic journey and the fundamentals I am building on."
          />


          {}
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.35fr_.65fr]">


            {}
            <Reveal>
              <div className="glass glass-hover rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-7 lg:p-9">

              {}
              <div className="flex items-start justify-between gap-3 sm:gap-5">

                <div className="min-w-0">

                  {}
                  <span className="tag border-red-500/25 text-[10px] text-red-400 sm:text-xs">
                    2023 — 2027
                  </span>

                  {}
                  <h3 className="mt-3 text-2xl font-black leading-tight sm:mt-5 sm:text-3xl lg:text-4xl">
                    Integral University
                  </h3>

                  {}
                  <p className="mt-1 text-sm text-zinc-400 sm:mt-2">
                    Lucknow, Uttar Pradesh
                  </p>

                  {}
                  <p className="mt-4 text-base font-bold leading-snug sm:mt-6 sm:text-xl">
                    B.Tech — Computer Science & Engineering
                  </p>

                  {}
                  <p className="mt-1.5 text-xs text-zinc-500 sm:mt-2 sm:text-sm">
                    4th Year · 7th Semester · Expected graduation 2027
                  </p>

                </div>


                {}
                <div
                  className="
                    shrink-0
                    rounded-2xl
                    border
                    border-red-500/25
                    bg-red-500/10
                    p-3
                    text-center
                    sm:rounded-3xl
                    sm:p-5
                  "
                >
                  <GraduationCap
                    className="mx-auto text-red-500"
                    size={22}
                  />

                  <p className="mt-1.5 text-2xl font-black sm:mt-3 sm:text-4xl">
                    9.3
                  </p>

                  <p className="text-[8px] uppercase tracking-[.12em] text-zinc-500 sm:text-xs sm:tracking-widest">
                    Current CGPA
                  </p>
                </div>

              </div>


              {}
              <div className="mt-6 grid gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4">


                {}
                <div className="foundation-card p-4 sm:p-5">

                  <p className="text-[10px] uppercase tracking-[.12em] text-zinc-500 sm:text-xs sm:tracking-[.18em]">
                    Senior Secondary · 12th
                  </p>

                  <p className="mt-1.5 text-2xl font-black sm:mt-2 sm:text-3xl">
                    81.25%
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-500 sm:mt-1 sm:text-sm">
                    School education
                  </p>

                </div>


                {}
                {}

              </div>

              </div>
            </Reveal>


            {}
            <Reveal delay={70}>
              <div className="glass glass-hover rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-7 lg:p-9">

              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-red-400 sm:text-xs sm:tracking-[.2em]">
                Academic focus
              </p>

              <h3 className="mt-2 text-2xl font-black leading-tight sm:mt-4 sm:text-3xl">
                From fundamentals to products.
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-5 sm:leading-7">
                I am strengthening computer science fundamentals through C++,
                DSA, databases and software engineering while applying them
                through MERN projects, open source and hackathons.
              </p>


              {}
              <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-2">

                {[
                  "C++",
                  "DSA",
                  "DBMS",
                  "OOP",
                  "MERN",
                  "Git/GitHub",
                ].map((item) => (
                  <span
                    key={item}
                    className="tag text-[10px] sm:text-xs"
                  >
                    {item}
                  </span>
                ))}

              </div>

              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}
