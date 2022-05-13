import React from "react";
import firebase from "./firebase";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Top } from "./Top/Top";
import { Main } from "./Main/Main";

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
				<Route path="/" element={user ? <Main user={user} /> : <Top />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
