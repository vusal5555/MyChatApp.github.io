import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase";

const UserContext = createContext();
const provider = new GoogleAuthProvider();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [messages, setMessages] = useState([]);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (doc) => {
      let messages = [];
      doc.forEach((item) => {
        messages.push({ ...item.data(), id: item.id });
      });
      setMessages(messages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signInWithGoogle, logOut, user, messages }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
