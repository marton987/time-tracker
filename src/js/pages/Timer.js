import React from "react";

import Issue from "../components/Issue";
import IssuesStore from "../stores/IssuesStore";


export default class Timer extends React.Component {
	constructor() {
		super();
		this.getIssues = this.getIssues.bind(this);
		this.state = {
			issues: IssuesStore.getAll()
		};
	}

	componentWillMount() {
		IssuesStore.on("change", this.getIssues);
	}

	componentWillUnmount() {
		IssuesStore.removeListener("change", this.getIssues);
	}

	getIssues() {
		this.setState({
			issues: IssuesStore.getAll()
		});
	}

	render() {
		const {issues} = this.state;

		const IssueComponents = issues.map((issue) => {
			return <Issue key={issue.id} {...issue}/>;
		});
		
		return (
			<div>
				<h1>Timer Application</h1>
				<p>Here you will see a list with all your related issues...</p>
				<ul>{IssueComponents}</ul>
			</div>
		)
	}
}
