import SectionHeader from "../ui/SectionHeader";
import ProcessCard from "../cards/ProcessCard";
import { processCards } from "../../data/portfolioData";

export default function ProcessSection() {
  return (
    <section className="container-x py-28">
      <SectionHeader
        eyebrow="Process"
        title="Here's how I turn ideas into"
        accent="real-world applications."
        description="A simple engineering loop that keeps the product, the user and the implementation connected."
      />
      <div className="process-grid">
        {processCards.map(([number, title, description], index) => (
          <ProcessCard
            key={number}
            number={number}
            title={title}
            description={description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
