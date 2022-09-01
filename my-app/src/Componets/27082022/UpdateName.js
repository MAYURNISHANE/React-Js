import React, { useState } from "react";
const UpdateName = () => {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    const UpdateVal = (event) => {
        setName(event.target.value)
    }
    const showData = () => {
        setShow(!show)
    }
    return (
        <div>
            <div>
                <input type="text" onChange={(event) => UpdateVal(event)} />
                <div>{name}</div><br />
                <button onClick={() => showData()}>show</button>
                {show && <div>show data on click show data on click show data on click show data on click show data on click</div>}
            </div>
        </div>
    );
}
export default UpdateName;