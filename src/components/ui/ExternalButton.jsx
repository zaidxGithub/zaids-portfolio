import { ArrowUpRight } from "lucide-react";

export default function ExternalButton({ href, children, icon = true }) {
  return (
    <a className="btn-secondary" href={href} target="_blank" rel="noreferrer">
      {children}
      {icon && <ArrowUpRight size={16} />}
    </a>
  );
}
