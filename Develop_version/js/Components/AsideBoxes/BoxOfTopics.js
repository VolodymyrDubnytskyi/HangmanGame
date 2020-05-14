import React from "react";

const BoxOfTopics = props => {
    const { containerTopics, topicActive, activeTopicMenu, activeTopicMenuFn, popUpActive, topicDescription } = props;
    return (
        <div
            ref={containerTopics}>
            {topicActive.length > 0 &&
                <div
                    className={`${activeTopicMenu ? 'listWordYouGetMenuList' : ''} topic-container`}
                    onClick={activeTopicMenuFn}>
                    <i className={`fas fa-info ${activeTopicMenu && 'not-active'}`}></i>
                    <div className={`topic-content-container ${!activeTopicMenu && 'not-active'}`}>
                        <div className={'topic-text-container'}>
                            <h4 className={'topic-header'}>{topicActive}</h4>
                            <p className={'topic-description'}>{topicDescription}</p>
                        </div>
                        <hr className={'topic-decoration-hr'} />
                        <button className={'topic-btn'} onClick={popUpActive}>Change Topic</button>
                    </div>
                </div>
            }
        </div>
    );
}
export default BoxOfTopics;
