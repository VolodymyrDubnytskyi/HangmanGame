import React, { Component } from "react";
import PopUp from "../PopUp";
import PopUpTopicList from "../PopUpTopicList";
import ListOfTopics from "../ListOfTopics";
import ListOfSentences from "../ListOfSentences";
import Alphabet from "../Alphabet";
import PopUpRoudn from "../PopUpRoudn";
import PopUpEndGame from "../PopUpEndGame";
import HelpBox from "../HelpBox";


class LetterContainer extends Component {

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
        ifYouWon: false,
        activeMenu: false,
        popUpActive: false,
        topicActive: '',
        activeIdLetter: [],
        popUpEndGame: false,
        actualPromt: ''
    }
    // ref
    container = React.createRef();
    containerTopics = React.createRef();
    // adding outside click to close info boxes with topiac and gueesed sentences
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    // making a random sentences for the game
    getRandomWord = (e) => {
        if (this.props.sentences.length <= 0) {
            this.setState({ popUpEndGame: true })
        } else {
            const { sentences, countRestart } = this.props;
            let randomNR = Math.floor(Math.random() * Math.floor(sentences.length));
            let arrRandomWord = this.props.sentences[randomNR].name.toUpperCase();
            let actualPromt = this.props.sentences[randomNR].promt;
            let newArr = Array.from(arrRandomWord.split(" ").join(""));
            this.setState({
                randomWord: newArr,
                win: newArr,
                activeClass: 'active',
                activeRandom: 'active-random',
                gameStart: true,
                wordThatYouget: [],
                wordToDelite: arrRandomWord,
                activeIdLetter: '',
                actualPromt: actualPromt
            }, () => {
                const { randomWord, activeClass, activeRandom, wordThatYouget, wordToDelite } = this.state
                const { addActiveClass, letterToCheck, wordThatYouRandom, deliteWordFromMainsentences } = this.props;
                this.props.getRandomWord(randomWord)
                addActiveClass(activeClass, activeRandom)
                letterToCheck(wordThatYouget)
                wordThatYouRandom(wordToDelite)
            });
            countRestart();
        }
    }

    checkGueesedLetter = (clickedLetter, id) => {
        if (this.state.randomWord.includes(clickedLetter.innerText)) {
            this.setState({
                wordThatYouget: [clickedLetter.innerText, ...this.state.wordThatYouget],
                activeIdLetter: [...this.state.activeIdLetter, id]
            }, () => {
                this.props.letterToCheck(this.state.wordThatYouget)
            })
        } else {
            this.props.letterToCheck(null)
        }
    }
    randomLetterPromt = e => {
        let randomNR = Math.floor(Math.random() * Math.floor(this.state.randomWord.length));
        let randomLetterIndex = this.state.randomWord[randomNR];

        if (!this.state.wordThatYouget.includes(this.randomLetterIndex)) {
            this.setState({
                win: this.state.win.filter((el) => el !== randomLetterIndex),
                wordThatYouget: [randomLetterIndex, ...this.state.wordThatYouget],
                activeIdLetter: [...this.state.activeIdLetter, randomNR]
            }, ()=>  this.props.letterToCheck(this.state.wordThatYouget))
        }

    }
    handelLetterClick = (e, id) => {
        if (this.state.gameStart === true) {
            this.checkGueesedLetter(e.target, id);
            this.setState(
                {
                    win: this.state.win.filter((el) => {
                        return el !== e.target.innerText
                    })
                }, () => {
                    if (this.state.win.length <= 0) {
                        this.props.deliteWordFromMainsentences(this.state.wordToDelite)
                        this.setState({
                            wordToList: [...this.state.wordToList, this.state.randomWord.join('')],
                            wordThatYouget: [],
                            ifYouWon: true,
                            sentencesDefult: this.state.sentencesDefult.filter((el) => {
                                return el.name.toUpperCase() !== this.state.wordToDelite
                            })
                        }, () => {
                            this.props.sentencesfillterIfYouWin(this.state.sentencesDefult)
                        })
                        this.props.countRestart()
                    }
                }
            )
        }
    }
    showMenu = e => {
        this.setState({
            activeMenu: !this.state.activeMenu
        })
    }
    handleClickOutside = e => {
        if (this.container.current && !this.container.current.contains(e.target)) {
            this.setState({
                activeMenu: false,
            });
        }
        if (this.containerTopics.current && !this.containerTopics.current.contains(e.target)) {
            this.setState({
                activeTopicMenu: false,
            });
        }
    };
    popUpActive = e => {
        e.stopPropagation()
        this.setState({
            popUpActive: true,
            activeTopicMenu: false
        })
    }
    popUpNotactive = topic => {
        this.props.topicFn(topic.content)
        this.setState({
            topicActive: topic.name,
            popUpActive: false,
            sentencesDefult: topic.content,
            wordToList: [],
            ifYouWon: false
        }, () => {
            this.getRandomWord()
        })
        this.props.playAgainFn()
    }
    activeTopicMenuFn = e => {
        this.setState({ activeTopicMenu: true })
    }
    closePopUpEndGame = e => {
        this.setState({
            popUpEndGame: false,
            popUpActive: true
        })
    }
    render() {
        return (
            <>
                {
                    this.state.win !== null && this.state.win.length <= 0 &&
                    <PopUpRoudn
                        guessedWrod={this.state.wordToDelite}
                        continueGame={this.getRandomWord}
                        title={'Congratulations'}
                        btntitle={'Continue'} />
                }
                <ListOfSentences
                    activeMenu={this.state.activeMenu}
                    showMenu={this.showMenu}
                    container={this.container}
                    wordToList={this.state.wordToList}
                    ifYouWon={this.state.ifYouWon}
                />
                <ListOfTopics
                    containerTopics={this.containerTopics}
                    topicActive={this.state.topicActive}
                    activeTopicMenu={this.state.activeTopicMenu}
                    activeTopicMenuFn={this.activeTopicMenuFn}
                    popUpActive={this.popUpActive}
                />
                <Alphabet
                    alphabetPl={this.props.alphabetPl}
                    alphabetUK={this.props.alphabetUK}
                    activeClass={this.state.activeClass}
                    handelLetterClick={this.handelLetterClick}
                    activeIdLetter={this.state.activeIdLetter} />
                <HelpBox
                    topicActive={this.state.topicActive}
                    promt={this.state.actualPromt}
                    randomLetterPromt={this.randomLetterPromt} />

                <button
                    className={'random_word_btn'}
                    onClick={this.state.topicActive.length > 0 ? this.getRandomWord : this.popUpActive}
                    disabled={(this.state.popUpActive || this.props.count <= 0) && true}>
                    Random word
                </button>
                {
                    (this.state.popUpActive || this.props.playAgain) &&
                    <PopUp>
                        <PopUpTopicList
                            title={'Choose Topic'}
                            topicFn={this.popUpNotactive} />
                    </PopUp>
                }
                {
                    this.state.popUpEndGame &&
                    <PopUpEndGame
                        listOfAllGuessedWords={this.state.wordToList}
                        closePopUpEndGame={this.closePopUpEndGame}
                    />
                }

            </>
        );
    }
}
export default LetterContainer;