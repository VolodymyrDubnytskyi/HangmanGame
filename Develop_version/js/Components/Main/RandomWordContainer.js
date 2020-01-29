import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class RandomWordContainer extends Component {

    render() {

        const { wordToGet, wordToCheck, count } = this.props
        console.log(wordToGet);

        if (wordToGet !== null) {

            return (
                <>
                    <div className={'RandomWordContainer-defaul-box'} >{count}</div>
                    <div className={'RandomWordContainer'}>
                        {wordToGet.map((el, i) => {
                            if (wordToCheck !== null) {
                                if (wordToCheck.includes(el)) {
                                    return <div key={i} className={`letter ${this.props.classNrandom}`}>{el}</div>
                                } else {
                                    return <div className={`letter ${this.props.classNrandom}`} key={i} >{''}</div>
                                }
                            } else {
                                return <div className={`letter ${this.props.classNrandom}`} key={i} >{''}</div>
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
