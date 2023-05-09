
export function submitConfirmOption (method){
    // const {accountNumber} = useContext(UserContext);
    // accountNumber({account: e.target.textContent});
    const message = method.actions.createMessage("پرداخت اقساط شما با موفقيت انجام شد.","");
    method.actions.updateChatbotState(message);
}