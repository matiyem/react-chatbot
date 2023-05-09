import React from "react";

import "./HavaleMelati.css";
import {chooseAccountHavaleMellati} from "./HavaleMellati.service";

const ChooseAccountHavaleMellati = (props) => {
    debugger;
    const options = [
        {
            text: "123456",
            handler: (event) => props.actions.chooseAccountHavaleMellati(event,props),
            id: 1,
        },
        {
            text: "789654",
            handler: (event,obj) => props.actions.chooseAccountHavaleMellati(event,obj),
            id: 2
        },
    ];
    const linkMarkup = options.map((link) => (
        <button
            className="learning-option-button"
            key={link.id}
            onClick={(event)=>link.handler(event)}
        >
            {link.text}
        </button>
    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default ChooseAccountHavaleMellati;
