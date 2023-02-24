import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
		<>
			<nav>
				<div className="logo">
					<Link to="/">myLogo</Link>
				</div>
				<ul>
					<li>
						<Link to="/register">register</Link>
					</li>
					<li>
						<Link to="/login">login</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};