import React from 'react'
import "./answer.css"

const Answer = (props) => {
    let answer = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li className={props.correctAnswer===qAnswer ? "correct" : props.clickedAnswer===qAnswer ? "incorrect" : ""}
            onClick={() => props.checkAnswer(qAnswer)}
                key={qAnswer}>
                {props.answer[qAnswer]}</li>

        )); 
        return (
            <div className="clickedanswer">
            <ul  disabled={props.clickedAnswer ? true : false} className="Answers">
                {answer}
            </ul>
            <div>
                {props.correctAnswer ? "Correct answer!" : props.clickedAnswer ? "incorrect Answer!" : ""}
            </div>
            </div>
        )
}
export default Answer