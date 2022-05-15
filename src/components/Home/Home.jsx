import React from "react";
import axios from "axios";

export const Home = (props) => {
	const user = props.user;
	const [image, setImage] = React.useState();

	// const url = "https://fastapi-for-test.herokuapp.com/file";
	const url = "http://127.0.0.1:8000/file";

	React.useEffect(() => {
		axios
			.get(url, {
				responseType: "blob",
			})
			.then((res) => {
				setImage([URL.createObjectURL(res.data)]);
			});
	}, []);

	return (
		<div className="texppppppppt-white">
			<div>home</div>
			{image ? <img src={image} alt="text" className="" /> : "text"}
		</div>
	);
};
