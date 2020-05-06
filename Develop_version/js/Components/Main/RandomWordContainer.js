import React, { Component } from "react";

class RandomWordContainer extends Component {
    render() {
        const { wordToGet, wordToCheck, count } = this.props;
        if (this.props.wordToGet !== null) {
            return (
                <>
                    <div className={'RandomWordContainer-defaul-box'} >{this.props.count}</div>
                    <div className={'RandomWordContainer'}>
                        {this.props.wordToGet.map((el, i) => {
                            if (this.props.wordToCheck !== null) {
                                if (this.props.wordToCheck.includes(el)) {
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
export default RandomWordContainer;