import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Powerstats from "../Powerstats";

export default function CardHero({ hero, cardTeam, is_in_my_team }) {
	const { addSuperHero, removeSuperHero } = useContext(AppContext);
	return (
		<div className="col-12 col-sm-4 col-lg-3 my-2" key={hero.id}>
			<div className="card h-100 overflow-hidden">
				<img src={hero.image.url} className="card-img h-100" />
				<p
					className={
						hero.biography.alignment === "good"
							? "position-absolute text-light m-1 rounded px-1 bg-success"
							: "position-absolute text-light m-1 rounded px-1 bg-danger"
					}
					style={{ right: "0" }}
				>
					{hero.biography.alignment}
				</p>
				<div className="card-img-overlay text-center d-flex flex-column justify-content-end">
					{cardTeam ? (
						<Powerstats hero={hero} />
					) : (
						<div className="bg-light rounded mb-2">
							<p className="card-title p-1 mb-0">{hero.name}</p>
						</div>
					)}

					<div>
						{cardTeam ? (
							<button
								onClick={() => removeSuperHero(hero.id)}
								className="btn btn-danger"
							>
								Remove from team
							</button>
						) : is_in_my_team ? (
							<p className="btn btn-primary m-0" style={{ cursor: "default" }}>
								My team
							</p>
						) : (
							<button
								onClick={() => {
									addSuperHero(hero);
								}}
								className="btn btn-success"
							>
								Add to team
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
