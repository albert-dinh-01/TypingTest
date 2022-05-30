import React, { useState, useRef, useEffect } from "react";
import "./styles/TextField.css";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

// TODO: Give another 10 words once all 10 words are covered
// TODO: Only allow the timer to go to 60 seconds
// TODO: Reset when the timer reaches 60 seconds

const getText = () =>
	`Sleep deprivation causes all sorts of challenges and problems`
		.split(" ")
		.sort(() => (Math.random() > 0.5 ? 1 : -1));

/**
When one get enough sleep mind work clearly Studies have shown that after staying awake for 24 hours ability to do simple math is greatly impaired Driving tired has been shown to be as bad as driving drunk Moods change depression anxiety and mania can be induced by lack of sleep As much as people try to do without enough sleep it is a wonder more crazy things happen in this world There was something in the tree It was difficult to tell from the ground but Rachael could see movement She squinted her eyes and peered in the direction of the movement trying to decipher exactly what she had spied The more she peered however the more she thought it might be a figment of her imagination Nothing seemed to move until the moment she began to take her eyes off the tree Then in the corner of her eye she would see the movement again and begin the process of staring again
 */
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
	const { correctWords, startCount, noKeyStrokes, totalWordsCovered } = props;
	const [timer, setTimer] = useState(0);
	useEffect(() => {
		let id: any;
		if (startCount) {
			id = setInterval(() => {
				setTimer((lastSpeed) => lastSpeed + 1);
			}, 1000);
		}

		if (!startCount) {
			setTimer(0);
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
				WPM:{" "}
				{Number(
					noKeyStrokes / (5 * minutesElapsed) -
						(totalWordsCovered - correctWords) / minutesElapsed || 0
				) <= 0
					? 0
					: Number(
							noKeyStrokes / (5 * minutesElapsed) -
								(totalWordsCovered - correctWords) / minutesElapsed
					  ).toFixed(0)}
			</p>
		</div>
	);
};

const TextFieldComponent = () => {
	const [userInput, setUserInput] = useState("");
	const text = useRef(getText());
	const [activeWordIndex, setActiveWordIndex] = useState(0);
	const [correctWordArray, setCorrectWordArray] = useState([]);
	const [startCountYet, setStartCountYet] = useState(false);
	const [countKeyStrokes, setCountKeyStrokes] = useState(0);

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
				setUserInput("");
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

	const resetApp = (event: any) => {
		event.preventDefault();
		text.current = getText();
		setActiveWordIndex(0);
		setCorrectWordArray([]);
		setStartCountYet(false);
		setCountKeyStrokes(0);
		setUserInput("");
	};

	return (
		<div
			id="textFieldContainer"
			className="relative bg-red-600 top-[30%] left-[10%] h-auto max-h-[50%] w-[80vw] p-9 flex justify-evenly"
		>
			<div className="bg-blue-500" id="timer">
				<Timer
					startCount={startCountYet}
					correctWords={correctWordArray.filter(Boolean).length}
					noKeyStrokes={countKeyStrokes}
					totalWordsCovered={correctWordArray.length}
				/>
			</div>

			<div className="" id="typingContainer">
				<p id="displayedTest" className="bg-lime-800">
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

				<div className="bg-stone-600" id="textFieldAndRefreshButton">
					<div className="p-0 m-0" id="textField">
						<TextField
							type="text"
							name="mainTextField"
							value={userInput}
							onChange={(e) => {
								setUserInput(e.target.value);
								processInput(e.target.value);
								setCountKeyStrokes((old) => old + 1);
							}}
							id="standard-basic"
							label="Type here"
							variant="standard"
							autoFocus={true}
						/>
					</div>
					<div className="p-0 m-0" id="resetButton">
						<IconButton
							aria-label="delete"
							size="large"
							onClick={(e) => {
								resetApp(e);
							}}
						>
							<RestartAltIcon />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextFieldComponent;
