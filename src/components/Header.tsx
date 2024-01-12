import classNames from "classnames";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import delvLogo from "src/assets/delv-logo.svg";
import discordLogo from "src/assets/discord-logo.svg";
import githubLogo from "src/assets/github-logo.svg";
import menuIcon from "src/assets/menu-icon.svg";
import xLogo from "src/assets/x-logo.svg";
import { CloseButton } from "src/components/CloseButton";
import { useIsScrolled } from "src/hooks/useIsScrolled";

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

  return (
    <>
      <Link
        to="/"
        className={classNames(
          "fixed top-7 left-16 max-lg:left-[5vw] z-10 h-[60px] px-6 -ml-3 bg-black/40 backdrop-blur flex items-center rounded-full overflow-hidden transition-all duration-300",
          {
            "!top-2": isScrolled,
          },
        )}
      >
        <img src={delvLogo} alt="DELV" />
      </Link>

      {/* Menu */}
      <button
        title="open menu"
        className={classNames(
          "fixed top-7 right-16 max-lg:right-[5vw] w-[60px] h-[60px] rounded-full border border-white/30 p-0 box-border flex items-center justify-center hover:border-white/60 bg-black/40 backdrop-blur z-50 transition-[all,top] duration-[200ms,300ms]",
          {
            "!top-3": isScrolled,
          },
        )}
        onClick={openMenu}
      >
        <img src={menuIcon} alt="menu" />
      </button>

      {/* drawer overlay */}
      <div
        className={classNames(
          "fixed inset-0 bg-transparent pointer-events-none transition-all duration-300 z-10",
          {
            "pointer-events-auto": menuOpen,
          },
        )}
        onClick={closeMenu}
      ></div>

      {/* menu drawer */}
      <div
        className={classNames(
          "fixed w-[360px] max-md:w-full top-0 right-[-360px] max-md:-right-full bottom-0 bg-black flex flex-col transition-all duration-300 pt-32 z-50 overflow-auto",
          {
            "!right-0": menuOpen,
          },
        )}
      >
        <img src={delvLogo} alt="DELV" className="absolute top-8 left-[5vw] h-8 mt-3" />
        <CloseButton onClick={closeMenu} />
        <div className="mb-20">
          <MenuLink to="/about" onClick={closeMenu}>
            About
          </MenuLink>
          <MenuLink href="https://www.github.com/delvtech" onClick={closeMenu}>
            Build
          </MenuLink>
          <MenuLink
            href="https://wellfound.com/company/delv-tech/jobs"
            onClick={closeMenu}
          >
            Careers
          </MenuLink>
          <MenuLink href="https://blog.delv.tech" onClick={closeMenu}>
            Blog
          </MenuLink>
        </div>

        {/* menu footer */}
        <div className="flex gap-2 mt-auto px-8 py-2 items-center">
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
          <a
            href="https://elementfi.s3.us-east-2.amazonaws.com/element-finance-terms-of-service.pdf"
            className="opacity-75 hover:opacity-100 ml-auto"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
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
      className="h-10 w-10 flex items-center justify-center group bg-transparent hover:bg-gradient-to-r from-white/10 to-white/5 rounded-full transition-all duration-300"
    >
      <img
        className={classNames(
          "opacity-75 group-hover:opacity-100 transition-all",
          imgClassName,
        )}
        src={imgSrc}
        alt={name}
      />
    </a>
  );
}
