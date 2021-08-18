import React, { useContext, useState } from "react";
import { AppContext } from "../.././context/AppContext";
import LoginForm from "../../components/LoginForm";
export default function Login() {
	const value = useContext(AppContext);

	return (
		<div style={{ height: "100%" }}>
			<div className="container-fluid h-100 d-flex align-items-center">
				<LoginForm />
			</div>
		</div>
	);
}
