import React, { useEffect } from "react";
import { addHeroToMyTeam } from "./actions/herosActions";
import Routes from "./routes";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const getHeroesLocalStorage = () => {
    const heroes = JSON.parse(localStorage.getItem("myTeam"));
    heroes.map((hero) => {
      dispatch(addHeroToMyTeam(hero, hero.biography.alignment));
    });
  };
  useEffect(() => {
    JSON.parse(localStorage.getItem("myTeam")) !== null
      ? getHeroesLocalStorage()
      : console.log("algo salio mal");
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(https://wallpapercave.com/wp/wp8793838.jpg)`,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Routes />
    </div>
  );
}

export default App;
