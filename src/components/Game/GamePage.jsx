import React, {useState} from "react";
import classNames from "classnames"

const GamePage = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isDisabled, setDisableStatus] = useState(false)
    const [totalScore, setTotalScore] = useState(0)
    const handleAnswerButtonClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1
        setDisableStatus(true)
        setTimeout(() => {
            if (nextQuestion < questions.length && isCorrect) {
                setCurrentQuestion(nextQuestion)
                setTotalScore(totalScore + questions[currentQuestion].score)
            } else alert("you earned " + totalScore + "$")
            setDisableStatus(false)
        }, 3000)
    }
    return (
        <div className="mainContainer">
            <div key={questions.qId} className="quiz">
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
                                <button disabled={isDisabled} key={i.aId}
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
            <div className="reachedScore">
                {
                    questions.map((i) => {
                        let scoreClass = classNames({
                            scoreValue: true,
                            "active": i.qId === currentQuestion + 1,
                            "passed": i.qId < currentQuestion + 1
                        })
                        return (
                            <div className={scoreClass} key={i.qId}>{i.score}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GamePage