import { useState, createContext, useContext } from "react";
import "./App.css";
import UserProvider, { UserContext } from "./UserContext";

// function Header(props) {
//   const [count, increment] = useContext(UserContext)

//   console.log("Header rendered")

//   return (
//     <header>
//       <h1>Hi! Count is {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </header>
//   );
// }

function Potato(props) {
  console.log("Potato rendered also");
  const { user, login, logout } = useContext(UserContext);

  return (
    <>
      <p>🥔</p>
      <p>User: {user}</p>
      <button onClick={login}>Log in</button>
    </>
  );
}

function App() {
  // const [count, setCount] = useState(0);

  // const increment = () => setCount(count + 1)

  return (
    // <UserContext.Provider value={[count, increment]}>
    <UserProvider>
      
      <Potato />
    </UserProvider>
    // </UserContext.Provider>
  );
}

export default App;
