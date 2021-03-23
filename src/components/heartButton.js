import React, { useContext,useState,useEffect} from "react";
import { Context } from "../store/index.js";

export default function(props) {
    const {store, actions} = useContext(Context);

    const [like, setLike] = useState("far fa-heart")

    const handleClick = () => {
        if (props.name in store.favorites) {
            setLike("fas fa-heart");
        }
        if (like == "far fa-heart") {
            setLike("fas fa-heart");
            actions.addFavorites(props.name);
        } else {
            setLike("far fa-heart");
            actions.deleteFavorites(props.name);
        }
    };


    return (
        <button onClick= {handleClick} type="button" className="btn btn-outline-warning"><i className={like}></i></button>
    )
}
