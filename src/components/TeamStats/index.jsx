import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

export default function TeamStats() {
	const { getTeamStats, myTeam } = useContext(AppContext);
	const [globalStats, setGlobalStats] = useState([]);
	const [higherStat, setHigherStat] = useState([])
	const getBestStat=()=>{
		let PowerValues = globalStats?.map((stat)=>stat.powervalue)
		let HigherPoweralue = Math.max(...PowerValues)
		setHigherStat(globalStats?.filter(stat=>stat.powervalue === HigherPoweralue));
	}
	useEffect(() => {
		myTeam.length 
		? setGlobalStats(Object.values(getTeamStats())): "";
	}, [myTeam]);
	useEffect(() => {
		globalStats.length ? getBestStat() : "";
	}, [globalStats]);
	return (
		<div className="h-15 w-100 container">
			{higherStat.length ? 
			<div className="text-center mb-1">
				<div className="bg-dark d-inline-flex p-1 align-items-center rounded">
				<h6 className="m-0 text-white p-1">
				Team category
					
				</h6>
				<span className="badge bg-info">{higherStat[0].powername}</span>
				</div>
			
			</div>
				 : 
			<span></span>
			}
			
			<ul className="list-group d-flex flex-row">
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
