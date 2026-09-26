export default function HelpCard({ number, title, text }) {
  return (
    
    <div className="glass glass-hover min-w-0 rounded-2xl p-3 sm:rounded-3xl sm:p-6 lg:p-7">

      {}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-[9px] font-black text-white sm:h-9 sm:w-9 sm:text-xs">
        {number}
      </span>

      {}
      <h3 className="mt-3 text-base font-black leading-tight sm:mt-5 sm:text-2xl">
        {title}
      </h3>

      {}
      <p className="mt-2 text-[11px] leading-5 text-zinc-400 sm:mt-3 sm:text-sm sm:leading-7">
        {text}
      </p>

    </div>
  );
}
