import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";

import UserContext from './context/UserContext';

export default function App() {
	const [email, setEmail] = useState('')
	return (
		<UserContext.Provider value={{ email, setEmail }}>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					<div>
						{ !!email && (
							<div>Logged in as {email}</div>
						)}
						{ !email && (
							<div>Not yet Logged in</div>
						)}
					</div>
					<Route path={"register"} element={<Register />}></Route>
					<Route path={"login"} element={<Login />}></Route>
				</Route>
			</Routes>
		</UserContext.Provider>
	);
}
