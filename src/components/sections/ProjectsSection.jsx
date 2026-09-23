import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

export default function ProjectsSection() {
  return (



    <section className="relative overflow-hidden">
  <div className="grid-bg pointer-events-none absolute inset-0" />

  <div className="relative">
    {}

    <section id="projects" className="container-x py-28">
      <SectionHeader
        eyebrow="Things I've shipped"
        title="Projects that"
        accent="work."
        description="Two featured products built with a practical, full-stack mindset."
      />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 70}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>


  </div>
</section>




  );
}
