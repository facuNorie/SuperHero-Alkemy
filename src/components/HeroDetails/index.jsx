import React from "react";

export default function HeroDetails({ hero }) {
	return (
		<ul className="list-group">
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Full name</p>
				<p className="m-0"> {hero.biography["full-name"]}</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Alias</p>
				<p className="m-0"> {hero.name}</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Race</p>
				<p className="m-0"> {hero.appearance.race}</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Base</p>
				<p
					className="m-0"
					style={{
						whiteSpace: "nowrap",
						textOverflow: "ellipsis",
						overflow: "hidden",
					}}
				>
					{" "}
					{hero.work.base}
				</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Occupation</p>
				<p
					className="m-0"
					style={{
						whiteSpace: "nowrap",
						textOverflow: "ellipsis",
						overflow: "hidden",
					}}
				>
					{" "}
					{hero.work.occupation}
				</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Height</p>
				<p className="m-0"> {hero.appearance.height[1]}</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Weight</p>
				<p className="m-0"> {hero.appearance.weight[1]}</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Hair color</p>
				<p className="m-0"> {hero.appearance["hair-color"]}</p>
			</li>
			<li className="list-group-item p-1 d-flex justify-content-around">
				<p className="m-0 fw-bold">Eye color</p>
				<p className="m-0"> {hero.appearance["eye-color"]}</p>
			</li>
		</ul>
	);
}
