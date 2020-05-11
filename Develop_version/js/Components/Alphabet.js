import React from "react";

const Alphabet = props => {
    const { alphabetPl, playAgain, activeClass, handelLetterClick, activeIdLetter, alphabetUK, popUpActive } = props;
    return (
        <div className={`latters-container`}>
            {alphabetUK.map((el, i) => {
                return <div
                    className={`letter ${!activeIdLetter.includes(el) && !popUpActive && !playAgain && activeClass}`}
                    key={i}
                    onClick={(e) => handelLetterClick(e, i)}>
                    {el}
                </div>
            })}
        </div>
    );
}
export default Alphabet;
