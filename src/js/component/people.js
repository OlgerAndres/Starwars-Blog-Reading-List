import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const People = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1 className="display-5 text-center mt-5 text-primary">Characters</h1>
		</div>
	);
};
