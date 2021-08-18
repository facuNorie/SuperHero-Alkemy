import React from "react";
import axios from "axios";
import Routes from "./routes";
import { AppProvider } from "./context/AppContext";
function App() {
	/* const getSuperHero = () => {
		axios
			.get(`https://superheroapi.com/api.php/372344864528011/${id}`)
			.then(res => {
				console.log(res);
				setImgHeroe(res?.data.image?.url);
			});
	}; */

	return (
		<div
			style={{
				backgroundImage: `url(https://wallpapercave.com/wp/wp8793838.jpg)`,
				height: "100vh",
			}}
		>
			<AppProvider>
				<Routes />
			</AppProvider>
		</div>
	);
}

export default App;
