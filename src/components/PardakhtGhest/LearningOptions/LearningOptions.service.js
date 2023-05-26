export function confirmHandle(method) {

    const message = method.actions.createMessage("لطفا شماره حساب خود را انتخاب کنيد.", "chooseAccountNumber")
    method.actions.updateChatbotState(message);
};

export function cancelHandle(method) {

    method.actions.removeAllMessageFromChatBot();
    const message = method.actions.createMessage("برای شروع عملیات یکی از خدمت های زیر را انتخاب نمایید", "allOperation")
    method.actions.updateChatbotState(message);


    // window.document.getElementsByClassName('react-chatbot-kit-chat-input')[0].disabled = false
    // method.actions.removeAllMessageFromChatBot();
};