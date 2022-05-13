import React from "react";
import { Zoom } from "react-reveal";
import "./Main.css";
import useScroll from "../CustomHooks/useScroll";

import Pencil from "../../Images/pencil.png";
import Picture_1 from "../../Images/picture_1.jpeg";
import Picture_2 from "../../Images/picture_2.jpeg";
import Picture_3 from "../../Images/picture_3.jpeg";
import Movie from "../../Movies/Produce1.mp4";

export const Main = (props) => {
	const user = props.user;
	const videoRef = React.useRef(null);
	const position = useScroll();
	console.log(position);
	return (
		// <div className={user ? "bg-black" : "bg-white"}>
		<div className="bg-black">
			<div className="relative w-1/1">
				{/* <Zoom when={position < 80} collapse> */}
				<Zoom>
					<img src={Pencil} alt="" className="block mx-auto" />
				</Zoom>
				<p className="font-extrabold text-transparent float_text title_font_size bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 not_wrap">
					Dream Share
				</p>
			</div>
			<div className="relative">
				<p className="font-extrabold text-transparent float_text text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 not_wrap">
					鮮やかに踊るパワー
				</p>
			</div>
			{/* video auto play */}
			<div className="bg-white">
				<video ref={videoRef} muted autoPlay loop className="w-full">
					<source src={Movie} type="video/mp4"></source>
				</video>
			</div>
			{/* 画面白に変える */}

			<div className="bg-white h-96">
				<p>すみずみまで美しい。 オールスクリーンの デザイン。</p>
				<div>
					<p>
						読む時も、観る時も、作る時も、iPad
						Airはいつもあなたを夢中にさせます。その秘密は、10.9インチのLiquid Retinaディスプレイ。True
						Tone、P3の広色域、反射防止コーティングなどの先進的なテクノロジーが組み込まれています1。
					</p>
					<Zoom>
						<img src={Picture_1} alt="" />
						<img src={Picture_2} alt="" />
						<img src={Picture_3} alt="" />
					</Zoom>
				</div>
			</div>
		</div>
	);
};
