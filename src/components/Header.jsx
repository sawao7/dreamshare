import React from "react";
import firebase from "./firebase";

import { Link, useNavigate } from "react-router-dom";

export const Header = (props) => {
	const user = props.user;
	const navigate = useNavigate();

	// google login function
	const GoogleLogin = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	};

	// google logout function
	const GoogleLogout = () => {
		firebase.auth().signOut();
		navigate("/");
	};
	return (
		<div>
			<div>
				{user ? (
					<div>
						<div>ログイン済み</div>
						<button onClick={() => GoogleLogout()}>Logout</button>
					</div>
				) : (
					<div>
						<div>ログインして</div>
						<button onClick={() => GoogleLogin()}>Login</button>
					</div>
				)}
			</div>
		</div>
	);
};
