import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store";


export default function(props) {
    const { store, actions } = useContext(Context)
    const history = useHistory();

    useEffect(()=>{
        actions.getPlanets();
    },[])
    
    return (
        <>
            <h1 className="title mt-1">Planets</h1>
            <div className="peopleDiv row flex-row flex-nowrap">
                {store.planets.map((planet, index) =>
                    <div key={index} className="card col-3">
                        <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <p>Name :{planet.name}</p>
                            <p>Climate :{planet.climate}</p>
                            <p>Population: {planet.population}</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-outline-primary" onClick={() => history.push(`/planets/${planet.name}`)}>Learn more!</button>
                                <button className="btn btn-outline-warning">♡</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </> 
);
}