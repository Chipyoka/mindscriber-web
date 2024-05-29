import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Navbar() {
	return (
		<>
       
			<div className="navbar">
				<p className="logo"> Mindscriber</p>
				<div>
					<button className="btn btn-primary">Lets Chat</button>
					<button className="btn btn-secondary">Git</button>
				</div>
			</div>
            <hr />
		</>
	);
}
export default Navbar;
