import React, {useState} from "react";
import classNames from "classnames"
import GameEnd from "./GameEnd/GameEnd";
import GameStart from "./GameStart/GameStart";

const GamePage = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [totalScore, setTotalScore] = useState(0)
    const [isDisabled, setDisableStatus] = useState(false)
    const [gameIsEnd, setGameIsEnd] = useState(false)
    const [gameIsStarted, setGameStart] = useState(false)
    const [hamburger, setHamburgerStatus] = useState(false)
    const handleAnswerButtonClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1
        setDisableStatus(true)
        setTimeout(() => {
            if (nextQuestion < questions.length && isCorrect) {
                setCurrentQuestion(nextQuestion)
                setTotalScore(totalScore + questions[nextQuestion].score)
            } else setGameIsEnd(true)
            setDisableStatus(false)
        }, 2300)
    }
    const handleToggle = () => {
        setHamburgerStatus(!hamburger);
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (gameIsEnd) {
        return <GameEnd totalScore={totalScore} setTotalScore={setTotalScore} setGameIsEnd={setGameIsEnd}
                        setCurrentQuestion={setCurrentQuestion}/>
    } else if (!gameIsStarted) {
        return <GameStart setGameStart={setGameStart}/>
    } else
        return (
            <div className="mainContainer">
                <div onClick={handleToggle} className="menu-icon-wrapper">
                    <div className={`menu-icon ${hamburger ? "menu-icon-active" : ""}`}>{}</div>
                </div>
                <div key={questions.qId} className={`quiz ${hamburger ? "mobile-active" : ""}`}>
                    <p className="QuestionText">{questions[currentQuestion].qDescription}</p>

                    <div className="ButtonsSection">
                        {
                            questions[currentQuestion].answerOptions.map((i) => {
                                let btnAnswerClass = classNames({
                                    AnswerButton: true,
                                    "correct": i.isCorrect === true,
                                    "incorrect": i.isCorrect === false
                                })
                                return (
                                    <button disabled={isDisabled}
                                            className={isDisabled ? btnAnswerClass : "AnswerButton"}
                                            onClick={() => handleAnswerButtonClick(i.isCorrect)}>
                                    <span>
                                        {i.answerText}
                                    </span>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`reachedScore ${hamburger ? "mobile-active" : ""}`}>
                    {
                        questions.map((i) => {
                            let scoreClass = classNames({
                                scoreValue: true,
                                "active": i.qId === currentQuestion + 1,
                                "passed": i.qId < currentQuestion + 1
                            })
                            return (
                                <div className={scoreClass} key={i.qId}>${numberWithCommas(i.score)}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default GamePage