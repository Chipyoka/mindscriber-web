import React from "react";
import Image from "./Image.svg";

function GuideSection() {
	return (
		<>
			<section className="guide row container-fluid py-3">
				<aside className="steps col-md-4">
					<h5>Get Started Now!</h5>
					<p className="h">
						<span className="bullet">OO</span>
						Step One
					</p>
					<p>
						Download the
						<code> installer</code> by clicking the download button above.
					</p>
					<p className="h">
						<span className="bullet">OO</span>
						Step Two
					</p>
					<p>
						Run the Installer and look for the installed app in start menu then create its
						shortcut for easy access.
					</p>
					<p className="h">
						<span className="bullet">OO</span>
						Step Three
					</p>

					<p>And thats all, you're set for seamless note taking!</p>
					<hr />
					<h6>
						<em>
							If you face any <strong>problems</strong> kindly reach out to the developer
							through the <code>GitHub Repo</code>.
						</em>
					</h6>
				</aside>
				<aside className="guide-image col-md-5">
					<img src={Image} alt="" />
				</aside>
			</section>
		</>
	);
}
export default GuideSection;
