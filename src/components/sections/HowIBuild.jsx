
const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "Understand the problem, users, requirements, and technical constraints before writing code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the architecture, user experience, components, APIs, and overall application flow.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build reusable components, implement APIs, connect databases, and turn the design into a working application.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Test, optimize, deploy, and continuously improve the application based on real-world usage.",
  },
];


export default function HowIBuild() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-red-400">
          My Process
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Here's how I turn ideas into real-world applications.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass glass-hover rounded-[2rem] p-6"
            >
              <span className="text-sm font-black text-red-400">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-black">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}