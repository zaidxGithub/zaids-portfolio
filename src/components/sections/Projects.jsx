import { projects } from "../../data/portfolioData";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h2>Things I've Shipped</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}