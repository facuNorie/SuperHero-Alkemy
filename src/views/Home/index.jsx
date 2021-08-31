import React,{useContext} from "react";
import MyTeam from "../../components/MyTeam";
import TeamStats from "../../components/TeamStats";
import { AppContext } from "../../context/AppContext";

export default function Home() {
	const {myTeam} = useContext(AppContext)
	return (
		<div className="h-100">
			<div className="container-fluid h-100 d-flex flex-column align-items-center justify-content-center">
				{myTeam.length ? <TeamStats />: <span></span>}
				<MyTeam />
			</div>
		</div>
	);
}
