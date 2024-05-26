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

// import React, {useState, useEffect} from "react";
// import {ipcRenderer} from "electron";

// function App() {
// 	const [note, setNote] = useState([]);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		ipcRenderer.send("fetch-data");

// 		ipcRenderer.on("fetch-data-response", (event, data) => {
// 			setNote(data);
// 		});

// 		ipcRenderer.on("fetch-data-error", (event, message) => {
// 			setError(message);
// 		});

// 		// Cleanup function to remove event listeners on component unmount
// 		return () => {
// 			ipcRenderer.removeAllListeners("fetch-data-response");
// 			ipcRenderer.removeAllListeners("fetch-data-error");
// 		};
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Notes List</h1>
// 			{error && <p style={{color: "red"}}>Error: {error}</p>}
// 			{note.length === 0 && <p>No clients found.</p>}
// 			<ul>
// 				{note.map((note) => (
// 					<li key={note.NOTE_ID}>
// 						{note.NOTE_CATEGORY} - {note.NOTE.DATE}
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default App;
