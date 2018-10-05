import React, { Component } from "react";

class Reddit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			threads: []
		};
	}

	async componentDidMount() {
		const response = await fetch("https://api.reddit.com/r/reactjs");
		const json = await response.json();
		//console.log(json.data.children);
		this.setState({ threads: json.data.children });
	}
	render() {
		console.log(this.state.threads[2]);
		return (
			<div>
				{this.state.threads.map((item, i) => (
					<div key={i}>
						<h2>
							{i}. {item.data.title}
						</h2>
						<p>{item.data.selftext}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Reddit;
