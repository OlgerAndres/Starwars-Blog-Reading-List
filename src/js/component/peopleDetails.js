import { Link, useParams } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { PeopleCardDatails } from "./peopleCardDetails";

export const PeopleDetails = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	return (
		<div className="container-fluid characters mt-5">
			{!store.peoples
				? "Cargando"
				: store.peoples.map((item, index) => {
						if (id == index) {
							return (
								<div key={index}>
									<PeopleCardDatails
										name={item.name}
										hair_color={item.hair_color}
										gender={item.gender}
										height={item.height}
										eye_color={item.eye_color}
										id={index}
									/>
								</div>
							);
						}
				  })}
		</div>
	);
};
