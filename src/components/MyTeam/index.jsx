import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CardHero from "../CardHero";
export default function MyTeam() {
	const { myTeam } = useContext(AppContext);

	return (
		<div
			className="h-75 w-100 container-fluid overflow-auto"
			style={{ backdropFilter: "blur(5px)" }}
		>
			<div className="row justify-content-center">
				{myTeam?.map(hero => {
					return <CardHero key={hero.id} hero={hero} cardTeam="true" />;
				})}
			</div>
		</div>
	);
}
