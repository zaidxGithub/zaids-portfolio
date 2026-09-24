
import { useState } from "react";
import ExternalButton from "../ui/ExternalButton";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project: p, index }) {
  const [flipped, setFlipped] = useState(false);
  const image = p.screenshots?.[0];

  return (
    <article
      className={`glass glass-hover overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ${
        index === 0 ? "border-red-500/20" : ""
      }`}
      onClick={() => setFlipped((value) => !value)}
    >
      <div className="project-flip-shell">
        <div className={`project-flip-inner ${flipped ? "is-flipped" : ""}`}>

          {}
          <div
            className={`project-face project-front
              p-4
              sm:p-7
              lg:p-10
              ${
                index === 0
                  ? "bg-gradient-to-br from-red-500/10 via-transparent to-transparent"
                  : ""
              }`}
          >

            {}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-black sm:px-3 sm:text-xs">
                  {p.number}
                </span>

                <span className="text-[10px] uppercase tracking-[.14em] text-zinc-500 sm:text-xs sm:tracking-[.2em]">
                  Featured project
                </span>
              </div>

              {}
              <div
                className="flex gap-1.5 sm:gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalButton href={p.live}>Live</ExternalButton>

                <a
                  className="btn-primary"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <FaGithub size={14} />
                </a>
              </div>
            </div>

            {}
            <div className="mt-5 max-w-4xl sm:mt-10">

              <h3 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-6xl">
                {p.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-red-400 sm:mt-2 sm:text-lg">
                {p.subtitle}
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
                {p.description}
              </p>
            </div>

            {}
            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-7 sm:gap-2">
              {p.stack.map((s) => (
                <span key={s} className="tag text-[10px] sm:text-xs">
                  {s}
                </span>
              ))}
            </div>

            {}
            <div className="mt-5 grid gap-2 sm:mt-9 sm:grid-cols-3 sm:gap-3">
              {p.stats.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-black/20 p-3 sm:rounded-2xl sm:p-5"
                >
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                    {label}
                  </p>

                  <p className="mt-1 text-xs font-semibold sm:mt-2 sm:text-sm">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {}
            <p className="mt-4 text-center text-[9px] font-semibold uppercase tracking-[.14em] text-zinc-600 sm:mt-7 sm:text-xs sm:tracking-[.18em]">
              Click anywhere on this card to flip
            </p>
          </div>


          {}
          <div className="project-face project-back">

            <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">

              {image && (
                <img
                  src={image}
                  alt={`${p.title} project screenshot`}
                  className="project-preview-image"
                />
              )}

              {}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-4 sm:p-7 lg:p-10">

                <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.15em] text-red-400 sm:text-xs sm:tracking-[.2em]">
                      {p.title}
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-white sm:mt-2 sm:text-3xl">
                      Project preview
                    </h3>

                    <p className="mt-1 text-xs text-zinc-300 sm:mt-2 sm:text-sm">
                      Click to return to project details.
                    </p>
                  </div>

                  {}
                  <div
                    className="flex gap-1.5 sm:gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalButton href={p.live}>
                      Open live
                    </ExternalButton>

                    <a
                      className="btn-primary"
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <FaGithub size={14} />
                    </a>
                  </div>

                </div>
              </div>

              {}
              <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur sm:right-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-[11px]">
                Screenshot
              </div>

            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
