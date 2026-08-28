import { projects } from "../../data/portfolioData";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <article className="glass overflow-hidden rounded-[2rem]">
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-red-400">
          {project.date}
        </p>

        <h3 className="mt-2 text-2xl font-black">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"
          >
            Live
            <ExternalLink size={14} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm"
          >
            GitHub
            <FaGithub size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}