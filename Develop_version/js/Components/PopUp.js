import React, { Component } from "react";
import { artists, popUpTopics } from "../data/dummy-data";

const PopUp = props => {
    return (
        <div className={'popUp-container'}>
            <section className={'popUp-main-content-container'}>
                {props.children}
            </section>
        </div>
    );
}

export default PopUp;