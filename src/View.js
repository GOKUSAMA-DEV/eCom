import React from "react";
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import './View.css';

const View = () =>{
    return(
        <>
        <div className="container">
            <div className="card1">
            <img src={card1} />
            </div>
            <div className="card2">
            <img src={card2} />
            </div>
            <div className="card3">
            <img src={card3} />
            </div>
        </div>
        </>
    )
}

export default View;