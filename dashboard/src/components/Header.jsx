import React from "react";
import logo from "../assets/images/logo.svg";


function Header (){
    return(
        <div>
            <div className="logo">
                <img src={logo} alt="logo_digital4"/>
            </div>
            <div className="backContainer">
            <div className="backButtonContainer">
                <hr/>
            </div>
            <div className="backButtonContainer"><button className="btnPrincipal" type="submit"> <a href="http://localhost:3030/">VOLVER AL SITIO</a></button></div>
            <div className="backButtonContainer">
                <hr/>
            </div>
            </div>
        </div>
    )
}

export default Header;
