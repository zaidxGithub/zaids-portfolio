import { GraduationCap, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import StatCard from "../cards/StatCard";

export default function AboutSection() {
  return (
    <section id="about" className="container-x py-28">
      <SectionHeader
        eyebrow="About me"
        title="Engineer. Builder."
        accent="Problem-solver."
        description="A 4th-year Computer Science & Engineering student focused on modern full-stack development, practical products, open source and consistent DSA practice."
      />
      <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="glass glass-hover rounded-3xl p-7 sm:p-9">
          <div className="flex items-center gap-3 text-sm font-semibold text-zinc-300">
            <Sparkles className="text-red-500" size={18} /> What I care about
          </div>
          <p className="mt-6 text-xl font-semibold leading-8 text-white">
            Clean interfaces, dependable APIs, useful products, and engineering
            habits that scale beyond a demo.
          </p>
          <p className="mt-5 leading-7 text-zinc-400">
            I work primarily with the MERN stack and use C++ for DSA/problem
            solving. My project work includes authentication, REST APIs,
            MongoDB, Firebase, AI API integration, responsive React UI and
            deployment workflows.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <StatCard value="9.3" label="CGPA" />
            <StatCard value="150+" label="DSA problems" />
            <StatCard value="10+" label="OSS repositories" />
          </div>
        </div>
        <div className="glass rounded-3xl p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-zinc-500">
            Education
          </p>
          <div className="mt-5 flex gap-4">
            <div className="rounded-2xl bg-red-500/10 p-3 text-red-400">
              <GraduationCap />
            </div>
            <div>
              <h3 className="text-xl font-bold">Integral University</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Lucknow, Uttar Pradesh
              </p>
              <p className="mt-4 text-sm font-semibold">
                B.Tech — Computer Science & Engineering
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                July 2023 — July 2027 · 4th Year / 7th Semester
              </p>
            </div>
          </div>
          <div className="my-7 h-px bg-white/10" />
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              value="9.3"
              label="CGPA · Till Sem VI"
              className="bg-transparent"
            />
            <StatCard
              value="2027"
              label="Expected graduation"
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
