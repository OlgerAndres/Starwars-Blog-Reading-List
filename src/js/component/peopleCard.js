import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function PeopleCard(props) {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src="" />

				<div className="card-body">
					<h5 className="card-title text-xl-center">Name: {props.name}</h5>
					<p className="card-text text-lg-center">Gender: {props.gender}</p>
					<p className="card-text text-lg-center">Hair Color: {props.hair_color}</p>
					<p className="card-text text-lg-center">Eyes Color: {props.eye_color}</p>
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

PeopleCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	img: PropTypes.string
};
