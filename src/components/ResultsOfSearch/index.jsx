import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Spinner from ".././Spinner";
import "./style.css";
export default function ResulsOfSearch() {
	const { listOfResults, top, spinner } = useContext(AppContext);
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
				{listOfResults?.map(item => {
					return (
						<div className="col-12 col-sm-4 col-lg-3 my-2" key={item.id}>
							<div className="card h-100">
								<img src={item.image.url} className="card-img h-100" />
								<div className="card-img-overlay text-center d-flex flex-column justify-content-end">
									<p className="card-title p-1 bg-light rounded">{item.name}</p>
									<div>
										<button className="btn btn-success">Add to team</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
