import React from "react";
import Text from "./Text";
import Input from "./input";
import Btn from "./btn";
import './Main.scss';
const Main = (props) => {
    const change =() => {alert("forgot passward")}
    return (
        <div>
            <div className="Main">
                <Text h2="Login"
                    p="Welcome back! Please enter your details."
                />

            </div>
            <Input
                type="email"
                placeholder="Email Address"
            />
            <Input className="sec-input"
                type="password"
                placeholder="Password"
            />
            <div className="forgot-pass" onClick={change}>Forgot Password?</div>
            <Btn
                lable="LOGIN" />

        </div>
    );
}
export default Main;