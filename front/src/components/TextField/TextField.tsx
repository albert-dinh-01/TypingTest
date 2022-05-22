import React, { useState, useRef, useEffect } from "react";
import "./styles/TextField.css";

const getText = () =>
	`Sleep deprivation causes all sorts of challenges and `
		.split(" ")
		.sort(() => (Math.random() > 0.5 ? 1 : -1));

let Word = (props: any): any => {
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

Word = React.memo(Word);

const Timer = (props: any) => {
	const { correctWords, startCount } = props;
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		let id: any;
		if (startCount) {
			id = setInterval(() => {
				setTimer((lastSpeed) => lastSpeed + 1);
			}, 1000);
		}

		return () => {
			clearInterval(id);
		};
	}, [startCount]);
	const minutesElapsed = timer / 60;
	return (
		<div className="" id="timeAndWpm">
			<p className="" id="Timer">
				Timer: {timer}
			</p>
			<p className="" id="Speed">
				WPM: {(correctWords / minutesElapsed || 0).toFixed(0)}
			</p>
		</div>
	);
};

const TextField = () => {
	const [userInput, setUserInput] = useState("");
	const text = useRef(getText());
	const [activeWordIndex, setActiveWordIndex] = useState(0);
	const [correctWordArray, setCorrectWordArray] = useState([]);
	const [startCountYet, setStartCountYet] = useState(false);

	const processInput = (e: string): void => {
		if (activeWordIndex === text.current.length) {
			return;
		}

		if (!startCountYet) {
			setStartCountYet(true);
		}

		if (e.endsWith(" ")) {
			if (activeWordIndex === text.current.length - 1) {
				setStartCountYet(false);
				setUserInput("HOORAY!");
				return;
			} else {
				setUserInput("");
			}
			setActiveWordIndex((index) => index + 1);

			setCorrectWordArray((data) => {
				const word = e.trim();
				let newResult: any = [...data];
				newResult[activeWordIndex] = word === text.current[activeWordIndex];
				return newResult;
			});
		} else {
			setUserInput(e);
		}
	};

	return (
		<div id="textFieldContainer" className="">
			<Timer
				startCount={startCountYet}
				correctWords={correctWordArray.filter(Boolean).length}
			/>
			<p id="displayedTest" className="">
				{text.current.map((word, index) => {
					return (
						<Word
							text={word}
							active={index === activeWordIndex}
							correct={correctWordArray[index]}
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
