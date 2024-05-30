import "./App.css";

import Header from "./components/HeadText.jsx";
import GuideSection from "./components/GuideSection.jsx";
import DevSection from "./components/DevSection.jsx";
import Footer from "./components/Footer.jsx";
import React from "react";

function App() {
	return (
		<div className="App">
			
			<div>
				<Header />
				<GuideSection />
				<DevSection />
				<Footer />
			</div>
		</div>
	);
}

export default App;
