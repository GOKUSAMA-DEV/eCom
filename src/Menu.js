import React from "react";
import "./Menu.css";
import MenuData from "./MenuData";

const Menu = () => {
    return (
        <>
        <div className="parent">
            {
                MenuData.map((val, ind) => (
                    <div className="main_card" key={ind}>
                        <div className="img_card">
                            <img src={val.imgsrc} />
                        </div>
                        <div className="card_name">
                            <h1>{val.cardname}</h1>
                        </div>
                        <div className="description">
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))
            }
            {/* <div className="main_card">
            <div className="img_card">
                <img src={A} />
            </div>
            <div className="card_name">
                <h1>Simple</h1>
            </div>
            <div className="description">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div> */}
        </div>
        </>
    )
}

export default Menu;