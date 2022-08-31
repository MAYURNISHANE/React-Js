import React from "react";
import './Card.scss';
const Card =(props)=> {
    return (
<div className="section">
    <h2>{props.title}</h2>
    <img src={props.burgerimg}/>
    <p>{props.para}</p>
    
</div>
    );
}
export default Card;