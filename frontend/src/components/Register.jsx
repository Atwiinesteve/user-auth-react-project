import React from "react";
import { Link } from "react-router-dom";

import "../styles/Register.css";

export default function Register() {
	const GoogleImage = "https://cdn-icons-png.flaticon.com/512/281/281764.png";
	const FacebookImage = "https://cdn-icons-png.flaticon.com/512/174/174848.png";

	return (
		<div className="register--form">
			<form>
				<div className="header">
					<h2>Create your account</h2>
					<p>sign up below using</p>
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
                    <p>or signup here</p>
                </div>
				<div className="input--areas">
					<div className="input--area">
						<label htmlFor="">full names</label>
						<input type="text" />
					</div>
					<div className="input--area">
						<label htmlFor="">email</label>
						<input type="email" />
					</div>
					<div className="input--area">
						<label htmlFor="">username</label>
						<input type="text" />
					</div>
					<div className="input--area">
						<label htmlFor="">password</label>
						<input type="password" />
					</div>
					<button type="submit">register</button>
					<p>Already have account? Signin <Link to='/login'>here</Link></p>
				</div>
			</form>
		</div>
	);
}
