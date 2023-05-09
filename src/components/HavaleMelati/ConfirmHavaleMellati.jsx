import React from "react";

import "./HavaleMelati.css";
import {submitHavaleMelati} from "./HavaleMellati.service";

const ConfirmHavaleMellati = (props) => {
    // debugger;
    const options = [
        {
            text: "بله",
            handler: () => props.actions.submitHavaleMelati(props),
            id: 1,
        },
        {
            text: "خیر",
            handler: () => props.actions.cancelHandle(props),
            id: 2
        },

    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default ConfirmHavaleMellati;
