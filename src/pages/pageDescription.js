import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store";


export default function (props) {

    const { store, actions } = useContext(Context)
    const [detail, setDetail] = useState({})
    const params = useParams()

    useEffect(() => {
        if (props.type == "characters") setDetail(store.people[params.id])
        if (props.type == "planets") setDetail(store.planets[params.id])
        if (props.type == "vehicles") setDetail(store.vehicle[params.id])
    }, [])

    console.log (params.id)

    let test = params.id;

    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <div className="detail card m-5" >
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://i.pinimg.com/originals/1d/cf/f7/1dcff7f4e1613d9e071a99ef8725402a.jpg" className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title"> {detail.name}</h5>
                                    <p className="card-text"> text's card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider bg-warning"></div>

                    {props.type == "characters" ? (

                        <div className="row d-flex m-3">
                            <div className="col-2 text-warning">Name: {detail.name}</div>
                            <div className="col-2 text-warning">Birth Year: {detail.birth_year}</div>
                            <div className="col-2 text-warning">Gender: {detail.gender}</div>
                            <div className="col-2 text-warning">Height: {detail.height}</div>
                            <div className="col-2 text-warning">Skin Color: {detail.skin_color} </div>
                            <div className="col-2 text-warning">Eye Color: {detail.eye_color}</div>
                    </div> )
                        : props.type == "planets" ? (
                        <div className="row d-flex m-3">
                            <div className="col-2 text-warning">Name:  {detail.name}</div>
                            <div className="col-2 text-warning">Climate: {detail.climate}</div>
                            <div className="col-2 text-warning">Population: {detail.population}</div>
                            <div className="col-2 text-warning">Orbital Period: {detail.orbital_period} </div>
                            <div className="col-2 text-warning">Rotation Period: {detail.rotation_period} </div>
                            <div className="col-2 text-warning">Diameter: {detail.diameter}</div>
                        </div> )
                        : (
                        <div>
                            <div className="col-2 text-warning">Name:  {detail.name}</div>
                            <div className="col-2 text-warning">Model: {detail.model}</div>
                            <div className="col-2 text-warning">Vehicle class: {detail.vehicle_class}</div>
                        </div>)
                    }

                    {/* // aqui tengo que hacer dos componentes si quiero, pero pruebo hacerlo de esta manera a ver que tal */}
                </div>
                <div className="d-flex justify-content-around">
                    <Link to="/">
                        <button className="btn btn-outline-primary"> back</button>
                    </Link>
                    <button className="btn btn-outline-primary"> add fav</button>
                </div>
            </div >
        </>
    )
}