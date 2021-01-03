import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store";




export default function(props) {
    const { store, actions } = useContext(Context)

    useEffect(()=>{
        actions.getPlanets();
    },[])
    
    return (
        <>
            <h1 className="title mt-1">Planets</h1>
            <div className="row peopleDiv overflow-auto">
                {store.planets.map((planet, index) =>
                    <div key={index} className="card m-2">
                        <div className="card-body">
                            <p>Name :{planet.name}</p>
                            <p>Climate :{planet.climate}</p>
                            <p>Population: {planet.population}</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-outline-primary">Learn more!</button>
                                <button className="btn btn-outline-warning">♡</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </> 
    
);
}