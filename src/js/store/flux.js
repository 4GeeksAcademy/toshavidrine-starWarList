const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: [],
		
		},
		actions: {
		

			

			fetchPeople: async () => {
				
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/`);
					const data = await response.json();
					setStore({people: data.results });
				} catch (error) {
					console.error(`Error fetching people:`, error);
				}
			},

			fetchPlanets: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/`);
					const data = await response.json();
					setStore({planets: data.results });
				} catch (error) {
					console.error(`Error fetching planets:`, error);
				}
			},

			fetchStarships: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/starships/`);
					const data = await response.json();
					setStore({starships: data.results });
				} catch (error) {
					console.error(`Error fetching starships:`, error);
				}
			},

		

			addFavorites: (name, uid, type) => {
				const store = getStore();
				const newFavorite = { name, uid, type }; 
				const newFavorites = [...store.favorites, newFavorite];
				setStore({ favorites: newFavorites });
			},

			removeFavorites: (name) => {
				const store = getStore();
				const newFavorites = store.favorites.filter(favorite => favorite.name !== name);
				setStore({ favorites: newFavorites });
			},

			

		
		}
	};
};

export default getState;
n