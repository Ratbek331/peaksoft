import React, { useState } from "react";
import UserInfo from "./UserInfo";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import "./index.css";

const App = () => {
  const [messages, setMessages] = useState([]);

  const logHandlerItem = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="app">
      <UserInfo />
      <Chat messages={messages} />
      <ChatInput onSend={logHandlerItem} />
    </div>
  );
};

export default App;
