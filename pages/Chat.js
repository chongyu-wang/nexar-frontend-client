import React, { useState } from 'react';
import Header from './components/Header';

function ChatMessage(message) {
    return (
        <div className={`chat-message ${message.user == "gpt" && "chatgpt"}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user == "gpt" && "chatgpt"}`}>
                </div>
                <div className="message">
                    {message.message}
                </div>
            </div>
        </div>
    )
}

export default function() {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState('');
    const [chatLog, setChatLog] = useState([]);

    
    const handleSubmit = (event) => {
        event.preventDefault();

        setChatLog(prevChatLog => [...prevChatLog, { user: "me", message: inputValue }]);
        setInputValue("");

        setResponseData("Querying...");
        fetch('http://localhost:8080/api/home', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: inputValue }),
        })
            .then((response) => response.json())
                .then((data) => {
                    console.log(data.response);
                    setResponseData(data.response);
                    setChatLog(prevChatLog => [...prevChatLog, { user: "gpt", message: data.response }]);
                }
            )
            .catch((error) => {
                console.error('Error:', error);
            });

    };

    return (
        <div className = "Chat">
            <Header/>
            <div className="ChatContainer">
                <aside className="sidemenu">
                    <div className="side-menu-button">
                        Enter Query
                    </div>
                </aside>
                <section className="chatbox">
                    <div className="chat-log">
                        {chatLog.map((message, index) => (
                            <ChatMessage message={message.message} user={message.user} key={index}/>
                        ))}
                    </div>

                    <div className="chat-input-holder">
                        <form onSubmit={handleSubmit}>
                            <input 
                            className="chat-input-textarea" 
                            placeholder="Type in your query" 
                            rows="1"
                            value = {inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            >
                            </input>
                        </form>
                    </div>
                </section>
            </div>
        </div>
  )
}
