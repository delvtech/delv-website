import classNames from "classnames";

export function ProjectCard({
  logoSrc,
  logoAltText,
  description,
  onClick,
  className,
  arc,
  arcClassName,
}: {
  logoSrc: string;
  logoAltText?: string;
  description: string;
  onClick: () => void;
  className?: string;
  arc?: string;
  arcClassName?: string;
}) {
  return (
    <div
      className={classNames(
        "clip-corners bg-gradient-to-br from-white via-[#14D7D9] via-20% to-[#1A1F31] flex p-[1px] max-w-[415px] group hover:via-[#13F3F3] hover:via-40% hover:to-[#0D9999]",
        className,
      )}
    >
      <button
        onClick={onClick}
        className="clip-corners bg-[#053E3E] px-10 pt-10 pb-8 flex flex-col gap-2 bg-blend-soft-light bg-texture relative group-hover:bg-[#0A0B0B] transition-all duration-300"
      >
        <img
          src={logoSrc}
          alt={logoAltText}
          className="group-hover:scale-75 origin-top-left transition-all duration-300"
        />
        <p className="m-0 text-left opacity-0 group-hover:opacity-100 transition-all duration-300">
          {description}
        </p>

        {/* arrow */}
        <svg
          className="mt-auto ml-auto block mix-blend-soft-light opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-300 w-10 h-10 group-hover:scale-[200%] origin-bottom-right stroke-white group-hover:stroke-[.5px]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M20 12L13.5 5.5M20 12L13.5 18.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* bottom-right arc graphic */}
        {arc && (
          <img
            src={arc}
            className={classNames(
              "absolute bottom-0 right-0 mix-blend-soft-light opacity-60",
              arcClassName,
            )}
          />
        )}
      </button>
    </div>
  );
}
