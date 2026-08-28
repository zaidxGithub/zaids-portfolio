import { projects } from "../../../data/portfolioData";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          Things I've Shipped
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Projects built to solve real problems.
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          A selection of applications I've designed and developed
          using modern web technologies.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}