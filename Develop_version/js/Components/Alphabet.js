import React from "react";

const Alphabet = props => {
    const { alphabetPl, activeClass, handelLetterClick, activeIdLetter, alphabetUK } = props;
    return (
        <div className={`latters-container`}>
            {alphabetUK.map((el, i) => {
                return <div
                    className={`letter ${!activeIdLetter.includes(i) && activeClass}`}
                    key={i}
                    onClick={(e) => handelLetterClick(e, i)}>
                    {el}
                </div>
            })}
        </div>
    );
}
export default Alphabet;
