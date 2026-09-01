import SectionHeader from "../ui/SectionHeader";
import FAQCard from "../cards/FAQCard";
import { quickAnswers } from "../../data/portfolioData";

export default function QuickAnswersSection() {
  return (
    <section className="container-x py-28">
      <SectionHeader
        eyebrow="Quick answers"
        title="A few things you might"
        accent="want to know."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {quickAnswers.map(([question, answer]) => (
          <FAQCard key={question} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
}
