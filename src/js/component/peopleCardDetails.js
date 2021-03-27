import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export function PeopleCardDatails(props) {
	const { store, actions } = useContext(Context);
	useEffect(function() {
		actions.loadDetails(props.url);
		console.log("Detalles", store.people);
	}, []);
	return (
		<div className="container">
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						<img src="" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Name: {props.name}</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>

			<table className="table" />
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Gender</th>
					<th scope="col">Heigth</th>
					<th scope="col">Hair Color</th>
				</tr>
			</thead>

			<tbody />
			<tr>
				<th scope="row" />
				<td>{props.name}</td>
				<td>{props.gender}</td>
				<td>{props.height}</td>
				<td>{props.hair_color}</td>
			</tr>
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
	id: PropTypes.number,
	url: PropTypes.string
};
