import xIcon from "src/assets/x-icon.svg";

export function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      title="close drawer"
      className="group absolute top-8 right-16 w-[60px] h-[60px] rounded-full border border-white/30 bg-transparent p-0 box-border flex items-center justify-center hover:border-white/60 transition-all"
      onClick={onClick}
    >
      <img src={xIcon} alt="close" />
    </button>
  );
}
