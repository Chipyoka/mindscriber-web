import React from "react";

function Footer() {
	// get current year from system
	function formatYear(date) {
		const year = date.getFullYear();

		return `${year}`;
	}

	const formattedYear = new Date();
	const currentYear = formatYear(formattedYear);

	return (
		<>
			<footer className="container-fluid">
				<div className="row">
					<aside className="about ">
						<p>
							<span className="salute">THE BLACKGEEK</span>
							<br />A software developer experienced in developing modern and efficient Web
							and Desktop application. As a way to learn <code>ElectronJS</code>, <br />
							he embarked on a journey of creating this amazing desktop application. Get in
							touch with
							<br /> him for collaborations and possible hire.
							<br />
							<code>Happy Note Taking !</code>
						</p>
						<div className="nav-link">
							<ul>
								<li>
									<button>Repository</button>
								</li>
								<li>
									<button>ReadMe</button>
								</li>
								<li>
									<button>License</button>
								</li>
							</ul>
						</div>
					</aside>

					<h6 className="copyright">
						All Rights Reserved &copy; {currentYear}. The Blackgeek
					</h6>
				</div>
			</footer>
		</>
	);
}

export default Footer;
