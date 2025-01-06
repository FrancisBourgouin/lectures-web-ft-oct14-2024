import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider(props) {
  const [loading, setLoading] = useState(false)

  const [user, setUser] = useState(null);

  const login = () => setUser("User 1");

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

