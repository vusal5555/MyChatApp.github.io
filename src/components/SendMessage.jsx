import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { UserAuth } from "../context/UserContext";
import { db, auth } from "../firebase";

const SendMessage = () => {
  const [input, setInput] = useState("");

  const { user } = UserAuth();

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input === "") {
      alert("Please enter a valid message");
      return;
    }

    const { displayName, uid } = user;
    await addDoc(collection(db, "messages"), {
      name: displayName,
      text: input,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <form onSubmit={sendMessage} className="w-full max-w-[728px] flex text-xl">
      <input
        className="w-[80%] md:w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="w-[20%] md:w-[20%] bg-green-500 text-sm lg:text-md">
        Send Message
      </button>
    </form>
  );
};

export default SendMessage;
