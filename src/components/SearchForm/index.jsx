import React from "react";

export default function SearchForm() {
	return (
		<div className="w-50">
			<h2 className="text-light shadow-sm bg-dark py-4 rounded text-center">
				Find heroes for your team
			</h2>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control bg-dark text-light"
					placeholder="Search superhero"
					aria-label="Search superhero"
					aria-describedby="basic-addon2"
				/>
				<div className="input-group-append">
					<button className="btn btn-primary" type="button">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
