// import React, {useContext, useState} from 'react';

import React from 'react';
import {chooseAccount} from "./components/LinkList/LinkList.service";
import {confirmHandle,cancelHandle} from "./components/LearningOptions/LearningOptions.service";
import {submitConfirmOption} from "./components/ConfirmOption/ConfirmList.service";


function ActionProvider({createChatBotMessage, setState, children, ...props}) {

    const createMessage = (message,widget) => {
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

    // const submitConfirmOption = () => {
    //     console.log("accountData", accountData.account);
    //
    //     const message = createChatBotMessage(
    //         "پرداخت اقساط شما با موفقيت انجام شد.",
    //     );
    //
    //     updateChatbotState(message);
    // }
    const updateChatbotState = (message) => {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }
    const removeAllMessageFromChatBot = () => {
        setState(() => ({
            messages: [""],
        }));

    }
    const greet = () => {
        const greetingMessage = createChatBotMessage("Hi, friend.");
        updateChatbotState(greetingMessage);
    }

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {children && React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        removeAllMessageFromChatBot,
                        updateChatbotState,
                        greet,
                        chooseAccount:(e,method)=>chooseAccount(e,method),
                        createMessage:(text,widget)=>createMessage(text,widget),
                        confirmHandle:(method)=>confirmHandle(method),
                        cancelHandle:(method)=>cancelHandle(method),
                        submitConfirmOption:(method)=>submitConfirmOption(method),




                    },
                });
            })}
        </div>);
};
export default ActionProvider
