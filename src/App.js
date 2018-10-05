import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Reddit from "./Reddit";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Reddit />
			</div>
		);
	}
}

export default App;
