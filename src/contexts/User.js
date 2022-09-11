import React, { createContext } from "react";
export const UserContext = createContext(null);

export const UserProvider = (props) => {
  // Make request to the server and get user
  const user = {
    name: "Jenis Rai",
    username: "_middleware_",
    email: "superadmin@gmail.com",
  };
  const account = {
    isLoggedIn: !!user,
    currentUser: user,
    user,
  };

  return (
    <UserContext.Provider value={{ ...account }}>
      {props.children}
    </UserContext.Provider>
  );
};
