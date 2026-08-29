import {
  ArrowDown,
  Code2,
  Download,
  Mail,
  Zap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="container-x relative flex min-h-screen items-center pb-20 pt-36"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="reveal">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="eyebrow">
              Available for internships & full-time roles
            </span>
            <span className="eyebrow border-red-500/30 text-red-400">
              Lucknow, India
            </span>
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            MERN Developer · DSA
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-7xl lg:text-[92px]">
            I build <span className="red">useful</span>
            <br />
            things for the web.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Building scalable web applications, solving complex problems, and
            turning ideas into reliable products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              View my work <ArrowDown size={17} />
            </a>
            <a className="btn-secondary" href="mailto:zaidxcodes@gmail.com">
              Contact me <Mail size={16} />
            </a>
            <a
              className="btn-secondary"
              href="/Mohammad_Zaid_Resume.pdf"
              download
            >
              Resume <Download size={16} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              className="tag transition hover:border-red-500/40"
              href="https://github.com/zaidxGithub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="mr-2 inline" size={14} /> GitHub
            </a>
            <a
              className="tag transition hover:border-red-500/40"
              href="https://www.linkedin.com/in/mohammad-zaid20"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="mr-2 inline" size={14} /> LinkedIn
            </a>
            <a
              className="tag transition hover:border-red-500/40"
              href="https://leetcode.com/u/ZaidxLeet20/"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 className="mr-2 inline" size={14} /> LeetCode · 150+
            </a>
          </div>
        </div>
        <div className="relative reveal lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[3rem] bg-red-500/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-glow">
            <div className="absolute left-6 top-6 z-10 rounded-full border border-red-500/30 bg-black/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-red-300 backdrop-blur">
              MERN · DSA
            </div>
            <img
              src="/profile.jpg"
              alt="Mohammad Zaid"
              className="aspect-[4/5] w-full max-w-[500px] rounded-[1.5rem] object-cover object-center"
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between rounded-2xl border border-white/10 bg-black/65 p-4 backdrop-blur-xl">
              <div>
                <p className="font-bold">Mohammad Zaid</p>
                <p className="text-xs text-zinc-400">B.Tech CSE · CGPA 9.3</p>
              </div>
              <span className="rounded-full bg-red-500 p-2">
                <Zap size={15} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
