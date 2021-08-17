import React from "react";
import { Route, Redirect, Switch } from "wouter";
import Home from "../views/Home";
import Login from "../views/Login";

export default function Routes() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</>
	);
}
