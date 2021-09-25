import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Powerstats from "../../Powerstats";
import HeroDetails from "../../HeroDetails";
import { useDispatch, useSelector } from "react-redux";
import { removeHeroFromTeam } from "../../../actions/herosActions";
export default function CardHeroTeam({ hero }) {
  const myTeam = useSelector((state) => state?.myTeam);
  const dispatch = useDispatch();
  const removeSuperHero = (hero) => {
    dispatch(removeHeroFromTeam(hero, hero.biography.alignment));
  };
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClickFlipped = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 my-2" key={hero.id}>
      <ReactCardFlip isFlipped={isFlipped} containerStyle={{ height: "100%" }}>
        {/* Front Component */}
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
            <Powerstats hero={hero} />

            <div className="mt-1">
              <div className="d-flex justify-content-evenly">
                <button
                  onClick={() => removeSuperHero(hero)}
                  className="btn btn-danger"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClickFlipped()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Back Component */}
        <div className="card h-100 overflow-hidden bg-dark">
          <img src={hero.image.url} className="card-img h-100" />
          <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
            <HeroDetails hero={hero} />
            <div className="mt-1">
              <button
                className="btn btn-primary"
                onClick={() => handleClickFlipped()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-in-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
