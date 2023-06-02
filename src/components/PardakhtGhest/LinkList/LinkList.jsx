import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
    debugger;
    const options = [
        {
            text: "123456",
            handler: (event) => props.actions.chooseAccount(event,props),
            id: 1,
        },
        {
            text: "789654",
            handler: (event) => props.actions.chooseAccount(event,props),
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

export default LinkList;
