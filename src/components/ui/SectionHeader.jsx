export default function SectionHeader({ eyebrow, title, accent, description }) {
  return (
    <div className="mb-12 max-w-4xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">
        {title} <span className="red">{accent}</span>
      </h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>}
    </div>
  );
}
