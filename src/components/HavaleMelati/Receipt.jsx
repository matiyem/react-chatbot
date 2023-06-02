import React from "react";
import {onClickOnReceipt} from "./HavaleMellati.service";

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
        <div className="div-container " id="receipt-container"
             onClick={() => props.actions.onClickOnReceipt(props)}>
            <div className="modal-header">
                <span id="closeId" className="close">x</span>
                <h2 id="hederId">رسید حواله ملتی با موفقیت انجام شد</h2>
            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height " id="divId" >
                <label className="lable-receipt lable-bold " id="titleId">انتقال از: </label>
                <label
                    className="lable-receipt  " id="valueId">{props.actions.getValueFromContext("information").information.fromAccount} </label>
            </div>
            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">نوع حساب: </label>
                <label className="lable-receipt" id="valueId" >{props.actions.getValueFromContext("information").information.accountType}</label>

            </div>
            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">نام: </label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.accountType} </label>
            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">شماره حساب: </label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.accountNumber}</label>

            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">نوع حساب: </label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.accountType2} </label>
            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">مبلغ حواله: </label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.amount}</label>
            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">شناسه واریز:</label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.shenaseVariz}</label>
            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">بابت:</label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.babat}</label>
            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">کارمزد:</label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.karmozd}</label>
            </div>

            <div className="lable-receipt-display lable-receipt-rtl div-height " id="divId">
                <label className="lable-receipt lable-bold" id="titleId">شماره تراکنش:</label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.shomareTarakonesh}</label>
            </div>
            <div className="lable-receipt-display lable-receipt-rtl div-height lable-receipt-border" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">تاریخ تراکنش:</label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.date}</label>

            </div>
            <div className="lable-receipt-display lable-receipt-rtl div-height" id="divId">
                <label className="lable-receipt lable-bold" id="titleId">زمان تراکنش:</label>
                <label className="lable-receipt" id="valueId">{props.actions.getValueFromContext("information").information.time}</label>

            </div>

            {/*<label className="lable-receipt" >شماره حساب مقصد:{props.actions.getValueFromContext("information").information.destinationAccount}</label>*/}
        </div>
    ));

    return <ul className="link-list" >{linkMarkup}</ul>;
};

export default Receipt;