import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store"

export default function(props) {
    const { store, actions } = useContext(Context);
    const [ListFav, setListFav] = useState([])

    useEffect(()=>{
        setListFav(actions.getFavorites())
    }, [])

    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">
    <div className="ml-5">
        <Link to="/"><img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" width="60" height="40" alt="456"/></Link>
    </div>
    <div className="pr-5">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle btn btn-primary my-2 my-sm-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Favorites
                    </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {actions.getFavorites().map((name, index) => {
                                    return (<a className="dropdown-item p-0 m-0" key={index} href="#">{name}<button onClick={() => actions.deleteFavorites(name)} type="button" className="close m-0" aria-label="Close">
                                        <span className="m-0 pr-3" aria-hidden="true">X</span>
                                    </button></a>)
                                })
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
</nav>
    )
}