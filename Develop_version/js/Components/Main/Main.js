import React, { Component } from "react";
import LetterContainer from './LetterContainer'
import RandomWordContainer from './RandomWordContainer'
import { alphabetPl, sentences, cities, test, artists, alphabetUK } from '../../data/dummy-data'
import PopUpRoudn from "../PopUpRoudn";


let gameOverbox;

class Main extends Component {

    state = {
        rnadomWord: null,
        filterArr: null,
        toCheck: null,
        count: 5,
        classN: '',
        classNrandom: '',
        sentences: '',
        randomToShowIfloose: '',
        popUpActive: false,
        startGame: false,
        playAgain: false,
        gameOver: false,
        mistakes: 0
    }

    deliteWordFromMainsentences = wordToDelite => {
        const wordToRemove = wordToDelite.toLowerCase()
        this.setState({
            sentences: this.state.sentences.filter((word) => {
                return word !== wordToRemove
            })
        })
    }
    wordThatYouRandom = randomWord => {
        this.setState({
            randomToShowIfloose: randomWord
        })
    }
    countRestart = el => {
        this.setState({
            count: 5
        })
    }
    sentencesfillterIfYouWin = filtredSentences => {
        this.setState({
            sentences: filtredSentences
        })
    }
    addActiveClass = (activeClass, clasRandom) => {
        this.setState({
            classN: activeClass,
            classNrandom: clasRandom
        })
    }
    getRandomWord = word => {
        this.setState({
            rnadomWord: word,
            filterArr: word
        })
    }
    letterToCheck = el => {
        if (el === null) {
            this.setState({
                count: this.state.count - 1 === 0 ? 0 : this.state.count - 1,
                mistakes: this.state.mistakes + 1
            }, () => {
                if(this.state.count === 0){
                   this.setState({gameOver: true})
                    return gameOverbox = <div>
                    <PopUpRoudn
                        title={'Game Over'}
                        guessedWrod={this.state.randomToShowIfloose}
                        continueGame={this.gameOver}
                        btntitle={'Play Again'} /> </div> 
                }
            })
        } else {
            this.setState({
                toCheck: el
            })
        }
    }
    gameOver = e => {
        this.setState({
            playAgain: true,
            gameOver: false
        })
        gameOverbox = '';
    }
    playAgainFn = e => {
        this.setState({
            playAgain: false
        })
    }
    topicFn = topic => {
        this.setState({
            sentences: topic,
        })
    }
    restartMistakes = e=>{
        this.setState({
            mistakes: 0
        })
    }
    render() {
        const { classN, rnadomWord, count, toCheck, classNrandom, filterArr, sentences, playAgain } = this.state;
        const { getRandomWord, letterToCheck, addActiveClass, sentencesfillterIfYouWin, countRestart, wordThatYouRandom, popUpActive, playAgainFn } = this;
        return (
            <section className={'main-bg'}>
                <RandomWordContainer
                    classN={classN}
                    wordToGet={rnadomWord}
                    count={count}
                    wordToCheck={toCheck}
                    classNrandom={classNrandom}
                />
                <LetterContainer
                    startGame={this.state.startGame}
                    topicFn={this.topicFn}
                    getRandomWord={getRandomWord}
                    letterToCheck={letterToCheck}
                    filterArr={filterArr}
                    addActiveClass={addActiveClass}
                    sentences={sentences}
                    sentencesfillterIfYouWin={sentencesfillterIfYouWin}
                    alphabetPl={alphabetPl}
                    alphabetUK={alphabetUK}
                    countRestart={countRestart}
                    wordThatYouRandom={wordThatYouRandom}
                    deliteWordFromMainsentences={this.deliteWordFromMainsentences}
                    playAgain={playAgain}
                    playAgainFn={playAgainFn}
                    count={this.state.count}
                    restartMistakes={this.restartMistakes}
                    mistakes={this.state.mistakes}
                    gameOver={this.state.gameOver}
                />
                {gameOverbox}
            </section>
        )
    }
}
export default Main;







