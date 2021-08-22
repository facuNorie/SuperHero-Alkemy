import React from "react";
import { ErrorMessage } from "formik";

export default function ErrorInput(props) {
	return (
		<div className="bg-danger d-inline-block rounded my-1">
			<ErrorMessage
				name={props.name}
				component="div"
				style={{ color: "white", padding: "2px" }}
			/>
		</div>
	);
}
