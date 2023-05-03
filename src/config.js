import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";
import ConfirmList from "./components/ConfirmOption/ConfirmList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("موعد پرداخت قسط شما فرارسیده آیا مایل به پرداخت میباشد؟", {
      widget: "pardakhtGhest",
    }),
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
  ],
};

export default config;
