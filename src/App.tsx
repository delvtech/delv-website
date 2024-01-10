import classNames from "classnames";
import { useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import delvLogo from "./assets/delv-logo.svg";
import discordLogo from "./assets/discord-logo.svg";
import githubLogo from "./assets/github-logo.svg";
import menuIcon from "./assets/menu-icon.svg";
import xLogo from "./assets/x-logo.svg";
import { CloseButton } from "./components/CloseButton";
import { MenuLink } from "./components/MenuLink";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
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
      <header className="fixed top-0 left-0 right-0 flex justify-between w-full max-w-[1440px] pt-7 pb-4 px-16 mx-auto z-10">
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

      <footer className="fixed bottom-0 left-0 right-0 flex justify-between w-full max-w-[1440px] pt-7 pb-4 px-16 mx-auto z-10">
        <div className="h-[60px] px-6 flex items-center gap-1 rounded-full overflow-hidden">
          <a
            href="https://discord.gg/EEfKmfQdtx"
            className="h-[60px] w-[60px] rounded-full flex items-center justify-center bg-black/40 backdrop-blur group"
          >
            <img
              className="opacity-75 group-hover:opacity-100 transition-all scale-90"
              src={discordLogo}
              alt="Discord"
            />
          </a>
          <a
            href="https://twitter.com/delv_tech"
            className="h-[60px] w-[60px] rounded-full flex items-center justify-center bg-black/40 backdrop-blur group"
          >
            <img
              className="opacity-75 group-hover:opacity-100 transition-all scale-90"
              src={xLogo}
              alt="X"
            />
          </a>
          <a
            href="https://github.com/delvtech"
            className="h-[60px] w-[60px] rounded-full flex items-center justify-center bg-black/40 backdrop-blur group"
          >
            <img
              className="opacity-75 group-hover:opacity-100 transition-all scale-90"
              src={githubLogo}
              alt="GitHub"
            />
          </a>
        </div>
      </footer>

      {/* Main */}
      <div className="pb-16 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* drawer overlay */}
      <div
        // className={classNames(
        //   "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[3px] opacity-0 pointer-events-none transition-all duration-300",
        //   {
        //     "opacity-100 pointer-events-auto": menuOpen,
        //   },
        // )}
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
        {/* close button */}
        <CloseButton onClick={closeMenu} />

        <div>
          <MenuLink to="/about" onClick={closeMenu}>
            About
          </MenuLink>
          {/* <MenuLink to="#" onClick={closeMenu}>
            Community
          </MenuLink> */}
          <MenuLink to="#" onClick={closeMenu}>
            Build
          </MenuLink>
          <MenuLink to="#" onClick={closeMenu}>
            Careers
          </MenuLink>
          <MenuLink href="https://blog.delv.tech" onClick={closeMenu}>
            Blog
          </MenuLink>
        </div>
      </div>
    </>
  );
}

export default App;
