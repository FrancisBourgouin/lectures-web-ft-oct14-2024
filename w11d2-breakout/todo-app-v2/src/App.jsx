import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { todos as initialTodos } from "./data/todos";

import "./App.scss";

import Home from "./pages/Home";
import Todos from "./pages/Todos";
import DeletedTodos from "./pages/DeletedTodos";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const todoList = Object.values(todos);
  const navigate = useNavigate()

  const addTodo = (formData) => {
    const newTodo = {
      id: Object.values(todos).length + 1,
      name: formData.name,
      isCompleted: false,
      isDeleted: false,
    };

    setTodos({ ...todos, [newTodo.id]: newTodo });
  };

  const updateTodo = (todoId, action) => {
    const updatedTodo = { ...todos[todoId] };

    if (action === "toggle") {
      updatedTodo.isCompleted = !updatedTodo.isCompleted;
    }

    if (action === "delete") {
      updatedTodo.isDeleted = true;
    }

    setTodos({ ...todos, [todoId]: updatedTodo });
    updatedTodo.isDeleted && navigate("/todos/deleted")
  };

  const generateRandomPath = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const path = ["/", "/todos", "/todos/deleted"][randomIndex];
    navigate(path)
  };

  return (
    <>
      <header>
        <h1>Super Todo App of Destiny</h1>
        <nav>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/todos"}>All</Link>
          </li>
          <li>
            <Link to={"/todos/deleted"}>Deleted</Link>
          </li>
          {/* <li>
            <Link to={}>I'm feeling lucky</Link>
          </li> */}
          <button onClick={generateRandomPath}>I'm feeling super lucky!</button>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              todos={todoList.filter((todo) => !todo.isDeleted)}
              updateTodo={updateTodo}
              addTodo={addTodo}
            />
          }
        />
        <Route
          path="/todos"
          element={<Todos todos={todoList} updateTodo={updateTodo} />}
        />
        <Route
          path="/todos/deleted"
          element={
            <DeletedTodos
              todos={todoList.filter((todo) => todo.isDeleted)}
              updateTodo={updateTodo}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

// VIEWS VS ROUTES
