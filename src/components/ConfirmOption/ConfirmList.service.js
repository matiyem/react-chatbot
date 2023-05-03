import {useContext} from "react";
import {UserContext} from "../context/UserContext";

export function submitConfirmOption (method){
    const {accountNumber} = useContext(UserContext);
    accountNumber({account: e.target.textContent});
    console.log("accountData", accountData.account);
    const message = method.actions.createMessage("پرداخت اقساط شما با موفقيت انجام شد.","");
    method.actions.updateChatbotState(message);
}