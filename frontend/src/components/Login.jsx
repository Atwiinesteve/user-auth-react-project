import React from "react";

import "../styles/Login.css";

export default function Register() {
	const GoogleImage = "https://cdn-icons-png.flaticon.com/512/281/281764.png";
	const FacebookImage = "https://cdn-icons-png.flaticon.com/512/174/174848.png";

	return (
		<div className="login--form">
			<form>
				<div className="header">
					<h2>Login into your account</h2>
					<p>signin below using</p>
					<button>
						<span>
							<img
								width="24px"
								height="24px"
								src={GoogleImage}
								alt="google logo"
							/>
						</span>
						google
					</button>
					<button>
						<span>
							<img
								width="24px"
								height="24px"
								src={FacebookImage}
								alt="google logo"
							/>
						</span>
						facebook
					</button>
				</div>
				<div className="or">
					<p>or signin here</p>
				</div>
				<div className="input--areas">
					<div className="input--area">
						<label htmlFor="">email</label>
						<input type="email" />
					</div>
					<div className="input--area">
						<label htmlFor="">password</label>
						<input type="password" />
					</div>
					<button type="submit">login</button>
				</div>
			</form>
		</div>
	);
}
