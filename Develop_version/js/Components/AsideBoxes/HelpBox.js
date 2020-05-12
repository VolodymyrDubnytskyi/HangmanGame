import React, { useState, useEffect, useRef } from "react";
const HelpBox = props => {
    const [promptActive, setPromptActive] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(false)
    const [activeOverflow, setActiveOverflow] = useState(true)
    const { topicActive } = props;
    const containerPrompt = useRef()                                                        
    const handleClickOutside = e => {
        containerPrompt.current && !containerPrompt.current.contains(e.target) && setPromptActive(false)
        containerPrompt.current && !containerPrompt.current.contains(e.target) && setActiveOverflow(true)
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    })
    return (
        <div
            ref={containerPrompt}>
            {topicActive.length > 0 &&
                <div
                    className={`help-box-container ${promptActive && 'listWordYouGetMenuList'} ${!activeOverflow && 'initialOverflow'}`}
                    onClick={(e) => {
                        setPromptActive(true)
                    }}>
                    <i className={`fas fa-question ${promptActive && 'not-active'}`}></i>
                    <div className={`tooltip-container ${activeTooltip ? 'tooltip-container-visible' : ''}`}>
                        <p>You can random letter <br /> only ones per round</p>
                    </div>
                    <div className={`${!promptActive ? 'not-active' : 'help-box-content-container'}`}>
                        <h4>Promt</h4>
                        <p className={'help-box-promt'}>{props.promt}</p>
                        <hr className={'topic-decoration-hr'} />
                        <h4 className={'help-box-heding'}>Still need help?</h4>
                        <div
                            className={'help-box-btn-container'}
                            onMouseOver={() => {
                                props.usedPromt && 
                                setActiveTooltip(true)
                                setActiveOverflow(false)
                            }}
                            onMouseOut={() => setActiveTooltip(false)}>
                            <button
                                className={`topic-btn help-box-btn ${props.usedPromt && 'disabled-btn'}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    !props.usedPromt && setPromptActive(false)
                                    !props.usedPromt && setActiveOverflow(true)
                                    props.randomLetterPromt()
                                }}>
                                Random letter
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default HelpBox;