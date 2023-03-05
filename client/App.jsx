import React from "react";
import { useState, useEffect, createContext } from "react";
import LoginPage from "./LoginPage";

const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={user}>
      <LoginPage user={user} />
      <div>
        <h1>{`Hello ${user}!`}</h1>
      </div>
    </UserContext.Provider>
  );
};

export default App;
