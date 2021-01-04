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
            <div className="peopleDiv row flex-row flex-nowrap ">
                {store.people.map((people, index) =>
                    <div key={index} className="card col-3">
                        <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <p>Name :{people.name}</p>
                            <p>Gender :{people.gender}</p>
                            <p>Eye color: {people.eye_color}</p>
                            <div className="d-flex justify-content-around">
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
