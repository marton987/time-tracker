import React from "react";
import {IndexLink, Link} from "react-router";


export default class Nav extends React.Component {
	constructor() {
		super();
		this.state = {
			collapsed: true
		};
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}

	render() {
		const {location} = this.props;
		const {collapsed} = this.state;
		const timerClass = location.pathname === "/" ? "active" : "";
		const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
		const navClass = collapsed ? "collapse" : "";

		return (
			<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class={timerClass}>
								<IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Timer</IndexLink>
							</li>
							<li class={settingsClass}>
								<IndexLink to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</IndexLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
