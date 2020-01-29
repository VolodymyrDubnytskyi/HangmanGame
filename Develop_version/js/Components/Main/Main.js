import React, { Component } from "react";
import ReactDOM from "react-dom";
import LetterContainer from './LetterContainer'
import RandomWordContainer from './RandomWordContainer'


const alphabetPl = Array.from('AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUVWYZŹŻ');
const sentences = [ //hasła z których losujemy
    "Fantomas",
    "Super Szamson",
    "Hasło",
    "Myszka",
    "Super bohaterowie",
    "Super pies",
    "Przyjaciel",
    "Kurs JavaScript",
    "Terminator",
    "Superman",
    "Herkules",
    "Batman",
    "Spiderman",
    "Kapitan Ameryka"
]


export default class Main extends Component {

    state = {
        rnadomWord: null,
        filterArr: null,
        tochek: null,
        count: 5,
        classN: '',
        classNrandom: '',
        sentences: sentences
    }


    sentencesfillterIfYouWin = (el) => {
        this.setState({
            sentences: el
        })
    }
    addActiveClass = (clas, clasRandom) => {

        this.setState({
            classN: clas,
            classNrandom: clasRandom
        })
    }

    getRandomWord = (el) => {
        this.setState({
            rnadomWord: el,
            filterArr: el
        })

    }
    letterToCheck = (el) => {
        if (el === null) {
            this.setState({
                count: this.state.count - 1
            }, () => {
                if (this.state.count <= 0) {
                    alert('Niestety przegrałeś')
                    location.reload();

                }
            })
        } else {
            this.setState({
                tochek: el
            })
        }

        console.log(this.state.filterArr);

    }


    render() {
        return (
            <section className={'main-bg'}>
                <RandomWordContainer
                    classN={this.state.classN}
                    wordToGet={this.state.rnadomWord}
                    count={this.state.count}
                    wordToCheck={this.state.tochek}
                    classNrandom={this.state.classNrandom}
                />
                <LetterContainer
                    getRandomWord={this.getRandomWord}
                    letterToCheck={this.letterToCheck}
                    filterArr={this.state.filterArr}
                    addActiveClass={this.addActiveClass}
                    sentences={this.state.sentences}
                    sentencesfillterIfYouWin={this.sentencesfillterIfYouWin}
                    alphabetPl={alphabetPl}

                />
            </section>
        )
    }
}








