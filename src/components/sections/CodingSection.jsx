import { platformProfiles } from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
export default function CodingSection() {
  return (

<section className="container-x py-14 sm:py-18 lg:py-20">
<SectionHeader
  eyebrow="Coding Profiles"
  title="Code. Solve."
  accent="Improve."
  description="Tracking my problem-solving journey across coding platforms."
/>
  {}
  <div className="mt-1 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 md:grid-cols-3">

    {platformProfiles.map(([site, handle, href], index) => (
      <Reveal key={site} className="w-full" delay={index * 70}>
        <a
          href={href}
          target={href === "#" ? undefined : "_blank"}
          rel={href === "#" ? undefined : "noreferrer"}
          className="glass glass-hover flex min-h-20 w-full min-w-0 flex-col justify-between rounded-xl p-4 sm:min-h-24 sm:rounded-2xl sm:p-5"
          onClick={(e) => href === "#" && e.preventDefault()}
        >

        {}
        <p className="text-[9px] uppercase tracking-[.12em] text-zinc-500 sm:text-xs sm:tracking-widest">
          {site}
        </p>

        {}
        <div className="mt-2 flex min-w-0 items-center justify-between gap-3 sm:mt-3">
          <span className="min-w-0 wrap-break-word text-sm font-bold sm:text-base">
            {handle}
          </span>

          <ArrowUpRight
            size={14}
            className="shrink-0 text-red-500 sm:h-4 sm:w-4"
          />
        </div>

        </a>
      </Reveal>
    ))}

  </div>
</section>
  );
}
