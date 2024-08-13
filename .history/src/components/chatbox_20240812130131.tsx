import React, { useState } from 'react';
import '/Users/guoguo/Desktop/my-resume/src/chatbox.css';

const ChatBox = () => {
    const [messages, setMessages] = useState([
        { user: 'Alice', text: 'Hello, how are you?' },
        { user: 'Bob', text: 'I am fine, thank you!' }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [username, setUsername] = useState('You');

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { user: username, text: inputMessage }]);
            setInputMessage('');
        }
    };

    return (
        <div className="chat-box-container">
            <div className="chat-history">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">
                        <strong>{msg.user}</strong>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>

            <div className="chat-input-container">
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className="chat-message">
                            <strong>{msg.user}</strong>
                            <span>{msg.text}</span>
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <div className="chat-input-buttons">
                        <label htmlFor="upload-button" className="image-upload-button">
                            Upload Image
                        </label>
                        <input
                            id="upload-button"
                            type="file"
                            onChange={(e) => console.log(e.target.files[0])}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
