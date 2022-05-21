import React, { useState } from "react";

const TextField = () => {
	const [userInput, setUserInput] = useState("");
	return (
		<div id="textFieldContainer" className="">
			<p id="displayedTest" className="">
				{userInput}
			</p>
			<input
				type="text"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
			/>
		</div>
	);
};

export default TextField;
