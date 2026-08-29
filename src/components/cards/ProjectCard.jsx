import { projects } from "../../data/portfolioData";
import { ExternalLink, RotateCw } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function ProjectCard({ project }) {
   const [isFlipped, setIsFlipped] = useState(false);
   return (
    <div className="group h-[500px] w-full sm:h-[520px] [perspective:1200px]">
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ================= FRONT ================= */}

        <article className="glass absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-[2rem] [backface-visibility:hidden]">
          <div className="flex-1 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-red-400">
              {project.date}
            </p>

            <h3 className="mt-2 text-2xl font-black">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Flip button */}

          <div className="p-6">
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:border-red-500/40"
            >
              View project
              <RotateCw size={15} />
            </button>
          </div>
        </article>

        {/* ================= BACK ================= */}

        <article className="glass absolute inset-0 h-full w-full overflow-hidden rounded-[2rem] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col">
            {/* Screenshot */}

            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Project Preview
                </p>

                <h3 className="mt-1 text-xl font-black text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Back content */}

            <div className="flex flex-1 flex-col justify-between p-6">
              <p className="text-sm text-zinc-400">
                Explore the live application or inspect the source code
                on GitHub.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:border-red-500/40"
                >
                  Live Site
                  <ExternalLink size={14} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold transition hover:border-red-500/40"
                >
                  GitHub
                  <FaGithub size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsFlipped(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-zinc-300 transition hover:border-white/30"
                >
                  Back
                  <RotateCw size={14} />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}