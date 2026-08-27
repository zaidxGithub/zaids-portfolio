import { projects } from "../../data/portfolioData";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}