import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

export default function TeamStats() {
	const { getTeamStats, myTeam } = useContext(AppContext);
	const [globalStats, setGlobalStats] = useState([]);
	const [higherStat, setHigherStat] = useState([])
	const [avgHeight, setAvgHeight] = useState("")
	const [avgWeight, setAvgWeight] = useState("")
	const getBestStat=()=>{
		let PowerValues = globalStats?.map((stat)=>stat.powervalue)
		let HigherPoweralue = Math.max(...PowerValues)
		setHigherStat(globalStats?.filter(stat=>stat.powervalue === HigherPoweralue));
	}
	const getAverage=()=>{
		/* No funciona con toneladas o metros */
		let height = myTeam.map((hero)=>hero.appearance.height[1])
		let avgHeight = height.map(item => item.split(" ",))
		height = avgHeight.map(item=>parseInt(item[0]))
		avgHeight = height.reduce((a, b) => a + b) / height.length
		setAvgHeight(Math.trunc(avgHeight));

		let weight = myTeam.map((hero)=>hero.appearance.weight[1])
		let avgWeight = weight.map(item => item.split(" ",))
		weight = avgWeight.map(item=>parseInt(item[0]))
		avgWeight = weight.reduce((a, b) => a + b) / weight.length
		setAvgWeight(Math.trunc(avgWeight));
	}
	
	useEffect(() => {
		myTeam.length 
		?( setGlobalStats(Object.values(getTeamStats())), getAverage()): "";
	}, [myTeam]);
	useEffect(() => {
		globalStats.length ? getBestStat() : "";
	}, [globalStats]);
	return (
		<div className="h-15 w-100 container-fluid">
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
				<li className="list-group-item flex-grow-1 text-center">
					<h6 className="m-1">Average height (cm)
						<br />
						<span className="badge rounded-pill bg-warning mt-1">{avgHeight}</span>
					</h6>
				</li>
				<li className="list-group-item flex-grow-1 text-center">
					<h6 className="m-1">Average weight (kg)
						<br />
						<span className="badge rounded-pill bg-warning mt-1">{avgWeight}</span>
					</h6>
				</li>
			</ul>
		</div>
	);
}
