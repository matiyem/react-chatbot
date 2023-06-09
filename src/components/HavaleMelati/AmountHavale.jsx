import React from "react";

import "../PardakhtGhest/ConfirmOption/ConfirmList.css";
import "./HavaleMelati.css";


const AmountHavale = (props) => {
    const options = [
        {
            text: "تایید",
            handler: () => props.actions.confirmHavaleMelati( props),
            id: 1,
        },

    ];
    const linkMarkup = options.map((link) => (
        <div>
            <input
                className="learning-option-button"
                id="amountHavaleId"
                // onChange={(event) => props.actions.useValueTextBoxAmountHavale(event,props)}
            >
            </input>
            <button className="learning-option-button"
                    key={link.id}
                    onClick={() => link.handler()}
            >
                {link.text}
            </button>
        </div>

    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default AmountHavale;
