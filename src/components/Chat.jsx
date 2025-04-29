import React from "react";
import ChatItem from "./ChatItem";

const Chat = ({ messages }) => {
  return (
    <div className="chat">
      {messages.map((message) => (
        <ChatItem key={message.id} text={message.text} time={message.time} />
      ))}
    </div>
  );
};

export default Chat;
