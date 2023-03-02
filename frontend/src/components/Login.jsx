import React, { useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { signInWithGoogle } from '../firebase/firebase';

import "../styles/Login.css";

export default function Login() {
	const GoogleImage = "https://cdn-icons-png.flaticon.com/512/281/281764.png";
	const GithubImage = "https://cdn-icons-png.flaticon.com/512/733/733609.png";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleLogin(e) {
		e.preventDefault();
		const response = await axios.post("http://localhost:8080/login", {
			email,
			password,
		}, {withCredentials: true});
		if (response.status === 200) {
			alert("User successfully Logged in..");
			setEmail("");
			setPassword("");
	} else {
			alert("User NOT logged in..");
		}
	}

	return (
		<div className="login--form">
			<form onSubmit={handleLogin}>
				<div className="header">
					<h2>Login into your account</h2>
					<p>signin below using</p>
					<button onClick={signInWithGoogle}>
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
								src={GithubImage}
								alt="google logo"
							/>
						</span>
						Github
					</button>
				</div>
				<div className="or">
					<p>or signin here</p>
				</div>
				<div className="input--areas">
					<div className="input--area">
						<label htmlFor="">email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
						/>
					</div>
					<div className="input--area">
						<label htmlFor="">password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
						/>
					</div>
				</div>
				<button type="submit">login</button>
				<p>
					Not registered yet? Signup <Link to="/register">here</Link>
				</p>
			</form>
		</div>
	);
}
