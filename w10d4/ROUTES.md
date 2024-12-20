Some Blog!

Posts
Authors

# Backend

Rails (Namespacing / Resources)
Express

# Frontend

React

# Views vs. Routes

Views: Used in the frontend by SPA frameworks
Routes: Different HTTP routes

/api/authors JSON (GET / POST / PUT / DELETE)
/api/posts JSON


```jsx
  // http://localhost:3000/login


  const App = () => {
    const someMagicalFunctionThatGetsThePathInTheURL = () => {}

    const [view, setView] = useState("LOGIN")



    return(
      <header>
        <button onClick={() => setView("LOGIN")}>Login</button>
        <button onClick={() => setView("DASHBOARD")}>Dashboard</button>
      </header>
      <main>
        {view === "LOGIN" && <Login />}
        {view === "DASHBOARD" && <Dashboard />}
      </main>
    )
  }
```
