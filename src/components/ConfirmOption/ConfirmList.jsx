import React from "react";

import "./ConfirmList.css";

const ConfirmList = (props) => {
  // console.log(props);
  const options = [
    {
      text: "بله",
      handler: ()=>props.actionProvider.submitConfirmOption(props),
      id: 1,
    },
    {
      text: "خیر",
      handler: ()=>props.actionProvider.cancelHandle(props),
      id: 2,
    },

  ];
  const linkMarkup = options.map((link) => (

    <button
      className="learning-option-button"
      key={link.id}
      onClick={link.handler}
    >
      {link.text}
    </button>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default ConfirmList;
