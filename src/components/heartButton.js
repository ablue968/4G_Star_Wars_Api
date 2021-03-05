import React, { useContext} from "react";
import { Context } from "../store/index.js";

export default function(props) {
    const {store, actions} = useContext(Context);
    
    const handleClick = () => {
         actions.addFavorites(props.name)
     }
     
    return (
        <button onClick= {handleClick} type="button" className="btn heart"><i className="corazon far fa-heart">♥</i></button>
    )
}