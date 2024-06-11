import xLogo from "src/assets/x-logo.svg";
import { FlairDown } from "src/components/FlairDown";
import { FlairUp } from "src/components/FlairUp";

export function PersonCard({
  name,
  title,
  portraitSrc,
  href,
  xUrl,
}: {
  name: string;
  title: string;
  portraitSrc: string;
  href: string;
  xUrl: string;
}) {
  return (
    <div className="max- group flex max-w-64 rounded-lg from-white/70 via-[#14D7D9]/50 via-10% to-[#1A1F31] to-50% p-px bg-gradient-[148deg] hover:via-[#13F3F3]/50 hover:via-30% hover:to-[#0D9999]/50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex w-full flex-col overflow-hidden rounded-lg bg-[#053E3E] bg-texture bg-blend-soft-light transition-all duration-300 md:group-hover:bg-[#0A0B0B]"
      >
        {/* flare glows */}
        <FlairDown className="absolute left-[40%] top-0 -translate-x-1/2 opacity-0 transition-all duration-300 md:group-hover:opacity-50" />
        <FlairUp className="absolute bottom-0 left-[40%] -translate-x-1/2 opacity-0 transition-all duration-300 md:group-hover:opacity-50" />

        <img src={portraitSrc} alt={name} className="relative" />
        <div className="relative flex flex-1 items-center justify-between gap-2 p-5 max-xl:p-4 max-md:flex-col max-md:p-2 max-md:text-center">
          <div className="leading-tight">
            <p className="text-lg font-bold !leading-tight max-sm:text-lg">
              {name}
            </p>
            <p className="leading-none text-white/50 max-sm:text-sm">{title}</p>
          </div>
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="circle-button size-11 shrink-0 max-xl:size-9"
          >
            <img src={xLogo} alt="X" className="w-4" />
          </a>
        </div>
      </a>
    </div>
  );
}
