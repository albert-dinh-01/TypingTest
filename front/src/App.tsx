import React from "react";
import "./App.css";
import TextField from "./components/TextField/TextField";
import WelcomeText from "./components/WelcomeText/WelcomeText";

const App = () => {
	return (
		<div
			className="relative p-0 m-0 bg-blue-500 top-0 w-[100vw] min-h-[100vh] h-auto sm:grid sm:grid-cols-1 sm:bg-black"
			id="app"
		>
			<WelcomeText />
			<TextField />
		</div>
	);
};

export default App;
