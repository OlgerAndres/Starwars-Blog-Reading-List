import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	// const showFavorites = store.showFavorites.map((item, index) => {
	// 	return;

	// 	<a className="dropdown-item" href="#" key={index} />;
	// });
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
					style={{ with: "60px", height: "60px", borderRadius: "60%" }}
				/>
				<Link to="/" />
			</a>
			<div className="dropdown">
				<button
					className="btn btn-info dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <span className="badge badge-light">{store.favorites.length}</span>
				</button>

				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((item, index) => {
						return (
							<li key={index} className="dropdown-item" href="#">
								{item}
								<i
									className="fas fa-trash-alt float-right"
									onClick={() => actions.deleteFavorites(index)}
								/>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
