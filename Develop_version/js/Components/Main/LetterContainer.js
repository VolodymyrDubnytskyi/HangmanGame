import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class LetterContainer extends Component {

    state = {
        randomWord: null,
        wordThatYouget: [],
        win: this.props.filterArr,
        activeClass: '',
        activeRandom: '',
        gameStart: false,
        wordToList: [],
        sentencesDefult: this.props.sentences,
        wordToDelite: '',
        ifYouWon: false
    }

    getRandomWord = (e) => {
        let randomNR = Math.floor(Math.random() * Math.floor(this.props.sentences.length));
        let arrRandomWord = this.props.sentences[randomNR].toUpperCase();
        let newArr = Array.from(arrRandomWord.split(" ").join(""));
        this.setState({
            randomWord: newArr,
            win: newArr,
            activeClass: 'active',
            activeRandom: 'active-random',
            gameStart: true,
            wordThatYouget: [],
            wordToDelite: arrRandomWord,


        }, () => {
            this.props.getRandomWord(this.state.randomWord)
            this.props.addActiveClass(this.state.activeClass, this.state.activeRandom)
            this.props.letterToCheck(this.state.wordThatYouget)
        });
    }

    handelClick = (e) => {

        if (this.state.gameStart === true) {
            if (this.state.randomWord.includes(e.target.innerText)) {
                this.setState({
                    wordThatYouget: [e.target.innerText, ...this.state.wordThatYouget]
                }, () => {
                    this.props.letterToCheck(this.state.wordThatYouget)
                })

            } else {
                this.props.letterToCheck(null)
            }

            this.setState(
                {
                    win: this.state.win.filter((el) => {
                        return el !== e.target.innerText
                    })
                }, () => {
                    if (this.state.win.length <= 0) {
                        this.setState({
                            wordToList: [...this.state.wordToList, this.state.randomWord],
                            wordThatYouget: [],
                            ifYouWon: true,
                            sentencesDefult: this.state.sentencesDefult.filter((el) => {
                                return el.toUpperCase() !== this.state.wordToDelite
                            })
                        }, () => {
                            this.props.sentencesfillterIfYouWin(this.state.sentencesDefult)
                        })
                        this.getRandomWord();
                        this.props.countRestart()
                    }
                }
            )
        }
    }

    render() {


        this.state.win !== null && this.state.win.length <= 0 && alert("Wygrałeś Gratulację");
        if (this.state.ifYouWon === true) {
            return (
                <>
                    <div>
                        <ul className={'listWordYouGet'}>
                            <h3>Rozszyfrowane słowa</h3>
                            {this.state.wordToList.map((el, i) => {
                                return <li className={'listWordYouGetItem'} key={i}>{el}</li>
                            })}
                        </ul>
                    </div>
                    <div className={`latters-container`}>
                        {this.props.alphabetPl.map((el, i) => {
                            return <div className={`letter ${this.state.activeClass}`} key={i} onClick={this.handelClick}>{el}</div>
                        })}
                    </div>
                    <button className={'random_word_btn'} onClick={this.getRandomWord}>Losuj nowe hasło</button>
                </>
            );
        }
        return (
            <>
                <div className={`latters-container`}>
                    {this.props.alphabetPl.map((el, i) => {
                        return <div className={`letter ${this.state.activeClass}`} key={i} onClick={this.handelClick}>{el}</div>
                    })}
                </div>
                <button className={'random_word_btn'} onClick={this.getRandomWord}>Losuj nowe hasło</button>
            </>
        );

    }
}