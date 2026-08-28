import {skills} from "../../data/portfolioData";
import skillCard from "../cards/SkillCard";

//THIS IS TECH ARSENAL SECTION 
export default function TechnicalArsenal() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          Technical Arsenal
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Tools I use to build.
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Technologies and tools I use across frontend development,
          backend development, databases, and problem solving.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <SkillCard
            title="Languages"
            skills={skills.languages}
          />

          <SkillCard
            title="Frontend"
            skills={skills.frontend}
          />

          <SkillCard
            title="Backend"
            skills={skills.backend}
          />

          <SkillCard
            title="Databases"
            skills={skills.databases}
          />

          <SkillCard
            title="Tools"
            skills={skills.tools}
          />

          <SkillCard
            title="DSA"
            skills={[
              `${skills.dsa.problemsSolved} problems solved`,
              "LeetCode",
            ]}
          />
        </div>
      </div>
    </section>
  );
}