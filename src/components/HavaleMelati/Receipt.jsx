import React from "react";

const Receipt = (props) => {
    debugger;
    const options = [
        {
            text: "حواله ملتی",
            handler: () => props.actionProvider.AllOperationHavaleMellati(props),
            id: 1,
        },
        // { text: "Data visualization", handler: () => {}, id: 2 },
        // { text: "APIs", handler: () => {}, id: 3 },
        // { text: "Security", handler: () => {}, id: 4 },
        // { text: "Interview prep", handler: () => {}, id: 5 },
    ];

    const linkMarkup = options.map((option) => (
        <div className="lable-container">
            <label className="lable-receipt">مبلغ حواله: {props.actions.getValueFromContext("information").information.amount}</label>

            <label className="lable-receipt" >شماره حساب مقصد:{props.actions.getValueFromContext("information").information.destinationAccount.information}</label>
        </div>
    ));

    return <ul className="link-list">{linkMarkup}</ul>;
};

export default Receipt;