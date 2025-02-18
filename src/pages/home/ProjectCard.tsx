import classNames from "classnames";
import { FlairDown } from "src/components/FlairDown";
import { FlairUp } from "src/components/FlairUp";

export function ProjectCard({
  logoSrc,
  logoAltText,
  logoClassName,
  description,
  onClick,
  className,
  arc,
  arcClassName,
}: {
  logoSrc: string;
  logoAltText?: string;
  logoClassName?: string;
  description: string;
  onClick: () => void;
  className?: string;
  arc?: string;
  arcClassName?: string;
}) {
  return (
    <div
      className={classNames(
        "flex max-w-[415px] bg-gradient-to-br from-white via-[#14D7D9] via-20% to-[#1A1F31] p-[1px] clip-corners max-md:w-full",
        "group md:hover:via-[#13F3F3] md:hover:via-40% md:hover:to-[#0D9999]",
        className,
      )}
    >
      <button
        onClick={onClick}
        className="relative flex flex-col justify-between bg-[#053E3E] bg-texture px-10 pb-8 pt-10 bg-blend-soft-light transition-all duration-300 clip-corners max-md:w-full md:group-hover:bg-[#0A0B0B]"
      >
        <img
          src={logoSrc}
          alt={logoAltText}
          className={classNames(
            "origin-top-left transition-all duration-300 md:group-hover:scale-75 max-w-[280px]",
            logoClassName,
          )}
        />
        <p className="my-auto pb-14 text-left opacity-0 transition-all duration-300 md:group-hover:opacity-100">
          {description}
        </p>

        {/* arrow */}
        <svg
          className="absolute bottom-8 right-10 h-10 w-10 origin-bottom-right stroke-white opacity-60 mix-blend-soft-light transition-all duration-300 max-md:opacity-100 md:group-hover:scale-150 md:group-hover:stroke-[.5px] md:group-hover:opacity-100 md:group-hover:mix-blend-normal"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M20 12L13.5 5.5M20 12L13.5 18.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* flare glows */}
        <FlairDown className="pointer-events-none absolute left-[40%] top-0 z-[-1] -translate-x-1/2 opacity-0 transition-all duration-300 md:group-hover:opacity-50" />
        <FlairUp className="pointer-events-none absolute bottom-0 left-[40%] z-[-1] -translate-x-1/2 opacity-0 transition-all duration-300 md:group-hover:opacity-50" />

        {/* bottom-right arc graphic */}
        {arc && (
          <img
            src={arc}
            className={classNames(
              "absolute bottom-0 right-0 opacity-60 mix-blend-soft-light transition-all duration-300 md:group-hover:!opacity-0",
              arcClassName,
            )}
          />
        )}
      </button>
    </div>
  );
}
