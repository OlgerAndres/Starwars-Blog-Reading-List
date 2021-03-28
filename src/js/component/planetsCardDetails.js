import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function PlanetsCardDatails(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card">
				<img
					src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
					className="card-img-top"
					alt="Dark Vader"
					style={{ height: "550px", with: "350px" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						Star Wars is an American epic space opera media franchise created by George Lucas, which began
						with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.
					</p>
				</div>
			</div>

			<div className="row text-justify" style={{ marginTop: "20px", borderTop: "2px solid" }}>
				<div className="col-2">
					<p className="asize" style={{ color: "red" }}>
						Name
						<br />
						{props.name}
					</p>
				</div>

				<div className="col-2">
					<p className="asize" style={{ color: "red" }}>
						Population
						<br />
						{props.population}
					</p>
				</div>

				<div className="col-2">
					<p className="asize" style={{ color: "red" }}>
						Terrain
						<br />
						{props.terrain}
					</p>
				</div>

				<div className="col-2">
					<p className="asize" style={{ color: "red" }}>
						Diameter
						<br />
						{props.diameter}
					</p>
				</div>

				<div className="col-2">
					<p className="asize" style={{ color: "red" }}>
						Gravity
						<br />
						{props.gravity}
					</p>
				</div>
			</div>
		</div>
	);
}

PlanetsCardDatails.propTypes = {
	name: PropTypes.string,
	population: PropTypes.number,
	terrain: PropTypes.string,
	diameter: PropTypes.number,
	gravity: PropTypes.string,
	id: PropTypes.number
};
