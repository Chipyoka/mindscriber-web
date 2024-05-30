import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import LinkedIn from "./LinkedIn.svg";
import Git from "./GitRepo.svg";

function Navbar() {
	const [topText, setTopText] = useState("Mindscriber Version 1.0.0...");
	useEffect(() => {
		const interval = setInterval(() => {
			//Array of animated toptexts
			const texts = [
				"Installer for MacOS and Linux comming soon...",
				"Developed by The Blackgeek...",
				"This project will become Open-source soon...",
				"You can become a collaborator...",
			];

			//get random value
			const randomIndex = Math.floor(Math.random() * texts.length);
			const newText = texts[randomIndex];

			//update toptext
			setTopText(newText);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="top-bg ">
				<p className="top-line">{topText}</p>
			</div>
			<div className="container">
				<div className="navbar sticky-top">
					<div>
						<span className="logo">Mindscriber</span>
					</div>
					<div>
						<span className="btn btn-outline-primary version">V 1.0.0 (Current)</span>
						<button className="btn btn-outline-primary git">
							<img src={Git} alt="" />
						</button>
						<button className="btn btn-outline-primary x">
							<img src={LinkedIn} alt="" />
						</button>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}
export default Navbar;
