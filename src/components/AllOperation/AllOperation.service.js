
export function AllOperationHavaleMellati(method) {
    debugger;
    const greetingMessage = method.actions.createMessage(method.actions.getValueFromContext("stepData").step[0].message, method.actions.getValueFromContext("stepData").step[0].widget);
    method.actions.updateChatbotState(greetingMessage);
}