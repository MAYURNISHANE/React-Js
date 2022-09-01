import React from "react";
import './Main.scss';
const Btn =(props)=> {
    return (
 <div>
    <button className="login-btn">{props.lable}</button> 
</div>
    );
}
export default Btn;