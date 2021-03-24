import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "./planetCard";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	console.log("data planets", store.planets);
	return (
		<div className="container-fluid characters mt-5">
			<h1 style={{ color: "red" }}>Planets</h1>
			<div className="row">
				{!store.planets
					? "Cargando"
					: store.planets.map((item, index) => {
							return (
								<div key={index}>
									<PlanetCard
										name={item.name}
										population={item.population}
										terrain={item.terrain}
										diameter={item.diameter}
										gravity={item.gravity}
									/>
								</div>
							);
					  })}
			</div>
		</div>
	);
};
