import React from "react";
import Input from "../Login/Main/input";
import Btn from "../Login/Main/btn";
import './Register.scss';
const Register = (props) => {
    return (
        <div className="reg">
            <h2>Register</h2>
            <p>Welcome back! Please enter your details.</p>

            <Input
                type="text"
                placeholder="Enter Your Name"
            />

            <Input
                type="email"
                placeholder="Enter Your E-mail"
            />

            <Input
                type="number"
                placeholder="Enter Your Number"
            />

            <Input
                type="text"
                placeholder="Enter Your Address"
            />

            <Btn
            lable="Register" />

        </div>
    );
}
export default Register;