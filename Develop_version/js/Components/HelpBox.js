import React, { useState, useEffect, useRef } from "react";
const HelpBox = props => {
    const [promptActive, setPromptActive] = useState(false)
    const { topicActive } = props;
    const containerPrompt = useRef()
    const handleClickOutside = e => {
        containerPrompt.current && !containerPrompt.current.contains(e.target) && setPromptActive(false)
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    })
    return (
        <div
            ref={containerPrompt}>
            {topicActive.length > 0 &&
                <div
                    className={`help-box-container ${promptActive && 'listWordYouGetMenuList'}`}
                    onClick={() => setPromptActive(true)}>
                    <i className={`fas fa-question ${promptActive && 'not-active'}`}></i>
                    <div className={`${!promptActive ? 'not-active' : 'help-box-content-container'}`}>
                        <h4>Promt</h4>
                        <p className={'help-box-promt'}>{props.promt}</p>
                        <hr className={'topic-decoration-hr'}/>
                        <p className={'help-box-promt'}>Still need help?</p>
                        <button className={'topic-btn'} onClick={props.randomLetterPromt}>Random letter</button>
                    </div>
                </div>
            }
        </div>
    )
}
export default HelpBox;