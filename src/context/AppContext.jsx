import React, { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = props => {
	const [listOfResults, setListOfResults] = useState([]);
	const [top, setTop] = useState(false);
	const [spinner, setSpinner] = useState(false);
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
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
