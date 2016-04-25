import React from "react";
import FontAwesome from "react-fontawesome"


export default class Issue extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		const {state, number, title} = this.props;
		const icon = state === "open" ? <FontAwesome name='pencil'/> : <FontAwesome name='close'/>;

		return (
			<li>
				{icon} <strong>[{number}]</strong> -  <span>{title}</span>
			</li>
		);
	}
}
