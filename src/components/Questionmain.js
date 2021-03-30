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
    }
    render() {
       let { questions} = this.state
        return (
            <div className="Quiz">
                <Question question={questions[1]} />
            <Answer answer={this.state.answers[1]}/>
            </div>
        )
    }
}