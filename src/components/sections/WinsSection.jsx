import SectionHeader from "../ui/SectionHeader";
import WinCard from "../cards/WinCard";
import CertificationCard from "../cards/CertificationCard";
import { certifications, wins } from "../../data/portfolioData";

export default function WinsSection() {
  return (
    <section id="wins" className="container-x py-8">
      <SectionHeader
        eyebrow="Wins & certifications"
        title="Proof of"
        accent="progress."
        description="Selected achievements and the four certificates you supplied for this portfolio."
      />

      <div className="mt-5 grid gap-5 lg:grid-cols-4">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>
      <div className="mt-5 glass rounded-[2rem] p-7">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-black text-red-400">2×</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
              Google Gen AI Study Jams completed
            </p>
          </div>
          <div>
            <p className="text-3xl font-black">150+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
              DSA problems solved
            </p>
          </div>
          <div>
            <p className="text-3xl font-black">9.3</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
              Current CGPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
