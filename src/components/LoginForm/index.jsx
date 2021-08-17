import React, { useState } from "react";

export default function LoginForm() {
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
		console.log("la nena no se compara");
	};
	return (
		<>
			<div className="container py-5 px-3 border bg-light col-4 rounded">
				<div className="text-center mb-3">
					<h5>
						<strong>Log in to build your team!</strong>
					</h5>
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
