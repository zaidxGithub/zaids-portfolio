import { achievements } from "../../data/achievements";
import WinCard from "../cards/WinCard"

export default function WinsAndMilestones() {
  return (
    <section id="wins" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          Wins & Milestones
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Moments that moved me forward.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {achievements.map((win) => (
            <WinCard
              key={win.id}
              win={win}
            />
          ))}
        </div>
      </div>
    </section>
  );
}