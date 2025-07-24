import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {
  return (
    <UserContextProvider>
      <div className="user-context-provider">
        <h1>React with Chai and Share is Important</h1>
        <div className="card">
          <Login />
        </div>
        <div className="card">
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
