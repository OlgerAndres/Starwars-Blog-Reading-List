import { Link, useParams } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { PeopleCardDatails } from "./peopleCardDetails";

export const PeopleDetails = () => {
	const { store, actions } = useContext(Context);
    const { id } = useParams();
    useEffect(function() {
		actions.loadDetails(props.url);
		console.log("Detalles", store.people);
	}, []);
	return (
		<div className="container-fluid characters mt-5">
			{!store.peoples
                ? "Cargando"
				: store.peoples.map((item, index) => {
                    if(id===index){
                          
						return (
							<div key={index}>
								<PeopleCardDatails
									name={item.name}
									hair_color={item.hair_color}
									gender={item.gender}
									heigth={item.heigth}
                                    id={index}
                                    url={item.url}
								/>
							</div>
						); 
                    }
				  })}
		</div>
	);
};
