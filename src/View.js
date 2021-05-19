
import React from "react";
import './View.css';

const View = () => {
    return (
        <>
            <div className="parent_view">
                <div className="main_view1">
                    <h1>Welcome to Our Page!</h1>
                    <p>Anything! Everything! Anytime!</p>
                    <p>Trust Based!</p>
                </div>
                <div className="main_view2" style={{ backgroundColor: "rgb(100, 238, 82)" }}>
                    <h1>Welcome to Our Page!</h1>
                    <p>Anything! Everything! Anytime!</p>
                    <p>Trust Based!</p>
                </div>
                <div className="main_view3" style={{ backgroundColor: "rgb(212, 89, 67)" }}>
                    <h1>Welcome to Our Page!</h1>
                    <p>Anything! Everything! Anytime!</p>
                    <p>Trust Based!</p>
                </div>
                <div className="main_view4" style={{ backgroundColor: "rgb(196,158,211)" }}>
                    <h1>Welcome to Our Page!</h1>
                    <p>Anything! Everything! Anytime!</p>
                    <p>Trust Based!</p>
                </div>
                
            </div>
        </>
    )
}

export default View;