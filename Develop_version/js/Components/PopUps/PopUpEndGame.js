import React from "react";
import PopUp from "./PopUp";

const PopUpEndGame = props => {
    const { listOfAllGuessedWords, closePopUpEndGame, mistakes } = props;
    return (
        <PopUp>
            <div className={'popUp-endGame-container'}>
                <h3>CONGRATULATIONS <br /> YOU WIN</h3>
                <hr className={'topic-decoration-hr'} />
                <h4>Words you gueesed:</h4>
                <div>
                    <ul className={'popUp-endGame-list'}>
                        {listOfAllGuessedWords.map((word, i) => {
                            return <li
                                className={'popUp-endGame-item'}
                                key={i}>
                                {word}
                            </li>
                        })}
                    </ul>
                </div>
                <div className={'popUp-endGame-box'}>
                    <div>
                        <p>Rounds</p>
                        <span>{listOfAllGuessedWords.length}</span>
                    </div>
                    <div>
                        <p>Mistakes</p>
                        <span>{mistakes}</span>
                    </div>
                </div>
                <button className={'topic-btn'} onClick={closePopUpEndGame}>PlayAgain</button>
            </div>
        </PopUp>
    );
}
export default PopUpEndGame;