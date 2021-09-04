import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "wouter";
import ".././ResultsOfSearch/style.css";
import CardHeroTeam from "./CardHeroTeam";
export default function MyTeam() {
  const { myTeam } = useContext(AppContext);
  const [, setLocation] = useLocation();

  return (
    <div
      className="h-75 w-100 container-fluid overflow-auto containerResults"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="row justify-content-center">
        {myTeam?.map((hero) => {
          return <CardHeroTeam key={hero.id} hero={hero} />;
        })}
        {/* Add hero + */}
        {myTeam.length ? (
          <span></span>
        ) : (
          <div
            className="col-12 col-sm-4 col-lg-3 my-2"
            style={{
              cursor: "pointer",
              height: "400px",
              width: "300px",
            }}
            onClick={() => setLocation("/search")}
          >
            <div
              className="h-100 rounded d-flex justify-content-center align-items-center"
              style={{
                border: "2px dashed #ddd",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Add hero +
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
