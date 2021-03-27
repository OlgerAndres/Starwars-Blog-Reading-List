import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { PeopleCard } from "./peopleCard";

export const People = () => {
	const { store, actions } = useContext(Context);
	console.log("data people", store.peoples);
	return (
		<div className="container-fluid characters mt-5">
			<h1 style={{ color: "red" }}>Characters</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{!store.peoples
					? "Cargando"
					: store.peoples.map((item, index) => {
							//console.log(item);
							return (
								<div key={index}>
									<PeopleCard
										image={item.image}
										name={item.name}
										hair_color={item.hair_color}
										gender={item.gender}
										eye_color={item.eye_color}
										height={item.height}
										id={index}
									/>
								</div>
							);
					  })}
			</div>
		</div>
	);
};
