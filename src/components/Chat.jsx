import React from "react";
import Message from "./Message";
import { UserAuth } from "../context/UserContext";

const Chat = () => {
  const { messages } = UserAuth();
  return (
    <div>
      <div className="flex flex-col p-4 ">
        {messages &&
          messages.map((message) => {
            return <Message key={message.id} message={message}></Message>;
          })}
      </div>
    </div>
  );
};

export default Chat;
