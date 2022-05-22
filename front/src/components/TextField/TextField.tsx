import React, { useState, useRef } from "react";
import "./styles/TextField.css";

const getText = () =>
	`Sleep deprivation causes all sorts of challenges and problems When one get enough sleep mind work clearly Studies have shown that after staying awake for 24 hours ability to do simple math is greatly impaired Driving tired has been shown to be as bad as driving drunk Moods change, depression, anxiety, and mania can be induced by lack of sleep As much as people try to do without enough sleep it is a wonder more crazy things happen in this world There was something in the tree It was difficult to tell from the ground, but Rachael could see movement She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied The more she peered, however, the more she thought it might be a figment of her imagination Nothing seemed to move until the moment she began to take her eyes off the tree Then in the corner of her eye, she would see the movement again and begin the process of staring again`
		.split(" ")
		.sort(() => (Math.random() > 0.5 ? 1 : -1));

const Word = (props: any) => {
	const { text, active, correct } = props;

	if (correct === true) {
		return <span className="correct">{text} </span>;
	} else if (correct === false) {
		return <span className="incorrect">{text} </span>;
	}

	if (active === true) {
		return <span className="active">{text} </span>;
	}

	return <span>{text} </span>;
};

const TextField = () => {
	const [userInput, setUserInput] = useState("");
	const text = useRef(getText());
	const [activeWordIndex, setActiveWordIndex] = useState(0);

	const processInput = (e: string): void => {
		if (e.endsWith(" ")) {
			setActiveWordIndex((index) => index + 1);
			setUserInput("");
		} else {
			setUserInput(e);
		}
	};

	return (
		<div id="textFieldContainer" className="">
			<p id="displayedTest" className="">
				{text.current.map((word, index) => {
					return (
						<Word
							text={word}
							active={index === activeWordIndex}
							correct={null}
						/>
					);
				})}
			</p>
			<input
				type="text"
				name="mainTextField"
				value={userInput}
				onChange={(e) => {
					setUserInput(e.target.value);
					processInput(e.target.value);
				}}
			/>
		</div>
	);
};

export default TextField;
