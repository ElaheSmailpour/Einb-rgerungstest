import React from 'react'
import "./answer.css"

const Answer = (props) => {
    let answer = Object.keys(props.answer)
    .map((qAnswer,i)=>(
      <li key={qAnswer}>{props.answer[qAnswer]}</li>

    ));   return (
        <ul className="Answers">
            {answer}
        </ul>
    )
}
export default Answer