import { GraduationCap, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import StatCard from "../cards/StatCard";

export default function AboutSection() {
  return (
    <section id="about" className="container-x py-20 sm:py-24 lg:py-28">

      <SectionHeader
        eyebrow="About me"
        title="Engineer. Builder."
        accent="Problem-solver."
        description="A 4th-year Computer Science & Engineering student focused on modern full-stack development, practical products, open source and consistent DSA practice."
      />

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.2fr_.8fr]">


        {}
        <Reveal>
          <div className="glass glass-hover rounded-[1.5rem] p-4 sm:rounded-3xl sm:p-7 lg:p-9">

          {}
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 sm:gap-3 sm:text-sm">
            <Sparkles
              className="shrink-0 text-red-500"
              size={16}
            />
            What I care about
          </div>


          {}
          <p className="mt-4 text-lg font-semibold leading-7 text-white sm:mt-6 sm:text-xl sm:leading-8">
            Clean interfaces, dependable APIs, useful products, and engineering
            habits that scale beyond a demo.
          </p>


          {}
          <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-5 sm:text-base sm:leading-7">
            I work primarily with the MERN stack and use C++ for DSA/problem
            solving. My project work includes authentication, REST APIs,
            MongoDB, Firebase, AI API integration, responsive React UI and
            deployment workflows.
          </p>


          {}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-7 sm:gap-3">

            <StatCard
              value="9.3"
              label="CGPA"
            />

            <StatCard
              value="150+"
              label="DSA problems"
            />

            <StatCard
              value="10+"
              label="OSS repositories"
            />

          </div>

          </div>
        </Reveal>







        </div>

    </section>
  );
}
