import userContext from "./UserContext.jsx";
import React from "react";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
