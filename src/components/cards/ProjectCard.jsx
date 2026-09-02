import { useState } from "react";
// import { Github } from "lucide-react";
import ExternalButton from "../ui/ExternalButton";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project: p, index }) {
  const [flipped, setFlipped] = useState(false);
  const image = p.screenshots?.[0];
  // ("Imaage Url :",image);
  // console.log("image url -->",image);

  return (
    <article
      className={`glass glass-hover overflow-hidden rounded-[2rem] ${index === 0 ? "border-red-500/20" : ""}`}
      onClick={() => setFlipped((value) => !value)}
    >
      <div className="project-flip-shell">
        <div className={`project-flip-inner ${flipped ? "is-flipped" : ""}`}>
          <div
            className={`project-face project-front p-7 sm:p-10 ${index === 0 ? "bg-gradient-to-br from-red-500/10 via-transparent to-transparent" : ""}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-black">
                  {p.number}
                </span>
                <span className="text-xs uppercase tracking-[.2em] text-zinc-500">
                  Featured project
                </span>
              </div>
              <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                <ExternalButton href={p.live}>Live</ExternalButton>
                <a
                  className="btn-primary"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <FaGithub size={16} />
                </a>
              </div>
            </div>
            <div className="mt-10 max-w-4xl">
              <h3 className="text-4xl font-black tracking-tight sm:text-6xl">
                {p.title}
              </h3>
              <p className="mt-2 text-lg font-semibold text-red-400">
                {p.subtitle}
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                {p.description}
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["Role", "Full-stack builder"],
                ["Focus", "Production-ready UX"],
                ["Interaction", "Click to view screenshots"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {label}
                  </p>
                  <p className="mt-2 font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-center text-xs font-semibold uppercase tracking-[.18em] text-zinc-600">
              Click anywhere on this card to flip
            </p>
          </div>
          <div className="project-face project-back">
            <div className="relative h-full min-h-[430px] overflow-hidden rounded-[2rem] bg-black">
              {image && (
                <img
                  src={image}
                  alt={`${p.title} project screenshot`}
                  className="project-preview-image"
                  // className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-7 sm:p-10">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.2em] text-red-400">
                      {p.title}
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-white">
                      Project preview
                    </h3>
                    <p className="mt-2 text-sm text-zinc-300">
                      Click to return to project details.
                    </p>
                  </div>
                  <div
                    className="flex gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalButton href={p.live}>Open live</ExternalButton>
                    <a
                      className="btn-primary"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <FaGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
                Screenshot
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
