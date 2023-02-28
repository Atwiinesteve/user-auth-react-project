import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";

export default function App() {
	return (
		<Routes>
			<Route path={"/"} element={<Layout />}>
				<Route path={"register"} element={<Register />}></Route>
				<Route path={"login"} element={<Login />}></Route>
			</Route>
		</Routes>
	);
}
