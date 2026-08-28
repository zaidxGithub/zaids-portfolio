import { certifications } from "../../data/portfolioData";
import CertificationCard from "../cards/CertificationCard";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          Wins & Certifications
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Continuous learning.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}