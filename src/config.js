import React from "react";

import LearningOptions from "./components/PardakhtGhest/LearningOptions/LearningOptions";
import LinkList from "./components/PardakhtGhest/LinkList/LinkList";
import ConfirmList from "./components/PardakhtGhest/ConfirmOption/ConfirmList";
import DestinationAccountNumber from "./components/HavaleMelati/DestinationAccountNumber";
import ChooseAccountHavaleMellati from "./components/HavaleMelati/ChooseAccountHavaleMellati";
import ConfirmHavaleMellati from "./components/HavaleMelati/ConfirmHavaleMellati";
import AmountHavale from "./components/HavaleMelati/AmountHavale";
import AllOperation from "./components/AllOperation/AllOperation";
import Receipt from "./components/HavaleMelati/Receipt";


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
    {
      widgetName: "allOperation",
      widgetFunc: (props) => <AllOperation {...props} />,

    },
    {
      widgetName: "receipt",
      widgetFunc: (props) => <Receipt {...props} />,

    },
  ],
};


export default config;
