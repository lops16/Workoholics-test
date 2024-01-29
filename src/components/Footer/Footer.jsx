import "./Footer.scss";
import Checkbox from "@mui/material/Checkbox";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { useState } from "react";

export default function Footer() {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<>
			<footer>
				<section id="footer-content">
					<h3>We love what we do. We are Worköholics.</h3>
					<form id="email-form">
						<input
							type="text"
							name="email"
							placeholder="Email"
							className="email-box"
						/>
						<div id="terms-check">
							<Checkbox
								className="terms-ico"
								checked={isChecked}
								onChange={(e) => setIsChecked(e.target.checked)}
							/>
							<p>
								I have read and accepted the <span> Terms and Conditions.</span>{" "}
							</p>
						</div>

						<button className="submit-btn" disabled={!isChecked}>
							Submit <SubdirectoryArrowRightIcon className="arrowIco" />
						</button>
					</form>
					<div id="contact-info">
						<p>hello@workoholics.es</p>
						<p>+34 944 059 957</p>
					</div>
				</section>
			</footer>
		</>
	);
}
