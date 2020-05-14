import React from "react";

const BoxOfSentences = props => {
    const { container, ifYouWon, activeMenu, showMenu, wordToList } = props;
    return (
        <div
            ref={container}>
            {ifYouWon && <div
                className={`listWordYouGet ${activeMenu && 'listWordYouGetMenuList'}`}
                onClick={showMenu}>
                <div className={`${activeMenu && 'listWordTouGet-sticky-heading'}`}>
                    <h4 className={`${!activeMenu && 'nActive'}`}>Guessed words</h4>
                </div>
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
