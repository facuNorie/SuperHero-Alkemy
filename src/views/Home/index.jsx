import React from "react";
import MyTeam from "../../components/MyTeam";
import TeamStats from "../../components/TeamStats";
import { useSelector } from "react-redux";

export default function Home() {
  const myTeam = useSelector((state) => state?.myTeam);

  return (
    <div className="h-100">
      <div className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
        {myTeam?.length ? <TeamStats /> : <span></span>}
        <MyTeam />
      </div>
    </div>
  );
}
