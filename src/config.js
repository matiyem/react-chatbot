import React from "react";

import LearningOptions from "./components/CartToCart/LearningOptions/LearningOptions";
import LinkList from "./components/CartToCart/LinkList/LinkList";
import ConfirmList from "./components/CartToCart/ConfirmOption/ConfirmList";
import DestinationAccountNumber from "./components/HavaleMelati/DestinationAccountNumber";
import ChooseAccountHavaleMellati from "./components/HavaleMelati/ChooseAccountHavaleMellati";
import ConfirmHavaleMellati from "./components/HavaleMelati/ConfirmHavaleMellati";
import AmountHavale from "./components/HavaleMelati/AmountHavale";
import {createChatBotMessage} from "react-chatbot-kit";


const config = {
  botName: "LearningBot",
  initialMessages: [
    // createChatBotMessage(null,{
    //   widget: "pardakhtGhest",
    // }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "pardakhtGhest",
      widgetFunc: (props) => {
        return <LearningOptions {...props} />
      },
    },
    {
      widgetName: "chooseAccountNumber",
      widgetFunc: (props) => {
        return <LinkList {...props} />
      },

    },
    {
      widgetName: "confirm",
      widgetFunc: (props) => <ConfirmList {...props} />,

    },
    {
      widgetName: "ChooseAccountHavaleMellati",
      widgetFunc: (props) => <ChooseAccountHavaleMellati {...props} />,

    },
    {
      widgetName: "getAccountNumberHavaleMellati",
      widgetFunc: (props) => <DestinationAccountNumber {...props} />,

    },
    {
      widgetName: "amountHavaleMellati",
      widgetFunc: (props) => <AmountHavale {...props} />,

    },
    {
      widgetName: "confirmHavaleMellati",
      widgetFunc: (props) => <ConfirmHavaleMellati {...props} />,

    },
  ],
};
function f() {
  
}

export default config;
