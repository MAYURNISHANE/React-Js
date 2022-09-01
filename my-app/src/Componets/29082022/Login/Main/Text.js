import React from "react";
import './Main.scss';
const Text = (props) => {
    return (
        <div>
            <h2 className="h2">{props.h2}</h2>
            <p className="p">{props.p}</p>
        </div>
    );
}
export default Text;