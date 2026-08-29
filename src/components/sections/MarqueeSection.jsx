import { marqueeItems } from "../../data/portfolioData";

export default function MarqueeSection() {
  return (
    <section className="border-y border-white/10 py-7 overflow-hidden">
      <div className="marquee">
        {[...Array(2)].flatMap((_, i) =>
          marqueeItems.map((x, j) => (
            <div
              key={`${i}-${j}`}
              className="mx-7 flex items-center gap-7 text-2xl font-black tracking-tight text-zinc-700 sm:text-3xl"
            >
              {x}
              <span className="text-red-500">✦</span>
            </div>
          )),
        )}
      </div>
    </section>
  );
}
