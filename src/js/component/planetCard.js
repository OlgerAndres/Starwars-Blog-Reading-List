import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function PlanetCard(props) {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://laverdadnoticias.com/__export/1577473483235/sites/laverdad/img/2019/12/27/star-wars-fondo-de-pantalla-wallpaper.jpg_1183029055.jpg"
				/>

				<div className="card-body">
					<h5 className="card-title text-xl-center" style={{ color: "blue" }}>
						Name: {props.name}
					</h5>
					<p className="card-text text-lg-center">Terrain: {props.terrain}</p>
					<p className="card-text text-lg-center">Population: {props.population}</p>
					<p className="card-text text-lg-center">Diameter: {props.diameter}</p>
					<p className="card-text text-lg-center">Gravity: {props.gravity}</p>
					<a href="#" className="btn btn-primary mr-5">
						Learn More!
					</a>
					<a href="#" className="btn btn-primary ml-3" onClick={e => handleOnClick(e)}>
						<i className="fas fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
}

PlanetCard.propTypes = {
	name: PropTypes.string,
	population: PropTypes.number,
	terrain: PropTypes.string,
	diameter: PropTypes.number,
	gravity: PropTypes.string
};
