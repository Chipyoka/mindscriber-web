import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Navbar() {
	const [topText, setTopText] = useState("From Dreams to Notes");
	useEffect(() => {
		const interval = setInterval(() => {
			//Array of dashboard aniamted toptexts
			const texts = [
				"Mindscriber is free...",
				"This project will become Open-source soon...",
				"You can be come a contributor...",
			];

			//get random value
			const randomIndex = Math.floor(Math.random() * texts.length);
			const newText = texts[randomIndex];

			//update toptext
			setTopText(newText);
		}, 10000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="top-bg ">
				<p className="top-line">{topText}</p>
			</div>
			<div className="container">
				<div className="navbar ">
					<p className="logo"> Mindscriber</p>
					<div>
						<button className="btn btn-primary version">V1.0.0</button>
						<button className="btn btn-outline-secondary git">Git</button>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}
export default Navbar;
