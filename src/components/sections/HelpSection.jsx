import SectionHeader from "../ui/SectionHeader";
import HelpCard from "../cards/HelpCard";
import { helpCards } from "../../data/portfolioData";

export default function HelpSection() {
  return (
    <section className="container-x pb-28">
      <SectionHeader
        eyebrow="Where I can help"
        title="I like building"
        accent="end-to-end."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {helpCards.map(([number, title, text]) => (
          <HelpCard key={number} number={number} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}
