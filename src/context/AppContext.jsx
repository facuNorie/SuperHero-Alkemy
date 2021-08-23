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
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
