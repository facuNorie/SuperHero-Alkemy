import React from "react";
/* Es bastante feo este componente */
export default function Powerstats({ hero }) {
	return (
		<ul className="list-group" style={{ backdropFilter: "blur(5px)" }}>
			<p className="card-title text-dark bg-light p-1 mb-0">{hero.name}</p>
			<li className="list-group-item py-1 bg-transparent text-light d-flex justify-content-between align-items-center">
				Combat
				<span
					className={
						hero.powerstats.combat >= 50
							? "badge bg-success badge-pill"
							: "badge bg-danger badge-pill"
					}
				>
					{hero.powerstats.combat}
				</span>
			</li>
			<li className="list-group-item py-1 bg-transparent text-light d-flex justify-content-between align-items-center">
				Durability
				<span
					className={
						hero.powerstats.durability >= 50
							? "badge bg-success badge-pill"
							: "badge bg-danger badge-pill"
					}
				>
					{hero.powerstats.durability}
				</span>
			</li>
			<li className="list-group-item py-1 bg-transparent text-light d-flex justify-content-between align-items-center">
				Intelligence
				<span
					className={
						hero.powerstats.intelligence >= 50
							? "badge bg-success badge-pill"
							: "badge bg-danger badge-pill"
					}
				>
					{hero.powerstats.intelligence}
				</span>
			</li>
			<li className="list-group-item py-1 bg-transparent text-light d-flex justify-content-between align-items-center">
				Power
				<span
					className={
						hero.powerstats.power >= 50
							? "badge bg-success badge-pill"
							: "badge bg-danger badge-pill"
					}
				>
					{hero.powerstats.power}
				</span>
			</li>
			<li className="list-group-item py-1 bg-transparent text-light d-flex justify-content-between align-items-center">
				Speed
				<span
					className={
						hero.powerstats.speed >= 50
							? "badge bg-success badge-pill"
							: "badge bg-danger badge-pill"
					}
				>
					{hero.powerstats.speed}
				</span>
			</li>
			<li className="list-group-item py-1 bg-transparent text-light d-flex justify-content-between align-items-center">
				Strength
				<span
					className={
						hero.powerstats.strength >= 50
							? "badge bg-success badge-pill"
							: "badge bg-danger badge-pill"
					}
				>
					{hero.powerstats.strength}
				</span>
			</li>
		</ul>
	);
}
