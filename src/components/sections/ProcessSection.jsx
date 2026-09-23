import SectionHeader from "../ui/SectionHeader";
import ProcessCard from "../cards/ProcessCard";
import { processCards } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

export default function ProcessSection() {
  return (
    <section className="container-x py-20 sm:py-24 lg:py-28">
      <SectionHeader
        eyebrow="Process"
        title="Here's how I turn ideas into"
        accent="real-world applications."
        description="A simple engineering loop that keeps the product, the user and the implementation connected."
      />
      <div className=" process-grid grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {processCards.map(([number, title, description], index) => (
          <Reveal key={number} delay={index * 70}>
            <ProcessCard
              number={number}
              title={title}
              description={description}
              index={index}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
