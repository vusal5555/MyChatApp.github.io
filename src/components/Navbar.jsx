import React from "react";
import { UserAuth } from "../context/UserContext";

const Navbar = () => {
  const { user, signInWithGoogle, logOut } = UserAuth();
  return (
    <div className="bg-gray-500 flex justify-between items-center p-4 text-white h-20">
      <h1 className="text-3xl font-bold">Chat App</h1>

      <div>
        {user ? (
          <button
            onClick={() => logOut()}
            className="px-4 py-2 bg-gray-400 text-white"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => signInWithGoogle()}
            className="px-4 py-2 bg-gray-400 text-white"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
