import React from "react";
import { useLocation } from "wouter";

export default function Nav() {
	const [, setLocation] = useLocation();

	const removeToken = () => {
		localStorage.removeItem("token");
		setLocation("/login");
	};
	return (
		<nav className="navbar navbar-dark bg-dark">
			<form className="form-inline">
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
