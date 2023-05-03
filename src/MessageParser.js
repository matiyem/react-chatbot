// // MessageParser starter code in MessageParser.js

import React from 'react';

function MessageParser({children, actions,...props}){
    const parse = (message) => {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("حواله ملتی")) {
            actions.greet();
        }

        if (lowerCaseMessage.includes("javascript")) {
            actions.confirmHandle();
        }
    };
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                    props
                });
            })}
        </div>
    );
};
export default MessageParser;
