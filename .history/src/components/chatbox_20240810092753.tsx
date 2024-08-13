const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string, content: string, type: string }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '' || image) {
      const newMessages = [];

      if (inputValue.trim() !== '') {
        newMessages.push({
          sender: senderName || 'Anonymous',
          content: inputValue,
          type: 'text',
        });
      }

      if (image) {
        newMessages.push({
          sender: senderName || 'Anonymous',
          content: URL.createObjectURL(image),
          type: 'image',
        });
      }

      setMessages([...messages, ...newMessages]);
      setInputValue('');
      setImage(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <strong>{message.sender}:</strong>
            {message.type === 'text' ? (
              <p>{message.content}</p>
            ) : (
              <img src={message.content} alt="sent" className="chat-image" />
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here..."
        />
        <div className="chat-input-buttons">
          <label className="image-upload-button">
            Upload Image
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;