import classNames from "classnames";
import { CloseButton } from "src/components/CloseButton";

export function ProjectDrawer({
  isOpen,
  className,
  insideClassName,
  onClose,
  children,
  closeButtonClassName,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  insideClassName?: string;
  closeButtonClassName?: string;
}) {
  return (
    <div
      className={classNames(
        "md:clip-drawer fixed h-screen top-0 left-full w-2/3 transition-all duration-300 z-50 overflow-auto",
        "max-md:rounded-2xl max-md:top-16 max-md:right-8 max-md:bottom-0 max-md:!left-8 max-md:w-auto max-md:h-auto max-md:opacity-0 max-md:pointer-events-none max-md:bg-gradient-to-br max-md:from-white/70 max-md:via-50% max-md:via-white/70 max-md:to-white/15 max-md:p-px",
        {
          "!left-1/3": isOpen,
          "max-md:top-8 max-md:!bottom-8 max-md:opacity-100 max-md:pointer-events-auto after:-mt-10":
            isOpen,
        },
      )}
    >
      {/*
        A container that sits one px inside the drawer to create a gradient
        border effect using the drawer's background color.
      */}
      <div
        className={classNames(
          "overflow-auto absolute inset-0 max-md:inset-px max-md:rounded-2xl",
          className,
        )}
      >
        {/* scroll ("inside") container */}
        <div
          className={classNames(
            "min-h-screen relative overflow-hidden px-24 py-16",
            "max-md:min-h-full max-md:px-[10vw] max-md:py-[10vh]",
            insideClassName,
          )}
        >
          <CloseButton
            onClick={onClose}
            className={classNames(
              "backdrop-blur max-md:fixed max-md:top-16 max-md:right-[calc(32px_+_5vw)]",
              closeButtonClassName,
            )}
          />
          {children}

          <div className="flex gap-4 ml-auto font-medium absolute bottom-4 max-md:bottom-0 right-8 max-md:gap-10 max-md:right-0 max-md:w-full [text-shadow:0_0_5px_rgba(0,0,0,.5),1px_1px_rgba(0,0,0,.5)] max-md:bg-black/40 h-9 max-md:h-12 justify-center items-center px-4 backdrop-blur rounded-b-2xl">
            <a
              href="https://elementfi.s3.us-east-2.amazonaws.com/element-finance-terms-of-service.pdf"
              className="opacity-75 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
            <a
              href="https://elementfi.s3.us-east-2.amazonaws.com/element-finance-privacy-policy.pdf"
              className="opacity-75 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
