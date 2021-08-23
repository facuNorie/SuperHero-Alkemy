import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Powerstats from "../Powerstats";

export default function CardHero({ hero, cardTeam, is_in_my_team }) {
	const { addSuperHero, removeSuperHero } = useContext(AppContext);
	return (
		<div className="col-12 col-sm-6 col-md-4 col-xl-3 my-2" key={hero.id}>
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

					<div className="mt-1">
						{cardTeam ? (
							<div className="d-flex justify-content-evenly">
								<button
									onClick={() => removeSuperHero(hero.id)}
									className="btn btn-danger"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-trash-fill"
										viewBox="0 0 16 16"
									>
										<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
									</svg>
								</button>
								<button className="btn btn-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-box-arrow-in-right"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
										/>
										<path
											fillRule="evenodd"
											d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
										/>
									</svg>
								</button>
							</div>
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
