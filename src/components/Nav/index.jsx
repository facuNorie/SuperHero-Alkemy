import React from "react";
import { useLocation } from "wouter";

export default function Nav() {
	const [, setLocation] = useLocation();

	const removeToken = () => {
		localStorage.removeItem("token");
		setLocation("/login");
	};

	return (
		<nav className="navbar navbar-dark bg-dark justify-content-between">
			<form className="form-inline px-3">
				<button
					className="btn btn-light"
					type="button"
					onClick={() => setLocation("/home")}
				>
					Home
				</button>
				<button
					className="btn btn-light mx-3"
					type="button"
					onClick={() => setLocation("/search")}
				>
					Search
				</button>
			</form>
			<form className="form-inline px-3">
				<button
					className="btn btn-outline-danger"
					type="button"
					onClick={() => removeToken()}
				>
					Sign out
				</button>
			</form>
		</nav>
	);
}
