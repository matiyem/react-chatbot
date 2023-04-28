import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    // <li key={link.id} className="link-list-item">
    //   <a
    //     href={link.url}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     className="link-list-item-url"
    //   >
    //     {link.text}
    //   </a>
    // </li>
    <button
      className="learning-option-button"
      key={link.id}
      onClick={link.url}
    >
      {link.text}
    </button>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;
