import classNames from "classnames";
import xIcon from "src/assets/x-icon.svg";

export function CloseButton({
  className,
  onClick,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      title="close drawer"
      className={classNames(
        "group absolute top-8 right-16 max-lg:right-[5vw] w-[60px] h-[60px] rounded-full border border-white/30 bg-transparent p-0 box-border flex items-center justify-center hover:border-white/60 transition-all z-50",
        className,
      )}
      onClick={onClick}
    >
      <img src={xIcon} alt="close" />
    </button>
  );
}
