import React from "react";
import firebase from "./firebase";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main/Main";
import { Home } from "./Home/Home";
import { Create } from "./Create/Create";

export const Routers = () => {
	const [user, setUser] = React.useState();

	// user取得
	React.useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	return (
		<BrowserRouter>
			<Header user={user} />
			<Routes>
				<Route path="/" element={<Main user={user} />}></Route>
				<Route path="/home" element={<Home user={user} />}></Route>
				<Route path="/create" element={<Create user={user} />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
