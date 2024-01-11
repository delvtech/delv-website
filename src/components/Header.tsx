import classNames from "classnames";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import delvLogo from "src/assets/delv-logo.svg";
import menuIcon from "src/assets/menu-icon.svg";
import { CloseButton } from "src/components/CloseButton";

export function Header() {
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
      <header className="fixed top-0 left-0 right-0 flex justify-between w-full pt-7 pb-4 px-16 mx-auto z-10">
        <Link
          to="/"
          className="h-[60px] px-6 -ml-3 bg-black/40 backdrop-blur flex items-center rounded-full overflow-hidden"
        >
          <img src={delvLogo} alt="DELV" />
        </Link>

        {/* Menu */}
        <div>
          <button
            title="open menu"
            className="w-[60px] h-[60px] rounded-full border border-white/30 p-0 box-border flex items-center justify-center hover:border-white/60 transition-all bg-black/40 backdrop-blur relative z-50"
            onClick={openMenu}
          >
            <img src={menuIcon} alt="menu" />
          </button>
        </div>
      </header>

      {/* drawer overlay */}
      <div
        className={classNames(
          "fixed inset-0 bg-transparent pointer-events-none transition-all duration-300",
          {
            "pointer-events-auto": menuOpen,
          },
        )}
        onClick={closeMenu}
      ></div>

      {/* menu drawer */}
      <div
        className={classNames(
          "fixed w-[360px] top-0 right-[-360px] h-screen bg-black transition-all duration-300 pt-[15vh] z-50",
          {
            "!right-0": menuOpen,
          },
        )}
      >
        <CloseButton onClick={closeMenu} />

        <div className="flex flex-col">
          <div>
            <MenuLink to="/about" onClick={closeMenu}>
              About
            </MenuLink>
            <MenuLink
              href="https://www.github.com/delvtech"
              onClick={closeMenu}
            >
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
