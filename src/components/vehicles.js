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
            <div className="row peopleDiv overflow-auto">
                {store.vehicles.map((vehicle, index) =>
                    <div key={index} className="card m-2">
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