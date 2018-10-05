import React, { Component } from "react";

class Reddit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			threads: []
		};
	}

	async componentDidMount() {
		const response = await fetch(
			"https://api.reddit.com/r/" + this.props.sujet
		);
		const json = await response.json();
		this.setState({ threads: json.data.children });
	}
	async componentDidUpdate(prevProps) {
		if (prevProps.sujet !== this.props.sujet) {
			const response = await fetch(
				"https://api.reddit.com/r/" + this.props.sujet
			);
			const json = await response.json();
			this.setState({ threads: json.data.children });
		}
	}

	render() {
		console.log(this.state.threads[3]);
		return (
			<div>
				{this.state.threads.map((item, i) => (
					<div className="ArticleBox" key={i}>
						<h2>
							{i}. {item.data.title}
						</h2>
						<p>{item.data.selftext}</p>
						<p className="Auteur">{item.data.author}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Reddit;
