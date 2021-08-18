import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "wouter";

export default function LoginForm() {
	const [, setLocation] = useLocation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const getEmail = e => {
		setEmail(e.target.value);
	};
	const getPassword = e => {
		setPassword(e.target.value);
	};
	const sendLoginForm = e => {
		e.preventDefault();
		try {
			axios
				.post("http://challenge-react.alkemy.org", {
					email: email,
					password: password,
				})
				.then(res => {
					localStorage.setItem("token", res?.data?.token);
					setLocation("/home");
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="container py-5 px-4 shadow-lg bg-light rounded col-12 col-md-5">
				<div className="text-center mb-3">
					<h4>
						<strong>Log in to build your team!</strong>
					</h4>
				</div>
				<form onSubmit={e => sendLoginForm(e)}>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
							onChange={e => getEmail(e)}
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
							onChange={e => getPassword(e)}
						/>
						<label htmlFor="floatingPassword">Password</label>
					</div>
					<button className="btn btn-primary col-12 mb-2" type="submit">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
