import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export default function ResulsOfSearch() {
	const { listOfResults } = useContext(AppContext);
	return (
		<div>
			{listOfResults?.map(item => {
				return (
					<img src={item.image.url} key={item.id} style={{ width: "100px" }} />
				);
			})}
		</div>
	);
}
