import React, { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = props => {
	const [listOfResults, setListOfResults] = useState([]);
	const getSuperHero = hero => {
		try {
			axios
				.get(`https://superheroapi.com/api.php/372344864528011/search/${hero}`)
				.then(res => {
					setListOfResults(res?.data.results);
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<AppContext.Provider value={{ getSuperHero, listOfResults }}>
			{props.children}
		</AppContext.Provider>
	);
};
