import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { signInWithGoogle,  signInWithGithub } from '../firebase/firebase';

import "../styles/Register.css";

export default function Register() {
	const GoogleImage = "https://cdn-icons-png.flaticon.com/512/281/281764.png";
	const GithubImage = "https://cdn-icons-png.flaticon.com/512/733/733609.png";

	const [names, setNames] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')


	async function handleRegister(e) {
		e.preventDefault()
		const response = await axios.post('http://localhost:8080/register', {
			names, email, username, password
		})
		if(response.status === 200) {
			alert('User successfully registered')
			setNames('')
			setEmail('')
			setUsername('')
			setPassword('')
		} else {
			alert('User not registered..')
		}
	}

	return (
		<div className="register--form">
			<form onSubmit={handleRegister}>
				<div className="header">
					<h2>Create your account</h2>
					<p>sign up below using</p>
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
					<button onClick={signInWithGithub}>
						<span>
							<img
								width="24px"
								height="24px"
								src={GithubImage}
								alt="github logo"
							/>
						</span>
						Github
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
				</div>
				<button>register</button>
				<p>
					Already have account? Signin <Link to="/login">here</Link>
				</p>
			</form>
		</div>
	);
}
