export default function HelpCard({ number, title, text }) {
  return (
    <div className="glass glass-hover rounded-3xl p-7">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-xs font-black text-white">
        {number}
      </span>
      <h3 className="mt-6 text-2xl font-black">{title}</h3>
      <p className="mt-3 max-w-xl leading-7 text-zinc-400">{text}</p>
    </div>
  );
}
