import React, { useState } from 'react';
import '/Users/guoguo/Desktop/my-resume/ChatBox.css';

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="chat-box-container">
            <div className="chat-history">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="chat-input-container">
                <div className="chat-messages">
                    {/* 当前聊天对话显示在这里 */}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                    />
                    <div className="chat-input-buttons">
                        <button onClick={handleSendMessage}>Send</button>
                        <label className="image-upload-button">
                            Upload Image
                            <input type="file" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
