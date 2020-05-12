import React from "react";

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