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
            handler: (event,obj) => props.actionProvider.chooseAccount(event,obj),
            id: 2
        },
    ];
    const linkMarkup = options.map((link) => (
        // <li key={link.id} className="link-list-item">
        //   <a
        //     href={link.url}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     className="link-list-item-url"
        //   >
        //     {link.text}
        //   </a>
        // </li>
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
