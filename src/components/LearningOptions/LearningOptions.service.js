import {useContext} from "react";
import {UserContext} from "../context/UserContext";


export function confirmHandle(method) {
const { loginUser } = useContext(UserContext);

    const message = method.actions.createMessage("لطفا شماره حساب خود را انتخاب کنيد.", "chooseAccountNumber")
    method.actions.updateChatbotState(message);
};

export function cancelHandle(method) {
    window.document.getElementsByClassName('react-chatbot-kit-chat-input')[0].disabled = false
    method.actions.removeAllMessageFromChatBot();
};