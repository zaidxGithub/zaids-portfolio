import { BadgeCheck } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import ExternalButton from "../ui/ExternalButton";
import ContributionCard from "../cards/ContributionCard";
import { contributions } from "../../data/portfolioData";

export default function ContributionsSection() {
  return (
    <section className="container-x py-28">
      <SectionHeader
        eyebrow="Where I've contributed"
        title="Open source that"
        accent="counts."
      />
      <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="glass rounded-[2rem] p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <img
                src="/certificates/gssoc-badge.jpg"
                alt="GSSoC 2025 Tech Contributors badge"
                className="h-16 w-16 rounded-2xl object-cover ring-1 ring-red-500/25"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-red-400">
                  GirlScript Summer of Code 2025
                </p>
                <h3 className="mt-2 text-3xl font-black">
                  Open Source Contributor
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Remote · Aug 2025 — Oct 2025
                </p>
              </div>
            </div>
            <BadgeCheck className="text-red-500" />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["10+", "Repositories"],
              ["12", "Merged PRs"],
              ["2025", "Contributor program"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 p-5">
                <p className="text-2xl font-black">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  {l}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tag">10+ repositories</span>
            <span className="tag">12 merged PRs</span>
            <span className="tag">Code reviews</span>
            <span className="tag">GitHub workflows</span>
          </div>
          <p className="mt-6 leading-7 text-zinc-400">
            Contributed frontend enhancements and backend improvements,
            collaborating with maintainers through issues, reviews and pull
            requests.
          </p>
          <div className="mt-7">
            <ExternalButton href="https://drive.google.com/file/d/1gJ3u_qPKG16TRVsyrRG-yyOx_5ogQEHu/view?usp=sharing">
              View certificate
            </ExternalButton>
          </div>
        </div>
        <div className="grid gap-5">
          {contributions.map((contribution) => (
            <ContributionCard
              key={contribution.title}
              contribution={contribution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
