import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {Card} from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (<div className="container">
    <div>
      <h1>People</h1>
      <div className="row">
        {store.people.map((person, index) => (
          <div className="col"key={index}>
          <Card key={index} item={person} category="people" />
          </div>))}
      </div>
    </div>
    <div>
      <h1>Planets</h1>
      <div className="row">
        {store.planets.map((planet, index) => (
          <div className="col"key={index}>
          <Card key={index} item={planet} category="planets" />
          </div>))}
      </div>
    </div>
    <div>
      <h1>Starships</h1>
      <div className="row">
        {store.starships.map((starship, index) => (
          <div className="col"key={index}>
          <Card key={index} item={starship} category="starships" />
          </div>))}
      </div>
    </div>
  </div>)
}
