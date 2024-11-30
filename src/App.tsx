import { Route, Routes } from "react-router-dom";
import { Header } from "src/components/Header";
import { Redirect } from "src/components/router/Redirect";
import { ScrollReset } from "src/components/router/ScrollReset";
import { About } from "src/pages/About";
import { Home } from "src/pages/home/Home";
import { Team } from "src/pages/team/Team";
import { region } from "src/region";

function App() {
	console.log("Region:", region);
	return (
		<>
			<Header />
			<ScrollReset />

			{/* Main */}
			<div className="relative pb-16">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/team" element={<Team />} />

					{/* TODO: Remove hardcoded URL */}
					<Route path="/uk" element={<Redirect to="https://uk.delv.tech" />} />

					{/* Discord redirect */}
					<Route
						path="/discord"
						element={<Redirect to="https://discord.gg/EEfKmfQdtx" />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
