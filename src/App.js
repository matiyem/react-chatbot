import React from 'react';
import './App.css';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import Chatbot from "react-chatbot-kit";
import config from "./config";


export default function  App() {

    return (
        <div className="App">
            <header  className="App-header">
                    <Chatbot className="chat-bot"
                        config={config}
                        actionProvider={ActionProvider}
                        messageParser={new MyChatbot()}
                    />
            </header>
        </div>

    );
}

