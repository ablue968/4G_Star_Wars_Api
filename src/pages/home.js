import React from "react";
import { Link } from "react-router-dom";
import Planets from "../components/planets.js"
import Characters from "../components/characters.js"


import { Context } from "../store";

export default function(props) {

    return (
        <div className="container">
            <div className="jumbotron">
                <Characters />
                <Planets />
            </div>
        </div>
    )
}