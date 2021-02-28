import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store";


export default function (props) {

    const { store, actions } = useContext(Context)
    const [detail, setDetail] = useState({})
    const params = useParams()

    useEffect(() => {
        if (props.type == "character") setDetail(store.people[params.name])
        if (props.type == "planet") setDetail(store.planets[params.name])
        if (props.type == "vehicle") setDetail(store.vehicle[params.name])
    }, [])

    return (
        <div className="container">
            <div className="jumbotron">
                <div className="detail card m-5" >
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://i.pinimg.com/originals/1d/cf/f7/1dcff7f4e1613d9e071a99ef8725402a.jpg" className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {params.name}</h5>
                                <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="divider bg-warning"></div>

                {props.tipo == "people" ?

                    <div className="row d-flex m-3">
                        <div className="col-2 text-warning">Name: {detail.name}</div>
                        <div className="col-2 text-warning">Birth Year: {detail.birth_year}</div>
                        <div className="col-2 text-warning">Gender: {detail.gender}</div>
                        <div className="col-2 text-warning">Height: {detail.height}</div>
                        <div className="col-2 text-warning">Skin Color: {detail.skin_color} </div>
                        <div className="col-2 text-warning">Eye Color: {detail.eye_color}</div>
                    </div>

                    :
                    <div className="row d-flex m-3">
                        <div className="col-2 text-warning">Name:  {detail.name}</div>
                        <div className="col-2 text-warning">Climate: {detail.climate}</div>
                        <div className="col-2 text-warning">Population: {detail.population}</div>
                        <div className="col-2 text-warning">Orbital Period: {detail.orbital_period} </div>
                        <div className="col-2 text-warning">Rotation Period: {detail.rotation_period} </div>
                        <div className="col-2 text-warning">Diameter: {detail.diameter}</div>
                    </div>
                }

                {/* // aqui tengo que hacer dos componentes si quiero, pero pruebo hacerlo de esta manera a ver que tal */}
            ) */}
            </div>
        </div >
    )
}