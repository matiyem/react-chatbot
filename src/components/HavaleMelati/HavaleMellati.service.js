// import ActionProvider from "../../ActionProvider";
import React from 'react';

export function initialMsg(method) {

    debugger;
    const greetingMessage = method.createMessage("لطفا شماره حساب مبدا را انتخاب نمایید", "ChooseAccountHavaleMellati");
    method.updateChatbotState(greetingMessage);
}
export function startHavaleMellati(method) {
    debugger;
    const greetingMessage = method.createMessage("لطفا شماره حساب مبدا را انتخاب نمایید", "ChooseAccountHavaleMellati");
    method.updateChatbotState(greetingMessage);
}

export function getDestinationAccountNumber(method) {
    const greetingMessage = method.createMessage("لطفا مبلغ حواله را وارد نمایید", "ChooseAccountHavaleMellati");
    method.updateChatbotState(greetingMessage);
}


export function useValueTextBox(e, method) {
    debugger;
    method.actions.setValueIntoContext("destinationAccountNumber", e.target.value);
}

export function chooseAccountHavaleMellati(e, method) {
    // accountNumber({account: e.target.textContent});
    const message = method.actions.createMessage('لطفا شماره حساب مقصد را وارد نمایید.', "getAccountNumberHavaleMellati")
    method.actions.updateChatbotState(message);
}

export function useValueTextBoxAmountHavale(e, method) {
    debugger;
    method.actions.setValueIntoContext("amountHavaleMellati", e.target.value);

}

export function amountHavaleMelati(e, method) {
    // accountNumber({account: e.target.textContent});
    const message = method.actions.createMessage('لطفا مبلغ مورد نظر را وارد نمایید.', "amountHavaleMellati")
    method.actions.updateChatbotState(message);
}

export function confirmHavaleMelati(method) {
    // accountNumber({account: e.target.textContent});
    // const { amountHavaleMellatiData } = useContext(UserContext);
    const message = method.actions.createMessage("آیا از عملیات خود اطمینان دارید؟", "confirmHavaleMellati");
    method.actions.updateChatbotState(message);
}

export function submitHavaleMelati(method) {
    debugger;
    const text=method.actions.getValueFromContext("destinationAccountNumberData")
    // accountNumber({account: e.target.textContent});
    // const { amountHavaleMellatiData } = useContext(UserContext);
    const message = method.actions.createMessage("حواله شما با موفقيت انجام شد.", "");
    method.actions.updateChatbotState(message);
}


