import React from "react";
import { artists, popUpTopics } from "../../data/dummy-data";

const PopUpTopicList = props => {
    const topicHandelClick = item => {
        props.topicFn(item)
    }
    return (
        <>
            <header className={'popUp-title-container'}>
                <h3 className={'popUp-title'}>{props.title}</h3>
            </header>
            <section className={'popUp-content-container'}>
                <ul className={'popUp-menu-list'}>
                    {popUpTopics.map((item, i) => {
                        return <li
                            key={i}
                            className={'popUp-list-item'}
                            onClick={() => topicHandelClick(item)}>{item.name}
                        </li>
                    })}
                </ul>
            </section>
            {props.sentences.length !== 0 &&
                !props.playAgain &&
                <div className={'popUp-close-btn'} onClick={props.closeTopicPopUp}>
                    <i className='fas fa-times'></i>
                </div>}
        </>
    );
}
export default PopUpTopicList;