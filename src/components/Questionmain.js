import React, { Component } from 'react'
import Question from "./question/question"
import Answer from "./answer/Answer"
export default class Quiz extends Component {

    state = {
        questions: {
            1: "Welches Land ist ein Nachbarland von Deutschland?",
            2: "Zu welcher Versicherung gehört die Pflegeversicherung?",
            3: "Welche Farben hat die deutsche Flagge?"
        },
        answers: {
            1: {
                1: "Finnland",
                2: "Dänemark",
                3: "Norwegen",
                4: "Schweden"
            },
            2: {
                1: "Sozialversicherung",
                2: "Unfallversicherung",
                3: "Hausratversicherung",
                4: "Haftpflicht- und Feuerversicherung"
            },
            3: {
                1: "schwarz-rot-gold",
                2: "rot-weiß-schwarz",
                3: "schwarz-rot-grün",
                4: "schwarz-gelb-rot"
            },
            correctAnswers: {
                1: "2",
                2: "1",
                3: "1"
            },
            
            correctAnswer: 0,
            clickedAnswer: 0,
            setp: 1,
            score: 0
        }
       // this.checkAnswer=this.checkAnswer.bind(this)
    }
 
    checkAnswer=(answer)=>{

if (answer===correctAnswer[step]){
this.setState({score:score +1,correctAnswer:correctAnswers[setp],clickedAnswer:answer})
}
else {
    this.setState({correctAnswer:0,clickedAnswer:answer})
}
    }

    nextstep=step=>{
        this.setState({step:step + 1 , correctAnswer:0 , clickedAnswer:0})
    }

    render() {
      let {questions,answers,correctAnswer,clickedAnswer,step,score}=this.state;
        return (
            <div className="Content">
                {step <= Object.keys(questions).length ?
                (<>
 <Question question={questions[step]} />
 <Answer answer={answers[step]}
 setp={setp}
 checkAnswer={this.checkAnswer}
 correctAnswer={correctAnswer}
 clickedAnswer={clickedAnswer}
 />
 <button className="Nextstep" disabled={clickedAnswer && Object.keys(questions).length >= step ? false : true}
 onClick={()=>this.nextstep(step)}
 >
     Next </button>)
 </>):( <div className="finalpage">
     <h1>You have completed the quiz!</h1>
     <p>Your score ist : {score} of {Object.keys(questions).length}  </p>
     <p>Thank You!</p>
     </div>
     )
                }
               
            </div>
        )
    }
}
