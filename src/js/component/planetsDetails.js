import { Link, useParams } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetsCardDatails } from "./planetsCardDetails";

export const PlanetsDetails = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	return (
		<div className="container-fluid characters mt-5">
			{!store.planets
				? "Cargando"
				: store.planets.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<PlanetsCardDatails
										name={item.name}
										population={item.population}
										terrain={item.terrain}
										diameter={item.diameter}
										gravity={item.gravity}
										id={index}
									/>
								</div>
							);
						}
				  })}
		</div>
	);
};
