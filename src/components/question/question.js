import React from 'react'
import "./question.css"

const Question = (props) => {
    return (
        <div className="Content">
            <h1>Question!</h1>
            <p>{props.question}</p>
        </div>
    )
}
export default Question