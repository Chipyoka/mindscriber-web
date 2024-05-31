import React from "react";

function Footer() {
	// get current year from system
	function formatYear(date) {
		const year = date.getFullYear();

		return `${year}`;
	}

	const formattedYear = new Date();
	const currentYear = formatYear(formattedYear);

	// Function to handle the redirect
	const handleDocRedirect = () => {
		const readMeUrl = "https://github.com/Chipyoka/mindscriber-app/tree/v1.0.0";
		window.open(readMeUrl, "_blank");
	};
	return (
		<>
			<footer className="container-fluid">
				<div className="row">
					<aside className="about ">
						<p>
							<span className="salute">MINDSCRIBER</span>
							<br />A note taking desktop application that allows users to take notes and
							save for later.
						</p>
						<p>
							As documentation, Check out the <code>README</code> file on the Git
							repository.
						</p>
						<p>Happy Note Taking !</p>
						<div className="nav-link">
							<ul>
								<li>
									<button onClick={handleDocRedirect}>Documentaion</button>
								</li>
							</ul>
						</div>
					</aside>

					<h6 className="copyright">All Rights Reserved &copy; {currentYear}. Mindscriber</h6>
				</div>
			</footer>
		</>
	);
}

export default Footer;
