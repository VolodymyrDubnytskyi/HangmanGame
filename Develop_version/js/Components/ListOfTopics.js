import React, { Component } from "react";

const ListOfTopics = props => {
    const { containerTopics, topicActive, activeTopicMenu, activeTopicMenuFn, popUpActive } = props;
    return (
        <div
            ref={containerTopics}>
            {topicActive.length > 0 &&
                <div
                    className={`${activeTopicMenu ? 'listWordYouGetMenuList' : ''} topic-container`}
                    onClick={activeTopicMenuFn}>
                    <i className={`fas fa-info ${activeTopicMenu && 'not-active'}`}></i>
                    <div className={`topic-content-container ${!activeTopicMenu && 'not-active'}`}>
                        <h4 className={'topic-header'}>{topicActive.toUpperCase()}</h4>
                        <p className={'topic-description'}>artis - look into you memory for the mostl popular and loved artist</p>
                        <hr className={'topic-decoration-hr'} />
                        <button className={'topic-btn'} onClick={popUpActive}>Change Topic</button>
                    </div>
                </div>
            }
        </div>
    );
}
export default ListOfTopics;
