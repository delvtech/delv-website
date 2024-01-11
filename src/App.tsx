import { Route, Routes } from "react-router-dom";
import { Header } from "src/components/Header";
import { About } from "src/pages/About";
import { Home } from "src/pages/Home";

function App() {
  return (
    <>
      <Header />

      {/* Main */}
      <div className="pb-16 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* <footer className="fixed bottom-0 left-0 right-0 flex justify-between w-full max-w-[1440px] pt-7 pb-4 px-16 mx-auto z-10">
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
      </footer> */}
    </>
  );
}

export default App;
