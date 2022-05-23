import React from "react";
import "./App.css";
import TextField from "./components/TextField/TextField";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<div className="" id="app">
			<WelcomeText />
			<TextField />
			<Footer />
		</div>
	);
};

export default App;
