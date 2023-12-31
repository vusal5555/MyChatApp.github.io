import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import SendMessage from "./components/SendMessage";
import { UserAuth } from "./context/UserContext";

const App = () => {
  const { user } = UserAuth();
  return (
    <div className="fixed w-full p-4 overflow-hidden mb-5 lg:p-0 ">
      <div className="max-w-[728px] m-auto mt-5 mb-5 lg:mt-10 bg-gray-300 overflow-hidden">
        <div className="flex flex-col h-[90vh] w-full overflow-y-scroll scrollbar-hide">
          <Navbar></Navbar>
          {user && <Chat></Chat>}
          {user && <SendMessage></SendMessage>}
        </div>
      </div>
    </div>
  );
};

export default App;
