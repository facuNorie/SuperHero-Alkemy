import React from "react";

export default function Powerstats({ hero }) {
	return (
		<ul className="list-group" style={{ backdropFilter: "blur(2.5px)" }}>
			<p className="card-title text-dark bg-light p-1 mb-0">{hero.name}</p>

			<li className="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center">
				Combat
				<span className="badge bg-success  badge-pill">
					{hero.powerstats.combat}
				</span>
			</li>
			<li className="list-group-item  bg-transparent text-light d-flex justify-content-between align-items-center">
				Durability
				<span className="badge bg-success badge-pill">
					{hero.powerstats.durability}
				</span>
			</li>
			<li className="list-group-item  bg-transparent text-light d-flex justify-content-between align-items-center">
				Intelligence
				<span className="badge bg-success badge-pill">
					{hero.powerstats.intelligence}
				</span>
			</li>
			<li className="list-group-item  bg-transparent text-light d-flex justify-content-between align-items-center">
				Power
				<span className="badge bg-success badge-pill">
					{hero.powerstats.power}
				</span>
			</li>
			<li className="list-group-item  bg-transparent text-light d-flex justify-content-between align-items-center">
				Speed
				<span className="badge bg-success badge-pill">
					{hero.powerstats.speed}
				</span>
			</li>
			<li className="list-group-item  bg-transparent text-light d-flex justify-content-between align-items-center">
				Strength
				<span className="badge bg-success badge-pill">
					{hero.powerstats.strength}
				</span>
			</li>
		</ul>
	);
}
