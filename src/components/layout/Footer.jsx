import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-x flex flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Mohammad Zaid. Built with React +
          Tailwind CSS.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 hover:text-white"
        >
          <ArrowUp size={15} /> Back to top
        </a>
      </div>
    </footer>
  );
}
