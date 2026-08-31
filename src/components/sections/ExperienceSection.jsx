  import { BriefcaseBusiness } from "lucide-react";
  import SectionHeader from "../ui/SectionHeader";

  export default function ExperienceSection() {
    return (
      <section id="experience" className="container-x py-28">
        <SectionHeader
          eyebrow="Experience"
          title="The next chapter is"
          accent="open."
        />
        <div className="glass rounded-[2rem] p-8 sm:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <div className="rounded-2xl bg-red-500/10 p-3 text-red-400">
                <BriefcaseBusiness />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-red-400">
                  Future experience slot
                </p>
                <h3 className="mt-2 text-3xl font-black">
                  Professional Experience
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                  COMING SOON...
                </p>
              </div>
            </div>
            <span className="tag">Add later</span>
          </div>
        </div>
      </section>
    );
  }
