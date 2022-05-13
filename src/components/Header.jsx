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
						<nav className="flex flex-wrap items-center justify-between p-6 bg-gray-800">
							<div className="flex items-center flex-shrink-0 mr-6 text-white">
								<Link to="/">
									<span className="text-xl font-semibold tracking-tight">Dream Share</span>
								</Link>
							</div>
							<div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
								<div className="text-sm lg:flex-grow">
									<Link
										to="/home"
										className="block mt-4 mr-4 text-gray-200 lg:inline-block lg:mt-0 hover:text-white"
									>
										{/* <div className="flex items-end flex-shrink-0 mr-6 ">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="2"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
												/>
											</svg> */}
										Home
										{/* </div> */}
									</Link>
									<Link
										to="/create"
										className="block mt-4 mr-4 text-gray-200 lg:inline-block lg:mt-0 hover:text-white"
									>
										Create
									</Link>
								</div>
								<div>
									<button
										to="/"
										onClick={() => GoogleLogout()}
										className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
									>
										Logout
									</button>
								</div>
							</div>
						</nav>
					</div>
				) : (
					<div>
						<nav className="flex flex-wrap items-center justify-between p-6 bg-gray-800">
							<div className="flex items-center flex-shrink-0 mr-6 text-white">
								<Link to="/">
									<span className="text-xl font-semibold tracking-tight">Dream Share</span>
								</Link>
							</div>
							<div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
								<div className="text-sm lg:flex-grow"></div>
								<div>
									<button
										onClick={() => GoogleLogin()}
										className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
									>
										Login
									</button>
								</div>
							</div>
						</nav>
					</div>
				)}
			</div>
		</div>
	);
};
