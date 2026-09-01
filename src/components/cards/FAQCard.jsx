import { ChevronDown } from "lucide-react";

export default function FAQCard({ question, answer }) {
  return (
    <details className="group glass rounded-2xl p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
        {question}
        <ChevronDown size={17} className="transition group-open:rotate-180" />
      </summary>
      <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-zinc-400">
        {answer}
      </p>
    </details>
  );
}
