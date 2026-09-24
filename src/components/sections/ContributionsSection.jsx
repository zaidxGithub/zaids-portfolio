import { BadgeCheck } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ExternalButton from "../ui/ExternalButton";
import ContributionCard from "../cards/ContributionCard";
import { contributions } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";



export default function ContributionsSection() {
  return (
    <section className="container-x py-20 sm:py-24 lg:py-28">
      <SectionHeader
        eyebrow="Where I've contributed"
        title="Open source that"
        accent="counts."
      />

      {}
      <Reveal className="mt-8 sm:mt-10">
        <div className="glass glass-hover rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">

          {}
          <div className="flex items-start justify-between gap-3 sm:gap-4">

            {}
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">

              {}
              <img
                src="/certificates/gssoc-badge.jpg"
                alt="GSSoC 2025 Tech Contributors badge"
                className="
                  h-12
                  w-12
                  shrink-0
                  rounded-xl
                  object-cover
                  ring-1
                  ring-red-500/25
                  sm:h-16
                  sm:w-16
                  sm:rounded-2xl
                "
              />

              {}
              <div className="min-w-0">

                <p className="text-[10px] font-bold uppercase tracking-[.12em] text-red-400 sm:text-sm sm:tracking-wider">
                  GirlScript Summer of Code 2025
                </p>

                <h3 className="mt-1 text-xl font-black leading-tight sm:mt-2 sm:text-3xl">
                  Open Source Contributor
                </h3>

                <p className="mt-1 text-xs text-zinc-500 sm:mt-2 sm:text-sm">
                  Remote · Aug 2025 — Oct 2025
                </p>

              </div>
            </div>

            {}
            <BadgeCheck
              size={20}
              className="mt-1 shrink-0 text-red-500 sm:h-6 sm:w-6"
            />
          </div>


          {}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">

            {[
              ["10+", "Repositories"],
              ["12", "Merged PRs"],
              ["2025", "Contributor program"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-black/10
                  p-3
                  sm:rounded-2xl
                  sm:p-5
                "
              >
                <p className="text-xl font-black sm:text-2xl">
                  {number}
                </p>

                <p className="mt-0.5 text-[9px] uppercase tracking-[.08em] text-zinc-500 sm:mt-1 sm:text-xs sm:tracking-wider">
                  {label}
                </p>
              </div>
            ))}

          </div>


          {}
          <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">

            <span className="tag text-[10px] sm:text-xs">
              10+ repositories
            </span>

            <span className="tag text-[10px] sm:text-xs">
              12 merged PRs
            </span>

            <span className="tag text-[10px] sm:text-xs">
              Code reviews
            </span>

            <span className="tag text-[10px] sm:text-xs">
              GitHub workflows
            </span>

          </div>


          {}
          <p className="mt-4 max-w-4xl text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7">
            Contributed frontend enhancements and backend improvements,
            collaborating with maintainers through issues, reviews and pull
            requests.
          </p>


          {}
          <div className="mt-5 sm:mt-7">
            <ExternalButton
              href="https://drive.google.com/file/d/1gJ3u_qPKG16TRVsyrRG-yyOx_5ogQEHu/view?usp=sharing"
            >
              View certificate
            </ExternalButton>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
