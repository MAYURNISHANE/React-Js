import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import './Login.scss';
const Login = (props) => {
    return (
        <div>
            <div className="login">
                <Header />
                <Main />
                <Footer />
            </div>

        </div>
    );
}
export default Login;