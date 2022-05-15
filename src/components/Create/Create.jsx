import axios from "axios";
import React from "react";

// 文字の送信、画像の表示
export const Create = (props) => {
	const user = props.user;
	const [text, setText] = React.useState();
	const [image, setImage] = React.useState();

	const GetInputText = (e) => {
		setText(e.target.value);
	};

	const SubmitText = () => {
		console.log(text);
		setText("");
		axios
			.get("https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png", {
				responseType: "blob",
			})
			.then((res) => {
				setImage([URL.createObjectURL(res.data)]);
			});
	};

	return (
		<div className="p-10 text-white h-96">
			<div>Create</div>
			<div>
				<input onChange={GetInputText} value={text} className="text-black"></input>
				<button onClick={SubmitText} className="border border-cyan-400">
					Create
				</button>
			</div>
			{/* 画像表示 */}
			{image ? <img src={image} alt="text" className="" /> : "text"}
		</div>
	);
};
