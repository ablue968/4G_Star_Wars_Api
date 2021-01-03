import React, { useContext, useEffect } from "react";
import { Context } from "../store";




export default function (props) {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getPeople();

    }, [])

    return (
        <>
            <h1 className="title mt-1">Characters</h1>
            <div className="row peopleDiv overflow-auto">
                {store.people.map((people, index) =>
                    <div key={index} className="card m-2">
                        <div className="card-body">
                            <p>Name :{people.name}</p>
                            <p>Gender :{people.gender}</p>
                            <p>Eye color: {people.eye_color}</p>
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