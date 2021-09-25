import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Spinner from ".././Spinner";
import CardHero from "../CardHero";
import { useSelector } from "react-redux";
import "./style.css";
export default function ResulsOfSearch() {
  const listOfResults = useSelector((state) => state?.searchResults);
  const myTeam = useSelector((state) => state?.myTeam);
  const { top, spinner } = useContext(AppContext);
  const idAllTeam = myTeam?.map((hero) => hero.id);
  return (
    <div
      className={
        top
          ? "h-75 w-100 container-fluid overflow-auto rounded containerResults"
          : "false"
      }
      style={top ? { backdropFilter: "blur(5px)" } : { overflow: "auto" }}
    >
      {spinner ? <Spinner /> : <span></span>}
      <div className="row">
        {listOfResults?.map((hero) => {
          return (
            <CardHero
              key={hero.id}
              hero={hero}
              is_in_my_team={idAllTeam.includes(hero.id) ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
}
