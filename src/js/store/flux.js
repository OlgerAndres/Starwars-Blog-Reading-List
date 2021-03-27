const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			people: {},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeoples: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peoples: data.results });
				//console.log("Desde flux", store.peoples);
			},

			loadDetails: async url => {
				const response = await fetch(url);
				const data = await response.json();
				setStore({ people: data.results });
				console.log("data", data);
				//console.log("Desde flux", store.peoples);
			},

			loadPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results });
			},

			addFavorites: fav => {
				setStore({ favorites: getStore().favorites.concat(fav) });
			},

			deleteFavorites: index => {
				const newFavorites = getStore().favorites.filter((item, indice) => {
					return indice !== index;
				});
				setStore({ favorites: newFavorites });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
