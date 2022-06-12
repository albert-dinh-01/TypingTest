import React from "react";
import "./App.css";
import TextField from "./components/TextField/TextField";
import WelcomeText from "./components/WelcomeText/WelcomeText";

const App = () => {
	return (
		<div
			className="relative p-0 m-0 bg-black top-0 w-full h-[1200px] sm:grid sm:grid-cols-1 sm:bg-black"
			id="app"
		>
			<WelcomeText />
			<TextField />
		</div>
	);
};

export default App;
