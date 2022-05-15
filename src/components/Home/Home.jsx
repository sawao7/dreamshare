import React from "react";
import axios from "axios";

export const Home = (props) => {
	const user = props.user;
	const [text, setText] = React.useState();
	const [image, setImage] = React.useState();

	const url = "https://fastapi-for-test.herokuapp.com/file";
	// const url = "http://127.0.0.1:8000/file";

	React.useEffect(() => {
		// axios.get(url).then((response) => {
		// 	setText(response.data);
		// 	console.log(response);
		// });
		// axios.get(url).then((res) => {
		// 	setImage(res.data);
		// 	console.log(res.data);
		// });
		axios
			.get(url, {
				responseType: "blob",
			})
			.then((res) => {
				setImage([URL.createObjectURL(res.data)]);
			});
	}, []);

	return (
		<div className="text-white">
			<div>home</div>
			{/* {text ? text.Hello : "なし"} */}
			{image ? <img src={image} alt="text" className="" /> : "text"}
		</div>
	);
};
