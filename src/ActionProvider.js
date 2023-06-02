import React, {useContext, useEffect} from 'react';
import {chooseAccount} from "./components/PardakhtGhest/LinkList/LinkList.service";
import {cancelHandle, confirmHandle} from "./components/PardakhtGhest/LearningOptions/LearningOptions.service";
import {submitConfirmOption} from "./components/PardakhtGhest/ConfirmOption/ConfirmList.service";
import {
    amountHavaleMelati,
    chooseAccountHavaleMellati,
    confirmHavaleMelati,
    getDestinationAccountNumber,
    startHavaleMellati,
    submitHavaleMelati,
    // useValueTextBox,
    // useValueTextBoxAmountHavale,
    onClickOnReceipt
} from "./components/HavaleMelati/HavaleMellati.service"
import {UserContext} from "./components/context/UserContext";
import {testMethod} from "./components/CommomMethod"
import {AllOperationHavaleMellati} from "./components/AllOperation/AllOperation.service"

function ActionProvider({createChatBotMessage, setState, children, ...props}) {
    const {accountNumber, amountHavaleMellati, destinationAccountNumber, flag, information,step} = useContext(UserContext);
    const {
        accountData,
        destinationAccountNumberData,
        amountHavaleMellatiData,
        flagData,
        informationData,
        stepData

    } = useContext(UserContext);
    // let step = [{}]


    useEffect(() => {
        debugger;
        console.debug('testMethod');
        testMethod(createMessage, updateChatbotState, getValueFromContext, setValueIntoContext)
        let step=[{
            id: 1,
            message: "لطفا شماره حساب مبدا را انتخاب نمایید",
            widget: "ChooseAccountHavaleMellati"
        }]
        setValueIntoContext("step",step)

    }, []);

    const returnFlow=()=>{

    }

    const setValueIntoContext = (text, value) => {
        debugger;
        switch (text) {
            case "account": {
                accountNumber({account: value});
                break;
            }
            case "destinationAccountNumber": {
                destinationAccountNumber({destinationAccountNumber: value});
                break;
            }
            case "amountHavaleMellati": {
                amountHavaleMellati({amountHavaleMellati: value});
                break;
            }
            // case "flag": {
            //     flag({flag: value});
            // }
            case "information": {
                information({information: value});
                break;
            }
            case "step": {
                step({step: value});
                break;
            }
            default:
                return "";
        }
    }
    const getValueFromContext = (text) => {
        debugger;
        switch (text) {
            case "accountData": {
                return accountData
                break;

            }
            case "destinationAccountNumberData": {
                return destinationAccountNumberData;
                break;

            }
            case "amountHavaleMellatiData": {
                return amountHavaleMellatiData;
                break;

            }
            case "flagData": {
                return flagData;
                break;

            }
            case "information": {
                return informationData;
                break;

            }
            case "stepData": {
                return stepData;
                break;

            }
            default:
                return "";
        }
    }
    const createMessage = (message, widget) => {
        const outPut = createChatBotMessage(
            message,
            {
                widget: widget,
            }
        );
        return outPut;
    }
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        setState((prev) => ({...prev, messages: [...prev.messages, botMessage],}));
    };
    const greet = () => {
        const greetingMessage = createChatBotMessage("Hi, friend.");
        updateChatbotState(greetingMessage);
    }
    const updateChatbotState = (message) => {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
        setState((prevState) => ({

            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
    const removeAllMessageFromChatBot = () => {
        debugger;
        setState(() => ({
            messages: [""],
        }));

    }
    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {children && React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        greet,
                        removeAllMessageFromChatBot,
                        updateChatbotState,
                        chooseAccount: (e, method) => chooseAccount(e, method),
                        createMessage: (text, widget) => createMessage(text, widget),
                        confirmHandle: (method) => confirmHandle(method),
                        cancelHandle: (method) => cancelHandle(method),
                        submitConfirmOption: (method) => submitConfirmOption(method),
                        startHavaleMellati: (method) => startHavaleMellati(method),
                        getDestinationAccountNumber: (method) => getDestinationAccountNumber(method),
                        // useValueTextBox: (e, method) => useValueTextBox(e, method),
                        // destinationAccountNumber: () => destinationAccountNumber(),
                        chooseAccountHavaleMellati: (e, method) => chooseAccountHavaleMellati(e, method),
                        setValueIntoContext: (text, e) => setValueIntoContext(text, e),
                        // useValueTextBoxAmountHavale: (e, method) => useValueTextBoxAmountHavale(e, method),
                        amountHavaleMelati: (e, method) => amountHavaleMelati(e, method),
                        confirmHavaleMelati: (method) => confirmHavaleMelati(method),
                        submitHavaleMelati: (method) => submitHavaleMelati(method),
                        getValueFromContext: (txt) => getValueFromContext(txt),
                        test: (create, update) => test(create, update),
                        AllOperationHavaleMellati: (method) => AllOperationHavaleMellati(method),
                        onClickOnReceipt: (method) => onClickOnReceipt(method),
                        // step,


                    },
                });
            })}
        </div>);
};
export default ActionProvider
