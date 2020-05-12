import React from "react";

const BoxOfSentences = props => {
    const { container, ifYouWon, activeMenu, showMenu, wordToList } = props;
    return (
        <div
            ref={container}>
            {ifYouWon && <div
                className={`listWordYouGet ${activeMenu && 'listWordYouGetMenuList'} sentences-box`}
                onClick={showMenu}>
                    <h4 className={`${!activeMenu && 'nActive'}`}>Guessed words</h4>
                <ul className={'listWordYouGet-list'}>
                    <i className={`fas fa-check ${activeMenu && 'nActive'}`}></i>
                    {wordToList.map((el, i) => {
                        return <li className={'listWordYouGetItem'} key={i}>{el}</li>
                    })}
                </ul>
            </div>}
        </div>
    );
}
export default BoxOfSentences;
