import React from "react";

export default function Spinner() {
	return (
		<>
			<div className="d-flex justify-content-center text-primary">
				<div className="spinner-border" role="status">
					<span className="sr-only"></span>
				</div>
			</div>
		</>
	);
}