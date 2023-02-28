import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Register from "./components/Register";

export default function App() {
	return (
		<Routes>
			<Route path={"/"} element={<Layout />}>
				<Route path={"/register"} element={<Register />}></Route>
			</Route>
		</Routes>
	);
}
