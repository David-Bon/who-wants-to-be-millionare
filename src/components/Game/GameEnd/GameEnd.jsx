import React from "react";
import hand from "../../../assets/hand1.png"
import "./GameEnd.scss"
import "../GameStart/GameStart.scss"

const GameEnd = ({totalScore, setGameIsEnd, setCurrentQuestion}) => {
    const handleRestartButton = () => {
        setGameIsEnd(false)
        setCurrentQuestion(0)
    }

    return (
        <div className="endWrapper">
            <img src={hand} alt="Hand pic" className="handStart"/>
            <div className="startSection">
                <span className="textStart"><span className="tScore">Total score:</span>${totalScore} earned</span>
                <button className="btnStart" onClick={handleRestartButton}>Try again</button>
            </div>

        </div>
    )
}

export default GameEnd