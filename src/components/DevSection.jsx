import React from "react";

function DevSection() {
	// Function to handle the redirect
	const handleCollaboRedirect = () => {
		const collaboUrl = "https://github.com/Chipyoka/mindscriber-app";
		window.open(collaboUrl, "_blank");
	};
	return (
		<>
			<div className="container">
				<section className="dev row">
					<aside className=" dev-hero-text col-sm-4">
						<h3>Join The Fun Club Now!</h3>
					</aside>
					<aside className=" dev-text col-sm-5">
						<p>
							Mindscriber is an ongoing project which started as a passion project in order
							to get conversant with ElectronJs in building desktop applications. We need
							your technical expertise to make it better.
						</p>

						<div>
							<button className="btn btn-success" onClick={handleCollaboRedirect}>
								Become A Collaborator
							</button>
						</div>
					</aside>
				</section>
			</div>
		</>
	);
}
export default DevSection;
