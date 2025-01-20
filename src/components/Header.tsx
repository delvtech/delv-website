import classNames from "classnames";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import delvLogo from "src/assets/delv-logo.svg";
import discordLogo from "src/assets/discord-logo.svg";
import githubLogo from "src/assets/github-logo.svg";
import informationCircle from "src/assets/information-circle.svg";
import menuIcon from "src/assets/menu-icon.svg";
import xLogo from "src/assets/x-logo.svg";
import { CloseButton } from "src/components/CloseButton";
import { useIsScrolled } from "src/hooks/useIsScrolled";

const SHOW_ANNOUNCEMENT_BANNER = true;
const ANNOUNCEMENT_BANNER_EXPIRY = new Date("2/04/2025");

export function Header() {
  const isScrolled = useIsScrolled();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onKeyDown = useRef((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
    }
  });

  function openMenu() {
    setMenuOpen(true);
    window.addEventListener("keydown", onKeyDown.current);
  }

  function closeMenu() {
    setMenuOpen(false);
    window.removeEventListener("keydown", onKeyDown.current);
  }
  const showBanner =
    SHOW_ANNOUNCEMENT_BANNER && new Date() < ANNOUNCEMENT_BANNER_EXPIRY;

  return (
    <>
      {/* Announcement banner */}
      {showBanner && (
        <div className="flex h-10 items-center justify-center gap-2 border-b border-white/10 bg-black">
          <img src={informationCircle} className="size-5" />
          <p>
            We've updated our{" "}
            {/* <a
              href="https://delv-public.s3.us-east-2.amazonaws.com/delv-privacy-policy.pdf"
              className="text-[#71F8F8]"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "} */}
            <a
              href="https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf"
              className="text-[#71F8F8] transition-all duration-100 hover:text-[#459f9f]"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
      )}

      {/* Delv logo */}
      <Link
        to="/"
        className={classNames(
          "fixed left-16 top-7 z-10 -ml-3 flex h-[60px] items-center overflow-hidden rounded-full bg-black/40 px-6 backdrop-blur transition-all duration-300 max-lg:left-[5vw]",
          {
            "!top-2": isScrolled,
            "mt-8": SHOW_ANNOUNCEMENT_BANNER && !isScrolled,
          },
        )}
      >
        <img src={delvLogo} alt="DELV" />
      </Link>

      {/* Menu */}
      <button
        title="open menu"
        className={classNames(
          "fixed right-16 top-7 z-50 box-border flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/30 bg-black/40 p-0 backdrop-blur transition-[all,top] duration-[200ms,300ms] hover:border-white/60 max-lg:right-[5vw]",
          {
            "!top-3": isScrolled,
            "mt-8": SHOW_ANNOUNCEMENT_BANNER && !isScrolled,
          },
        )}
        onClick={openMenu}
      >
        <img src={menuIcon} alt="menu" />
      </button>

      {/* drawer overlay */}
      <div
        className={classNames(
          "pointer-events-none fixed inset-0 z-10 bg-transparent transition-all duration-300",
          {
            "pointer-events-auto": menuOpen,
            "mt-8": SHOW_ANNOUNCEMENT_BANNER && !isScrolled,
          },
        )}
        onClick={closeMenu}
      ></div>

      {/* menu drawer */}
      <div
        className={classNames(
          "fixed bottom-0 right-[-360px] top-0 z-50 flex w-[360px] flex-col overflow-auto bg-black pt-32 transition-all duration-300 max-md:-right-full max-md:w-full",
          {
            "!right-0": menuOpen,
            "mt-8": SHOW_ANNOUNCEMENT_BANNER && !isScrolled,
          },
        )}
      >
        <img
          src={delvLogo}
          alt="DELV"
          className="absolute left-[5vw] top-8 mt-3 h-8 md:hidden"
        />
        <CloseButton onClick={closeMenu} />
        <div className="mb-20" onClick={closeMenu}>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/team">Our Team</MenuLink>
          <MenuLink href="https://www.github.com/delvtech">Build</MenuLink>
          <MenuLink href="https://wellfound.com/company/delv-tech/jobs">
            Careers
          </MenuLink>
          <MenuLink href="https://blog.delv.tech">Blog</MenuLink>
        </div>

        {/* menu footer */}
        <div className="mt-auto flex items-center gap-2 px-8 py-2">
          <div className="flex gap-2">
            <SocialLink
              href="https://discord.gg/EEfKmfQdtx"
              name="Discord"
              imgSrc={discordLogo}
              imgClassName="w-7 h-7"
            />
            <SocialLink
              href="https://twitter.com/delv_tech"
              name="X"
              imgSrc={xLogo}
              imgClassName="w-5 h-5"
            />
            <SocialLink
              href="https://github.com/delvtech"
              name="GitHub"
              imgSrc={githubLogo}
              imgClassName="w-7 h-7"
            />
          </div>
          <div className="ml-auto flex gap-4 text-lg font-medium">
            <a
              href="https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf"
              className="opacity-75 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
            <a
              href="https://delv-public.s3.us-east-2.amazonaws.com/delv-privacy-policy.pdf"
              className="opacity-75 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuLink({
  to,
  href,
  children,
  onClick,
}: {
  to?: string;
  href?: string;
  children: string;
  onClick?: () => void;
} & (
  | {
      to: string;
    }
  | {
      href: string;
    }
)) {
  const { pathname } = useLocation();

  const className = classNames(
    "h-20 border-b border-b-white/50 border-dashed text-3xl flex items-center px-8 hover:px-14 w-full hover:bg-gradient-to-r from-white/10 to-white/5 hover:text-[#71F8F8] transition-all duration-300 relative",
    {
      "!bg-gradient-to-br !from-[#9F79FF]/20 !to-[#10F9B1]/10 !border-solid !border-b-[#14D7D9]/50 !text-[#58D1B0] !px-14 before:content=['*'] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-8 before:w-2 before:h-2 before:rounded-full before:bg-[#58D1B0]":
        pathname === to,
    },
  );

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
}

function SocialLink({
  href,
  name,
  imgSrc,
  imgClassName,
}: {
  href: string;
  name: string;
  imgSrc: string;
  imgClassName: string;
}) {
  return (
    <a
      href={href}
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-transparent from-white/10 to-white/5 transition-all duration-300 hover:bg-gradient-to-r"
    >
      <img
        className={classNames(
          "opacity-75 transition-all group-hover:opacity-100",
          imgClassName,
        )}
        src={imgSrc}
        alt={name}
      />
    </a>
  );
}
