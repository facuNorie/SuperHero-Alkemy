import React from "react";
import MyTeam from "../../components/MyTeam";
import TeamStats from "../../components/TeamStats";

export default function Home() {
	return (
		<div className="h-100">
			<div className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
				<TeamStats />
				<MyTeam />
			</div>
		</div>
	);
}
