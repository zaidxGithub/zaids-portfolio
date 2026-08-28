import { Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "../../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass rounded-[2rem] p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">
            Let's Connect
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Have an idea? Let's build it.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            I'm open to opportunities, collaborations, projects,
            and conversations around technology.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold"
            >
              <Mail size={16} />
              Email Me
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold"
            >
              <FaLinkedinIn size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}