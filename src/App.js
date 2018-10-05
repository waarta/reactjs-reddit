import React, { Component } from "react";
import "./App.css";
import Reddit from "./Reddit";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sujet: "reactjs"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ sujet: event.target.value });
	}
	render() {
		return (
			<div className="App">
				<div className="Select">
					<form onSubmit={this.handleSubmit}>
						<label>
							Sujet :
							<select value={this.state.sujet} onChange={this.handleChange}>
								<option value="reactjs">reactjs</option>
								<option value="angular">angular</option>
								<option value="ggg">ggg</option>
							</select>
						</label>
					</form>
				</div>
				<Reddit sujet={this.state.sujet} />
			</div>
		);
	}
}

export default App;
