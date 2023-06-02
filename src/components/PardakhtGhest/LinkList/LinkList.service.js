import React from 'react';

export function chooseAccount(e, method) {
    debugger;
    // accountNumber({account: e.target.textContent});
    const message = method.actions.createMessage('آيا از پرداخت اقساط خود از اين شماره حساب اطمينان داريد؟', "confirm")
    method.actions.updateChatbotState(message);
}
