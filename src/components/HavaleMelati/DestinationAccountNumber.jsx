import React from "react";

import "../PardakhtGhest/ConfirmOption/ConfirmList.css";
import "./HavaleMelati.css";

const DestinationAccountNumber = (props) => {
    const options = [
        {
            text: "تایید",
            handler: (event) => props.actions.amountHavaleMelati(event, props),
            id: 1,
        },

    ];
    const linkMarkup = options.map((link) => (
        <div>
            <input
                className="learning-option-button"
                id="destinationAccountNumberId"
                // onChange={(event) => props.actions.useValueTextBox(event, props)}
            >
            </input>
            <button className="learning-option-button"
                    key={options.id}
                    onClick={(event) => link.handler(event)}
            >
                {link.text}
            </button>
        </div>

    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default DestinationAccountNumber;
