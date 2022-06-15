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
	const [flag, setFlag] = React.useState(false);
	const [imageURL, setImageURL] = React.useState();

	const GetInputText = (e) => {
		setText(e.target.value);
	};

	const SubmitText = () => {
		setFlag((flag) => !flag);
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
					placeholder="What was your dream?"
					className="block w-2/3 h-32 p-10 mx-auto text-5xl italic font-bold text-white bg-black border-4 border-yellow-300 rounded-lg "
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							SubmitText();
						}
					}}
					autoFocus={true}
				></input>
				<div className="block w-8 h-8 mt-3 ml-56 bg-yellow-400 rounded-full"></div>
				<div className="block w-8 h-8 mt-3 bg-yellow-400 rounded-full ml-52"></div>
				<img src={Genie_Image} alt="text" className="absolute w-96 left-18 top-80" />
				{!flag ? (
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
				) : (
					<div></div>
				)}
			</div>
			{/* 画像表示 */}
			{flag ? (
				<div>
					<div class="border border-blue-300 shadow rounded-md p-8 max-w-sm w-full mx-auto fixed top-2/3 right-1/2 translate-x-1/2 -translate-y-1/2 h-1/2 ">
						<div class="animate-pulse flex space-x-4">
							<div class="rounded-full bg-slate-700 h-20 w-20"></div>
							<div class="flex-1 space-y-6 py-1">
								<div class="h-2 bg-slate-700 rounded"></div>
								<div class="space-y-3">
									<div class="grid grid-cols-3 gap-4">
										<div class="h-2 bg-slate-700 rounded col-span-2"></div>
										<div class="h-2 bg-slate-700 rounded col-span-1"></div>
									</div>
									<div class="h-2 bg-slate-700 rounded"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div></div>
			)}
			<div>
				{imageURL ? (
					<img
						src={imageURL}
						alt="text"
						className="fixed w-1/4 translate-x-1/2 -translate-y-1/2 top-2/3 right-1/2"
					/>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
};
