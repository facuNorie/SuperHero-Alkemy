import React from "react";

export default function Spinner() {
	return (
		<>
			<div className="h-100 d-flex justify-content-center align-items-center text-primary">
				<div
					className="spinner-border"
					style={{ width: "4rem", height: "4rem" }}
					role="status"
				>
					<span className="sr-only"></span>
				</div>
			</div>
		</>
	);
}
