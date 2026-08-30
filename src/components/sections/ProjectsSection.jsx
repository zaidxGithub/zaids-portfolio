import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/portfolioData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="container-x py-28">
      <SectionHeader
        eyebrow="Things I've shipped"
        title="Projects that"
        accent="work."
        description="Two featured products built with a practical, full-stack mindset."
      />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
