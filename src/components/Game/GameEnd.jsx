import React from "react";
import hand from "../../assets/hand1.png"

const GameEnd = ({totalScore}) => {
    return (
        <div>
            <img src={hand} alt="Hand pic" className="hand"/>
            <span>Total score:</span>
            <span>${totalScore} earned</span>
            <button>Try again</button>
        </div>
    )
}

export default GameEnd