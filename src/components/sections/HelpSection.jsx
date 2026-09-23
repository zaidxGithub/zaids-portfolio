import SectionHeader from "../ui/SectionHeader";
import HelpCard from "../cards/HelpCard";
import { helpCards } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

export default function HelpSection() {
  return (
<section className="container-x pb-20 sm:pb-24 lg:pb-28">

  <SectionHeader
    eyebrow="Where I can help"
    title="I like building"
    accent="end-to-end."
  />

  {}
  <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2">
    {helpCards.map(([number, title, text], index) => (
      <Reveal key={number} delay={index * 70}>
        <HelpCard
          number={number}
          title={title}
          text={text}
        />
      </Reveal>
    ))}
  </div>

</section>
  );
}
