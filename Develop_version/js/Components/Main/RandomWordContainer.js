import React, { Component } from "react";

class RandomWordContainer extends Component {
    render() {
        const {wordToGet, wordToCheck, classNrandom, count} = this.props;
        if (wordToGet !== null) {
            return (
                <>
                    <div className={'RandomWordContainer-defaul-box'} >{count}</div>
                    <div className={'RandomWordContainer'}>
                        {wordToGet.map((el, i) => {
                            if (wordToCheck !== null) {
                                if (wordToCheck.includes(el)) {
                                    return <div key={i} className={`letter ${classNrandom}`}>{el}</div>
                                } else {
                                    return <div className={`letter ${classNrandom}`} key={i} >{''}</div>
                                }
                            } else {
                                return <div className={`letter ${classNrandom}`} key={i} >{''}</div>
                            }
                        })}
                    </div>
                </>
            );
        } else {
            return (
                <div className={'RandomWordContainer'}>
                    <div className={'RandomWordContainer-defaul-box'} ></div>
                </div>
            );
        }
    }
}
export default RandomWordContainer;