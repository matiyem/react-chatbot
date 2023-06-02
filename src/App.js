import React, {useReducer} from 'react';
import './App.css';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import {action as userAction, reducer as userReducer, UserContext} from "./components/context/UserContext";

export default function App() {
    console.debug('app.render2');

    const [state, dispatch] = useReducer(userReducer, {});

    return (
        <div className="App">
            <header className="App-header">
                <UserContext.Provider value={userAction(state, dispatch)}>
                    <Chatbot className="chat-bot"
                             config={config}
                             messageParser={MessageParser}
                             actionProvider={ActionProvider}
                             placeholderText='Input placeholder'

                    />
                </UserContext.Provider>
            </header>
        </div>

    );
}

