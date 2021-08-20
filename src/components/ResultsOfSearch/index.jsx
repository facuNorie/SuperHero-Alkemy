import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export default function ResulsOfSearch() {
	const { listOfResults, top, setTop } = useContext(AppContext);
	return (
		<div
			className={
				top ? "h-75 w-100 container-fluid overflow-auto rounded " : "false"
			}
			style={top ? { backdropFilter: "blur(5px)" } : { overflow: "auto" }}
		>
			<div className="row">
				{listOfResults?.map(item => {
					return (
						<div className="col-12 col-sm-4 col-lg-3 my-2" key={item.id}>
							<div className="card h-100">
								<img src={item.image.url} className="card-img h-100" />
								<div className="card-img-overlay text-center align-items-end">
									<p className="card-title p-1 bg-light rounded">{item.name}</p>
									<button className="btn btn-success">Add</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
