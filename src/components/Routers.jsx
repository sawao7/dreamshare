import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Top } from "./Top";

export const Routers = () => {
	return (
        <BrowserRouter>
            <Header />
			<Routes>
				<Route path="/" element={<Top />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
