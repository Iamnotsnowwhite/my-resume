import React, { useState, ChangeEvent } from 'react';
import '/Users/guoguo/Desktop/my-resume/src/chatbox.css';

const ChatBox = () => {
    const [messages, setMessages] = useState<{ user: string, text: string }[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [username, setUsername] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim() && username.trim()) {
            setMessages([...messages, { user: username, text: inputMessage }]);
            setInputMessage('');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleClearMessages = () => {
        setMessages([]);
    };

    return (
        <div className="chat-box-container">
            <div className="chat-history">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className="chat-message">
                            <strong>{msg.user}</strong>
                            <span>{msg.text}</span>
                        </div>
                    ))
                ) : (
                    <div className="no-messages">No messages yet.</div>
                )}
            </div>

            <div className="chat-input-container">
                <div className="username-input">
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter your username..."
                    />
                </div>

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
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                    />
                    <div className="chat-input-buttons">
                        <label htmlFor="upload-button" className="image-upload-button">
                            Upload Image
                        </label>
                        <input
                            id="upload-button"
                            type="file"
                            onChange={(e) => console.log(e.target.files![0])}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>

                <button className="clear-button" onClick={handleClearMessages}>
                    Clear Chat
                </button>
            </div>
        </div>
    );
};


export default ChatBox;
