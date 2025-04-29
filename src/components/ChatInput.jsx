import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
  
      const newMessage = {
        id: Math.random().toString(36).substring(2, 9),
        text: text,
        time: `${hours}:${minutes}`, 
        
      };
      onSend(newMessage);
      setText("");
    }
  };
  

  return (
    <div className="chat-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Сообщение...."
      />
      {text.trim() && <button onClick={handleSend}>Отправить</button>}
    </div>
  );
};

export default ChatInput;
