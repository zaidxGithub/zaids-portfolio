
import { ExternalLink } from "lucide-react";
export default function CertificationCard({ certification }) {
  const c=certification;
  return (
     <article className="glass glass-hover overflow-hidden rounded-[2rem]">
      <div className="p-2">
        <div className="certificate-image-wrap aspect-[16/10] w-full overflow-hidden rounded-[1.5rem]">
          <img
            src={c.image}
            alt={c.alt}
            className="block h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-red-400">
          {c.issuer}
        </p>

        <h3 className="mt-2 text-xl font-black">
          {c.title}
        </h3>

        {c.result && (
          <p className="mt-2 text-sm text-zinc-400">
            {c.result}
          </p>
        )}

        <a
          href={c.link || c.image}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-red-500/40"
        >
          View certificate
          <ExternalLink size={13} />
        </a>
      </div>
    </article>
   
  );
}