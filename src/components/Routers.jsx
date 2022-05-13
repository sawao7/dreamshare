import React from "react";
import firebase from "./firebase";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Top } from "./Top";

export const Routers = () => {
	const [user, setUser] = React.useState();
	React.useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);
	return (
		<BrowserRouter>
			<Header user={user} />
			<Routes>
				<Route path="/" element={<Top />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
