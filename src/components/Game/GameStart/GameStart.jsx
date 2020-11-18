import React from "react";
import hand from "../../../assets/hand1.png";
import "./GameStart.scss"

const GameStart = ({setGameStart}) => {
    return (
        <div className="startWrapper">
            <img src={hand} alt="Hand pic" className="handStart"/>
            <div className="startSection">
                <p className="textStart">Who wants to be a millionaire?</p>
                <button className="btnStart" onClick={() => setGameStart(true)}>Start</button>
            </div>
        </div>
    )

}

export default GameStart