import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.jsx";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="pasword"
      />
      <button onClick={handleSubmit} className="bg-red-500 px-2 rounded-md">
        Submit
      </button>
    </div>
  );
}

export default Login;
