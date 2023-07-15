import React from "react";
import { UserAuth } from "../context/UserContext";

const Message = ({ message }) => {
  const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
  };

  const { user } = UserAuth();

  const messageClass =
    message.uid === user.uid ? `${style.sent}` : `${style.received}`;

  return (
    <div
      className={`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full relative ${messageClass}`}
    >
      <h1 className="absolute mt-[-4rem]">{user.displayName}</h1>
      <h1>{message.text}</h1>
    </div>
  );
};

export default Message;
