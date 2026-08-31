import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import SkillGroupCard from "../cards/SkillGroupCard";
import { platformProfiles, skills } from "../../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="container-x py-28">
      <SectionHeader
        eyebrow="Technical arsenal"
        title="Tools I"
        accent="build with."
        description="A focused stack for frontend, backend, databases and developer tooling."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(skills).map(([group, list], index) => (
          <SkillGroupCard key={group} group={group} list={list} index={index} />
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {platformProfiles.map(([site, handle, href]) => (
          <a
            key={site}
            href={href}
            target={href === "#" ? undefined : "_blank"}
            rel={href === "#" ? undefined : "noreferrer"}
            className="glass glass-hover rounded-2xl p-5"
            onClick={(e) => href === "#" && e.preventDefault()}
          >
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              {site}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-bold">{handle}</span>
              <ArrowUpRight size={16} className="text-red-500" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
