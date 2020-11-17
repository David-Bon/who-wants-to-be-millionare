import React from "react";
import "./GamePage.scss"
import {connect} from "react-redux";
import GamePage from "./GamePage";

class GamePageContainer extends React.Component {

    render() {
        const {questions} = this.props
        return (
            <GamePage questions={questions}/>
        )
    }
}

const mapStateToProps = (state) => ({
    questions: state.Reducer.questions
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer)