import React from "react";
import Routes from "./routes";
import { AppProvider } from "./context/AppContext";

function App() {
	return (
		<div
			style={{
				backgroundImage: `url(https://wallpapercave.com/wp/wp8793838.jpg)`,
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<AppProvider>
				<Routes />
			</AppProvider>
		</div>
	);
}

export default App;
