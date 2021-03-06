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

    return (
        <>
            <div className="container">
                <div className="jumbotron row mx-auto">
                    <div className="col-7 m-auto p-0">
                        <div className="row d-flex justify-content-center">
                            <div className="card">
                                <img src="https://i.pinimg.com/originals/1d/cf/f7/1dcff7f4e1613d9e071a99ef8725402a.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"> {detail.name}</h5>
                                        <p className="card-text"> text's card</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column m-auto">
                            {props.type == "characters" ? (
                                <div>
                                    <p>Name: {detail.name}</p>
                                    <p>Birth Year: {detail.birth_year}</p>
                                    <p>Gender: {detail.gender}</p>
                                    <p>Height: {detail.height}</p>
                                    <p>Skin Color: {detail.skin_color} </p>
                                    <p>Eye Color: {detail.eye_color}</p>
                                </div> )
                                : props.type == "planets" ? (
                                <div className="row d-flex">
                                    <div className="col-2">Name:  {detail.name}</div>
                                    <div className="col-2">Climate: {detail.climate}</div>
                                    <div className="col-2">Population: {detail.population}</div>
                                    <div className="col-2">Orbital Period: {detail.orbital_period} </div>
                                    <div className="col-2">Rotation Period: {detail.rotation_period} </div>
                                    <div className="col-2">Diameter: {detail.diameter}</div>
                                </div> )
                                : (
                                <div className="row d-flex">
                                    <div className="col-2">Name:  {detail.name}</div>
                                    <div className="col-2">Model: {detail.model}</div>
                                    <div className="col-2">Vehicle class: {detail.vehicle_class}</div>
                                </div>)
                            }
                    </div>
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