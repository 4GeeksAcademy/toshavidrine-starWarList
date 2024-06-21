import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

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
  </div>)
}
