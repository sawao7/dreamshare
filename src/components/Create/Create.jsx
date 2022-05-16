import axios from "axios";
import React from "react";

import "./Create.css";
import Genie_Image from "../../Images/genie.png";

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
		<div className="p-10 text-white big_height">
			<div>
				<input
					onChange={GetInputText}
					value={text}
					placeholder="What is your dream?"
					className="block w-2/3 h-32 p-10 mx-auto text-5xl italic font-bold text-black bg-yellow-100 border-4 border-yellow-300 rounded-lg "
				></input>
				<div className="block w-8 h-8 mt-3 ml-56 bg-yellow-400 rounded-full"></div>
				<div className="block w-8 h-8 mt-3 bg-yellow-400 rounded-full ml-52"></div>
				<img src={Genie_Image} alt="text" className="absolute w-96 left-18 top-80" />
				<div className="flex justify-center">
					<button
						onClick={SubmitText}
						className="relative  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
					>
						<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-3xl">
							Create
						</span>
					</button>
				</div>
			</div>
			{/* 画像表示 */}
			{imageURL ? <img src={imageURL} alt="text" className="" /> : "no image"}
		</div>
	);
};
