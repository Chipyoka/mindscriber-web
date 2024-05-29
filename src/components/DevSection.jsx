import React from "react";

function DevSection() {
	return (
		<>
			<section className="container dev row">
				<aside className=" dev-hero-text col-4">
					<h3>Join the Supporting Community of Amazing People</h3>
				</aside>
				<aside className=" dev-text col-6">
					<p>
						You can help too by becoming a collaborator and join the growing team in making
						this application even more amazing
					</p>
					<p>
						Alternatively, You can donate a small amount to appreciate the developers working
						to make sure Mindscriber is better everyday
					</p>
					<div>
						<button className="btn btn-outline-success">Become Collaborator</button>
						<button className="btn btn-success">$ Donate</button>
					</div>
				</aside>
			</section>
		</>
	);
}
export default DevSection;
