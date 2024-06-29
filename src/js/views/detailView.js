import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailView = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [item, setItem] = useState(null);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/" + params.category + "/" + params.uid)
			.then((response) => response.json())
			.then((data) => setItem(data.result))
			.catch((error) => console.error(error));
	}, [params]);

	return (
		<div className="jumbotron">
			<div className="d-flex">
				<div>
					<img
						src={
							"https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/" +
							(params.category === "people" ? "characters" : params.category === "planets" ? "planets" : "starships") +
							"/" +
							params.uid +
							".jpg"
						}
						alt={item?.properties.name}
					/>
				</div>
				<div>
					<h2>{item?.properties.name}</h2>
					<p>
						{item?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque tortor, interdum elementum neque non, vulputate egestas lectus. Integer blandit mi mattis erat porta imperdiet. Curabitur nec nunc at dui condimentum imperdiet. Nunc sed augue egestas, interdum lectus vitae, pretium mauris. Nam tempor dapibus nisi nec congue. Nullam nunc mauris, varius eget semper sit amet, vulputate id felis. Donec cursus eleifend lorem non sagittis. Cras luctus sodales vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus tincidunt magna at lacus tincidunt maximus. Vestibulum vitae ligula accumsan, dapibus ligula sit amet, ultrices orci. Proin rhoncus consectetur fermentum. Aliquam finibus pretium sapien, in fringilla nisl finibus vel. Sed condimentum justo non dui malesuada posuere. Sed et erat ut augue molestie tincidunt eget non lacus."}
					</p>
				</div>
			</div>
			<div className="row">
				{params.category === "people" && (
					<div className="col">
						<h5>Gender:</h5>
						<p>{item?.properties.gender}</p>
					</div>
				)}
				{params.category === "planets" && (
					<div className="col">
						<h5>Diameter:</h5>
						<p>{item?.properties.diameter}</p>
					</div>
				)}
				{params.category === "starships" && (
					<div className="col">
						<h5>Manufacturer:</h5>
						<p>{item?.properties.manufacturer}</p>
					</div>
				)}
				{/* Add more properties here as needed */}
			</div>
		</div>
	);
};
