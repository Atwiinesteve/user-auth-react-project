import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/Login.css";

export default function Register() {
	const GoogleImage = "https://cdn-icons-png.flaticon.com/512/281/281764.png";
	const FacebookImage = "https://cdn-icons-png.flaticon.com/512/174/174848.png";

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin(e) {
		e.preventDefault()
		const response = await axios.post('http://127.0.0.1/login', { email, password })
		if(response.status === 200) {
			alert('User Logged in successfully..')
		} else {
			alert('User NOT Logged in..')
		}
	}

	return (
		<div className="login--form">
			<form onSubmit={handleLogin}>
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
