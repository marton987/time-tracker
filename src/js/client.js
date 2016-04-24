import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Timer from "./pages/Timer";


const app = document.getElementById('app');


ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Timer}></IndexRoute>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
	app);
