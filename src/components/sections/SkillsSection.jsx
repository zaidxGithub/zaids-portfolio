import SectionHeader from "../ui/SectionHeader";
import SkillGroupCard from "../cards/SkillGroupCard";
import { skills } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

export default function SkillsSection() {
  return (
    <section id="skills" className="container-x py-28">
      <SectionHeader
        eyebrow="Technical arsenal"
        title="Tools I"
        accent="build with."
        description="A focused stack for frontend, backend, databases and developer tooling."
      />
      <div className="grid items-stretch gap-4 md:auto-rows-fr md:grid-cols-2">
        {Object.entries(skills).map(([group, list], index) => (
          <Reveal key={group} className="h-full" delay={index * 70}>
            <SkillGroupCard group={group} list={list} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
