import React from "react";
import Input from "./input";
import Btn from "./btn";
import './Main.scss';
const Main =(props)=> {
    return (
<div>
 <div className="Main">
    <h2>Login</h2>
    <p>Welcome back! Please enter your details.</p>
    </div> 
    <Input
    type="email"
    placeholder="Email Address"
    />
    <Input className="sec-input"
    type="password"
    placeholder="Password"
    />
    <div className="forgot-pass">Forgot Password?</div>
    <Btn 
    lable="LOGIN"/>
    
</div>
    );
}
export default Main;