import React from "react";

export const Header = (props) => {
	const user = props.user;
	return (
		<div>
			<div>{user ? <div>ログイン済み</div> : <div>ログインして</div>}</div>
		</div>
	);
};
