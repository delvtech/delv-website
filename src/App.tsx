import { Route, Routes } from "react-router-dom";
import { Header } from "src/components/Header";
import { About } from "src/pages/About";
import { Home } from "src/pages/Home";
import { region } from "src/region";

function App() {
  console.log("Region:", region);
  return (
    <>
      <Header />

      {/* Main */}
      <div className="pb-16 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* TODO: Remove hardcoded URL */}
          {/* <Route path="/uk" element={<UKRedirect to="https://uk.delv.tech" />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;

// function UKRedirect({ to }: { to: string }) {
//   window.location.replace(to);
//   return <></>;
// }
