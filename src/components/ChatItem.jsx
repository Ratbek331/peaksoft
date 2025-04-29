import React from "react";

const ChatItem = ({ text, time }) => {
  return (
    <div className="chat-item">
      {text} <span className="chat-time">({time})</span>
    </div>
  );
};

export default ChatItem;
