import React, { useContext} from "react";
import { Context } from "../store/index.js";

export default function(props) {

    const {store, actions} = useContext(Context);

    const listFav = store.favorites

    const handleClick = () => {
        listFav.has(props.name) ? actions.deleteFavorites(props.name) : actions.addFavorites(props.name)
    };


    return (
        <button onClick= {handleClick} type="button" className="btn btn-outline-warning"><i className={ listFav.has(props.name) ? "fas fa-heart" : "far fa-heart" } ></i></button>
    )
}
