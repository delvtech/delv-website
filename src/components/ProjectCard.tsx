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
        "clip-corners bg-gradient-to-br from-white via-[#14D7D9] via-20% to-[#1A1F31] flex p-[1px] max-w-[415px] max-md:w-full",
        "md:hover:via-[#13F3F3] md:hover:via-40% md:hover:to-[#0D9999] group",
        className,
      )}
    >
      <button
        onClick={onClick}
        className="clip-corners bg-[#053E3E] px-10 pt-10 pb-8 flex flex-col justify-between bg-blend-soft-light bg-texture relative md:group-hover:bg-[#0A0B0B] transition-all duration-300 max-md:w-full"
      >
        <img
          src={logoSrc}
          alt={logoAltText}
          className={classNames(
            "md:group-hover:scale-75 origin-top-left transition-all duration-300",
            logoClassName,
          )}
        />
        <p className="my-auto pb-14 text-left opacity-0 md:group-hover:opacity-100 transition-all duration-300">
          {description}
        </p>

        {/* arrow */}
        <svg
          className="absolute right-10 bottom-8 mix-blend-soft-light opacity-60 max-md:opacity-100 md:group-hover:mix-blend-normal md:group-hover:opacity-100 transition-all duration-300 w-10 h-10 md:group-hover:scale-150 origin-bottom-right stroke-white md:group-hover:stroke-[.5px]"
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
        <FlairDown className="absolute top-0 left-[40%] -translate-x-1/2 z-[-1] opacity-0 md:group-hover:opacity-50 transition-all duration-300" />
        <FlairUp className="absolute bottom-0 left-[40%] -translate-x-1/2 z-[-1] opacity-0 md:group-hover:opacity-50 transition-all duration-300" />

        {/* bottom-right arc graphic */}
        {arc && (
          <img
            src={arc}
            className={classNames(
              "absolute bottom-0 right-0 mix-blend-soft-light opacity-60 md:group-hover:!opacity-0 transition-all duration-300",
              arcClassName,
            )}
          />
        )}
      </button>
    </div>
  );
}
