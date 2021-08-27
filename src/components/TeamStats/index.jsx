import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

export default function TeamStats() {
	const { getTeamStats, myTeam } = useContext(AppContext);
	const [globalStats, setGlobalStats] = useState([]);
	useEffect(() => {
		myTeam.length ? setGlobalStats(Object.values(getTeamStats())) : "";
	}, [myTeam]);
	return (
		<div className="h-15 w-100 container">
			<ul className="list-group h-100 d-flex flex-row">
				{globalStats?.map(stat => {
					return (
						<li
							className="list-group-item flex-grow-1 text-center"
							key={stat.powername}
						>
							<h6 className="m-1">
								Total {stat.powername}
								<br />
								<span className="badge rounded-pill bg-primary mt-1">
									{stat.powervalue}
								</span>
							</h6>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
