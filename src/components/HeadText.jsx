import React from "react";
import Navbar from "./Navbar";
import Window from "./Windows.svg";

function Header() {

	const handleDownload = () => {
		// URL of the file from the GitHub release
		const fileUrl = 'https://github.com/Chipyoka/mindscriber-app/releases/download/v1.0.0/Mindscriber-1.0.0.Setup.exe';
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = 'Mindscriber-win32-x64.exe'; 
	
		// Programmatically click the link to trigger the download
		link.click();
	  };
	return (
		<>
			<div className="header-header">
				<Navbar />
				<section className="container header">
					<h2 className="fade-in">
						Note Taking Made <span>Seamlessly </span>
					</h2>
					<p className="lg">
						Ideas, thoughts or plans won't slip and be forgotten when you have no piece of
						paper or phone nearby, You can take notes on your computer now !
					</p>
					<p className="sm">
						Ideas, thoughts or plans won't slip and be forgotten when you have no piece of
						<br />
						paper or phone nearby, You can take notes on your computer now !
					</p>
					<div className="download row">
						<button className="btn btn-primary" onClick={handleDownload}>
							<span className="icon">
								<img src={Window} alt="" />
							</span>
							Download Installer
						</button>
						<p className="text-left">
							<code>for Windows 10 x64 Bit Only</code> <br />
						</p>
					</div>
				</section>
			</div>
		</>
	);
}

export default Header;
