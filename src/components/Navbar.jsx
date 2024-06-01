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
				"Installer for MacOS and Linux coming soon...",
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

	// Function to handle the redirect
	const handleGitRedirect = () => {
		const gitUrl = "https://github.com/Chipyoka/mindscriber-app/tree/v1.0.0";
		window.open(gitUrl, "_blank");
	};
	// Function to handle the redirect
	const handleLinkedInRedirect = () => {
		const linkedInUrl = "https://www.linkedin.com/in/chipyoka-mwape-8b897623b";
		window.open(linkedInUrl, "_blank");
	};
	return (
		<>
			<div className="container-fluid top-bg ">
				<p className="top-line">{topText}</p>
			</div>
			<div className="container-fluid navi">
				<div className="navbar sticky-top">
					<div>
						<span className="logo">Mindscriber</span>
					</div>
					<div>
						<span className="btn btn-outline-primary version">V 1.0.0 (Current)</span>
						<button className="btn btn-outline-primary git" onClick={handleGitRedirect}>
							<img src={Git} alt="" />
						</button>
						<button className="btn btn-outline-primary x" onClick={handleLinkedInRedirect}>
							<img src={LinkedIn} alt="" />
						</button>
					</div>
				</div>
			</div>
			{/* <hr /> */}
		</>
	);
}
export default Navbar;
