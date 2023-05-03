import React, {useEffect, useReducer} from 'react';
import './App.css';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import {UserContext, action as userAction, reducer as userReducer} from "./components/context/UserContext";

export default function App() {
    const [state, dispatch] = useReducer(userReducer, {});
    // useEffect(() => {
    //     debugger;
    //     // console.log('Component mounted');
    //     // window.document.getElementsByClassName('react-chatbot-kit-chat-input')[0].disabled = true
    // }, []);

    return (
        <div className="App">
            <UserContext.Provider value={userAction(state, dispatch)}>
                <header className="App-header">
                    <Chatbot className="chat-bot"
                             config={config}
                             messageParser={MessageParser}
                             actionProvider={ActionProvider}
                             custo
                             placeholderText='Input placeholder'
                    />
                </header>
            </UserContext.Provider>
        </div>

    );
}

