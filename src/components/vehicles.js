import React, { useContext, useEffect } from "react";
import { Context } from "../store";




export default function (props) {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getVehicles();

    }, [])

    return (
        <>
            <h1 className="title mt-1">Vehicles</h1>
            <div className="peopleDiv row flex-row flex-nowrap">
                {store.vehicles.map((vehicle, index) =>
                    <div key={index} className="card col-3">
                        <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <p>Name :{vehicle.name}</p>
                            <p>Model :{vehicle.model}</p>
                            <p>Vehicle class: {vehicle.vehicle_class}</p>
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