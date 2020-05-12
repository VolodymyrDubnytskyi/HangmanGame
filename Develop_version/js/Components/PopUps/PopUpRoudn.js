import React from "react";
import PopUp from "./PopUp";

const PopUpRoudn = props => {
    const {title, guessedWrod, continueGame, btntitle} = props;
    return (
        <PopUp>
        <div className={'popUp-round-container'}>
            <h4 className={'popUp-round-heading'}>{title}</h4>
            <p className={'popUp-round-description'}>Keyword: <br />
                <span className={'popUp-round-guessedWord'}>{guessedWrod}</span>
            </p>
            <button className={'topic-btn'} onClick={continueGame}>{btntitle}</button>
        </div>
    </PopUp>
    );
}
export default PopUpRoudn;