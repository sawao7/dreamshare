import axios from "axios";
import React from "react";

// 文字の送信、画像の表示
export const Create = (props) => {
	const user = props.user;
	// const url = "http://127.0.0.1:8000/";
	const url = "https://fastapi-for-test.herokuapp.com/";

	const [text, setText] = React.useState();
	const [imageURL, setImageURL] = React.useState();

	const GetInputText = (e) => {
		setText(e.target.value);
	};

	const SubmitText = () => {
		// console.log(text);
		axios
			.post(url + "deepai", {
				strings: text,
			})
			.then((res) => {
				console.log(res.data);
				setImageURL(res.data.output_url);
			});
		setText("");
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
			{imageURL ? <img src={imageURL} alt="text" className="" /> : "no image"}
		</div>
	);
};
