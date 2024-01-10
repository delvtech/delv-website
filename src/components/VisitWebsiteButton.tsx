import arrowRight from "src/assets/arrow-right.svg";

export function VisitWebsiteButton({ href }: { href: string }) {
  return (
    <a
      className="backdrop-blur-lg bg-gradient-to-b from-white/30 to-white/15 hover:from-white/20 hover:to-white/10 rounded-full h-12 pl-6 pr-4 gap-2 inline-flex items-center transition-all"
      href={href}
    >
      Visit Website
      <img src={arrowRight} />
    </a>
  );
}
