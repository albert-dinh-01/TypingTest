import React, { useState } from "react";

const getText = () =>
	`Sleep deprivation causes all sorts of challenges and problems When one get enough sleep mind work clearly Studies have shown that after staying awake for 24 hours ability to do simple math is greatly impaired Driving tired has been shown to be as bad as driving drunk Moods change, depression, anxiety, and mania can be induced by lack of sleep As much as people try to do without enough sleep it is a wonder more crazy things happen in this world There was something in the tree It was difficult to tell from the ground, but Rachael could see movement She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied The more she peered, however, the more she thought it might be a figment of her imagination Nothing seemed to move until the moment she began to take her eyes off the tree Then in the corner of her eye, she would see the movement again and begin the process of staring again`
		.split(" ")
		.sort(() => (Math.random() > 0.5 ? 1 : -1));

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
