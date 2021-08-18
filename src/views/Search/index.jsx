import React from "react";
import ResulsOfSearch from "../../components/ResultsOfSearch";
import SearchForm from "../../components/SearchForm";

export default function Search() {
	return (
		<div style={{ height: "100%" }}>
			<div className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
				<SearchForm />
				<ResulsOfSearch />
			</div>
		</div>
	);
}
