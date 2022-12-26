import React from "react";
import "../styles/App.css"

const Card = (props) =>{
    return(
        <div className="cardd">
            {props.currData.desc}
        </div>
    )
}

export default Card