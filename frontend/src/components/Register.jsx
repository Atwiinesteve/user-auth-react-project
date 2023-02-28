import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import "../styles/Register.css";

export default function Register() {
	const GoogleImage = "https://cdn-icons-png.flaticon.com/512/281/281764.png";
	const FacebookImage = "https://cdn-icons-png.flaticon.com/512/174/174848.png";

	const [names, setNames] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleRegister(e) {
		e.preventDefault()
		axios.post('http://localhost:8080/register', {
			names, email, username, password
		}).then((response) => response.json()).catch((err) => console.log(err))
	}

	return (
		<div className="register--form">
			<form onSubmit={handleRegister}>
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
						<input
							value={names}
							onChange={(e) => setNames(e.target.value)}
							type="text"
						/>
					</div>
					<div className="input--area">
						<label htmlFor="">email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
						/>
					</div>
					<div className="input--area">
						<label htmlFor="">username</label>
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							type="text"
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
					<button type="submit">register</button>
					<p>
						Already have account? Signin <Link to="/login">here</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
