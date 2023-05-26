
export function AllOperationHavaleMellati(method) {
    debugger;
    const greetingMessage = method.actions.createMessage("لطفا شماره حساب مبدا را انتخاب نمایید", "ChooseAccountHavaleMellati");
    method.actions.updateChatbotState(greetingMessage);
}