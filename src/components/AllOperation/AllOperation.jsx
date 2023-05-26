import React from "react";

import "./AllOperation.css";

const AllOperation = (props) => {
  const options = [
    {
      text: "حواله ملتی",
      handler:()=> props.actionProvider.AllOperationHavaleMellati(props),
      id: 1,
    },
    { text: "Data visualization", handler: () => {}, id: 2 },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default AllOperation;
