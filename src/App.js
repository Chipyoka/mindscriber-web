import "./App.css";
import TopBar from "./components/TopBar.jsx";
import Display from "./components/Display.jsx";
import React, {useState, useEffect} from "react";
import Loader from "./components/Loader.jsx";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate loading time with setTimeout
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // Adjust the duration as needed

		// Clean up the timer on component unmount
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<Loader />
			) : (
				<>
					{/* render the parent app components */}
					<div className="main">
						<div className="control">
							<TopBar />
							<Display />
						</div>
						{/* below error code renders when screen too small */}
						<div className="notice">
							<i className="bi bi-emoji-tear"></i>
							<h4>Oops !</h4>
							<p> Screen size too small, please maximize a bit !</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;



