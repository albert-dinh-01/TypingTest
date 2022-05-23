import React from "react";
import "./App.css";
import TextField from "./components/TextField/TextField";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<div className="relative top-0 w-[100vw] h-[100vh] sm:grid sm:grid-cols-1 sm:bg-black" id="app">
			<WelcomeText />
			<TextField />
			<Footer />
		</div>
	);
};

export default App;
