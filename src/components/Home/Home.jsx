import React from "react";
import axios from "axios";

export const Home = (props) => {
	const user = props.user;
	const [text, setText] = React.useState();
	const url = "https://b4im3j.deta.dev/";

	React.useEffect(() => {
		axios.get(url).then((response) => {
			setText(response.data);
		});
	}, []);

	return (
		<div className="text-white">
			<div>home</div>
			{text ? text.Hello : "なし"}
		</div>
	);
};
