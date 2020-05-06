import React, { Component } from "react";
import LetterContainer from './LetterContainer'
import RandomWordContainer from './RandomWordContainer'
import { alphabetPl, sentences, cities, test, artists } from '../../data/dummy-data'
import PopUpRoudn from "../PopUpRoudn";
import PopUpEndGame from "../PopUpEndGame";
let gameOverbox;
class Main extends Component {

    state = {
        rnadomWord: null,
        filterArr: null,
        toCheck: null,
        count: 5,
        classN: '',
        classNrandom: '',
        sentences: test,
        randomToShowIfloose: '',
        popUpActive: false,
        startGame: false,
        playAgain: false
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
        const { count, randomToShowIfloose } = this.state;
        if (el === null) {
            this.setState({
                count: this.state.count - 1
            }, () => {
                if (this.state.count <= 1) {
                    return gameOverbox = <div>
                        <PopUpRoudn
                            title={'Game Over'}
                            GuessedWrod={this.state.randomToShowIfloose}
                            ContinueGame={this.gameOver}
                            bntTitle={'Play Again'} />
                    </div>
                    alert(`Niestety przegrałeś słowo kluczowe to: ${this.state.randomToShowIfloose}`)
                    location.reload();
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
            playAgain: true
        })
        gameOverbox = '';
    }
    playAgainFn = e =>{
        this.setState({
            playAgain: false
        })
    }
    topicFn = topic => {
        this.setState({
            sentences: topic,
        })
    }
    render() {
        const { classN, rnadomWord, count, toCheck, classNrandom, filterArr, sentences, playAgain } = this.state;
        const { getRandomWord, letterToCheck, addActiveClass, sentencesfillterIfYouWin, countRestart, wordThatYouRandom, popUpActive, playAgainFn} = this;
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
                    countRestart={countRestart}
                    wordThatYouRandom={wordThatYouRandom}
                    deliteWordFromMainsentences={this.deliteWordFromMainsentences}
                    playAgain={playAgain}
                    playAgainFn={playAgainFn}
                />
                {gameOverbox}
            </section>
        )
    }
}
export default Main;







