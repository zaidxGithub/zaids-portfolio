import SectionHeader from "../ui/SectionHeader";
import CertificationCard from "../cards/CertificationCard";
import { certifications } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";
import GenAIStudyJamsCard from "../cards/GenAIStudyJamsCard";

export default function WinsSection() {
  return (
    <section id="wins" className="container-x py-8">
      <SectionHeader
        eyebrow="Wins & certifications"
        title="Proof of"
        accent="progress."
        description="Selected achievements and the four certificates you supplied for this portfolio."
      />

      <div className="mt-5 grid items-stretch gap-5 min-[600px]:auto-rows-fr min-[600px]:grid-cols-2 lg:grid-cols-4">
        {certifications.map((certification, index) => (
          <Reveal key={certification.title} className="h-full" delay={index * 70}>
            <CertificationCard certification={certification} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-5">
        <GenAIStudyJamsCard />
      </Reveal>
    </section>
  );
}
