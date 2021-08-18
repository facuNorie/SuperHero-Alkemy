import React from "react";
import SearchForm from "../../components/SearchForm";

export default function Search() {
	return (
		<div style={{ height: "100%" }}>
			<div className="container-fluid h-100 d-flex align-items-center justify-content-center">
				<SearchForm />
			</div>
		</div>
	);
}
