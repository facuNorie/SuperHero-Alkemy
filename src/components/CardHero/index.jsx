import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHeroToMyTeam } from "../../actions/herosActions";

export default function CardHero({ hero, is_in_my_team }) {
  const dispatch = useDispatch();
  const myTeam = useSelector((state) => state?.myTeam);
  const good = useSelector((state) => state?.good);
  const bad = useSelector((state) => state?.bad);

  const addSuperHero = (hero) => {
    if (myTeam.length < 6) {
      if (good < 3 && hero.biography.alignment === "good") {
        dispatch(addHeroToMyTeam(hero, "good"));
        localStorage.setItem("myTeam", JSON.stringify([...myTeam, hero]));
      } else if (bad < 3 && hero.biography.alignment !== "good") {
        dispatch(addHeroToMyTeam(hero, "bad"));
        localStorage.setItem("myTeam", JSON.stringify([...myTeam, hero]));
      }
      if (good > 2 && hero.biography.alignment === "good") {
        alert("You can only have 3 heroes");
      } else if (bad > 2 && hero.biography.alignment !== "good") {
        alert("You can only have 3 villans");
      }
    } else {
      alert("Your team is currently full");
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 my-2" key={hero.id}>
      <div className="card h-100 overflow-hidden">
        <img src={hero.image.url} className="card-img h-100" />
        <p
          className={
            hero.biography.alignment === "good"
              ? "position-absolute text-light m-1 rounded px-1 bg-success"
              : "position-absolute text-light m-1 rounded px-1 bg-danger"
          }
          style={{ right: "0" }}
        >
          {hero.biography.alignment === "good" ? "good" : "bad"}
        </p>
        <div className="card-img-overlay text-center d-flex flex-column justify-content-end">
          <div className="bg-light rounded mb-2">
            <p className="card-title p-1 mb-0">{hero.name}</p>
          </div>

          <div className="mt-1">
            {is_in_my_team ? (
              <p className="btn btn-primary m-0" style={{ cursor: "default" }}>
                My team
              </p>
            ) : (
              <button
                onClick={() => {
                  addSuperHero(hero);
                }}
                className="btn btn-success"
              >
                Add to team
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
