import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function PeopleCardDatails(props) {
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
					<p className="asize">
						Name
						<br />
						{props.name}
					</p>
				</div>

				<div className="col-2">
					<p className="asize">
						Gender
						<br />
						{props.gender}
					</p>
				</div>

				<div className="col-2">
					<p className="asize">
						Hair Color
						<br />
						{props.hair_color}
					</p>
				</div>

				<div className="col-2">
					<p className="asize">
						Eye Color
						<br />
						{props.eye_color}
					</p>
				</div>

				<div className="col-2">
					<p className="asize">
						Heigth
						<br />
						{props.height}
					</p>
				</div>
			</div>
		</div>
	);
}

PeopleCardDatails.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	img: PropTypes.string,
	height: PropTypes.string,
	id: PropTypes.number
};
