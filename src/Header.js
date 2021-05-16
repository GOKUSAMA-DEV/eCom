import React from "react";
import { Link } from "react-router-dom";
import A from "./A.png"

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <Link to="/"><img src={A} /></Link>
            </div>
            <div className="header_title">
                <h1>Samosa</h1>
            </div>
            <div className="header_menu">
                <Link to="/menu"><span>MENU</span></Link>
            </div>
        </div>
    )
}

export default Header;