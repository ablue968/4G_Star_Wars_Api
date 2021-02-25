import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store";


export default function(props) {   

const { store, actions } = useContext(Context)
const [detail, setDetail] = useState({})
const params = useParams()

const character = ()=> <p>soy un personaje</p>

const planet = ()=><p>soy un planeta</p>

const vehicle = ()=><p>soy un vehicle</p>


useEffect(()=>{
    if (props.type == "character")setDetail(store.people[params.id])
    if (props.type == "planet")setDetail(store.planets[params.id])
    if (props.type == "vehicle")setDetail(store.vehicle[params.id])
}, [])

    return (
        <div className="container">
            <div className="jumbotron">
                {character}
            </div>
        </div>
    )
}