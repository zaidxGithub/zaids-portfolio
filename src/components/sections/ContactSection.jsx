import {
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "../ui/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="container-x pb-28 pt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-red-500/20 bg-gradient-to-br from-red-500/15 via-white/[0.03] to-transparent p-8 shadow-glow sm:p-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
        <div className="relative">
          <span className="eyebrow border-red-500/20">Quick connect</span>
          <h2 className="mt-6 max-w-3xl text-5xl font-black tracking-[-.05em] sm:text-7xl">
            Let's build something <span className="red">useful.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Open to internships and full-time opportunities. The fastest way to
            reach me is email or LinkedIn.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn-primary"
              href="mailto:zaidxcodes@gmail.com"
              aria-label="Send an email"
              title="Send an email"
            >
              <Mail size={17} />
            </a>
            <a
              className="btn-secondary"
              href="https://www.linkedin.com/in/mohammad-zaid20"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={17} /> LinkedIn
            </a>
            <a
              className="btn-secondary"
              href="https://github.com/zaidxGithub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={17} /> GitHub
            </a>
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
