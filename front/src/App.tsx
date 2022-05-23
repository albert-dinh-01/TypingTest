import React from "react";
import "./App.css";
import TextField from "./components/TextField/TextField";
import WelcomeText from "./components/WelcomeText/WelcomeText";

const App = () => {
	return (
		<div
			className="relative top-0 w-[100vw] h-[100vh] sm:grid sm:grid-cols-1 sm:bg-black"
			id="app"
		>
			<WelcomeText />
			<TextField />
		</div>
	);
};

export default App;
