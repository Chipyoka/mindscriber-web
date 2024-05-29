import React from "react";
import Navbar from "./Navbar";

function Header() {
	return (
		<>
			<div>
				<Navbar />
				<section className="container">
					<h2>
						Taking <span>Notes </span> Made Way <br /> Easier Now
					</h2>
					<p>
						Ideas, thoughts or plans won't slip and be forgotten when you have no piece of
						paper of phone nearby, Use can take notes on your computer now !
					</p>
					<div>
						<button className="btn btn-outline-primary">Download Installer</button>
						<button className="btn btn-primary">Download ZIP</button>
					</div>
				</section>
			</div>
		</>
	);
}

export default Header;
