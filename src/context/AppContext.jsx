import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = props => {
	/* States */
	const [listOfResults, setListOfResults] = useState([]);
	const [myTeam, setMyTeam] = useState([]);
	const [top, setTop] = useState(false);
	const [spinner, setSpinner] = useState(false);
	/* Functions */
	const getSuperHero = hero => {
		try {
			axios
				.get(`https://superheroapi.com/api.php/372344864528011/search/${hero}`)
				.then(res => {
					setListOfResults(res?.data.results);
					setSpinner(false);
				})
				.catch(e => console.log(e));
		} catch (error) {
			console.log(error);
		}
	};
	const addSuperHero = hero => {
		setMyTeam([...myTeam, hero]);
		localStorage.setItem("myTeam", JSON.stringify([...myTeam, hero]));
	};
	const removeSuperHero = heroID => {
		const newTeam = myTeam.filter(hero => hero.id !== heroID);
		setMyTeam(newTeam);
		localStorage.setItem("myTeam", JSON.stringify(newTeam));
	};
	const getHeroesLS = () => {
		const heroes = JSON.parse(localStorage.getItem("myTeam"));
		setMyTeam(heroes);
	};
	const getTeamStats = () => {
		/* No me gustó esta funcion*/
		let powerstats = myTeam.map(hero => hero.powerstats);
		let combat = powerstats.map(stats => parseInt(stats.combat));
		combat = combat?.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		let durability = powerstats.map(stats => parseInt(stats.durability));
		durability = durability?.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		let intelligence = powerstats.map(stats => parseInt(stats.intelligence));
		intelligence = intelligence?.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		let power = powerstats.map(stats => parseInt(stats.power));
		power = power?.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		let speed = powerstats.map(stats => parseInt(stats.speed));
		speed = speed?.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		let strength = powerstats.map(stats => parseInt(stats.strength));
		strength = strength?.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		);
		return [
			{ powername: "Combat", powervalue: combat },
			{ powername: "Durability", powervalue: durability },
			{ powername: "Intelligence", powervalue: intelligence },
			{ powername: "Power", powervalue: power },
			{ powername: "Speed", powervalue: speed },
			{ powername: "Strength", powervalue: strength },
		];
	};

	useEffect(() => {
		JSON.parse(localStorage.getItem("myTeam")) !== null
			? getHeroesLS()
			: console.log("algo salio mal");
	}, []);

	return (
		<AppContext.Provider
			value={{
				getSuperHero,
				setListOfResults,
				listOfResults,
				top,
				setTop,
				spinner,
				setSpinner,
				addSuperHero,
				myTeam,
				removeSuperHero,
				getTeamStats,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
