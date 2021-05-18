import React from "react";
import './View.css';
import A from "./card1.jpg";

const View = () => {
    return (
        <>
        <div className="parent_view">
            <div className="main_view1">
                <img src={A} />
            </div>
            <div className="main_view2"></div>
            <div className="main_view3"></div>
        </div>
        </>
    )
}

export default View;