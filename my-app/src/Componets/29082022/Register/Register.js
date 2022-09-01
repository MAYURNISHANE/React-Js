import React from "react";
import Text from "../Login/Main/Text";
import Input from "../Login/Main/input";
import Btn from "../Login/Main/btn";
import './Register.scss';
const Register = (props) => {
    return (
        <div className="reg">
            <Text h2="Register"
                p="Please enter your details."
            />
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