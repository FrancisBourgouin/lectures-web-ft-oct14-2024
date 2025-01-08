import { useState } from "react";
import { todos as initialTodos } from "./data/todos";
import TodoForm from "./components/TodoForm";

import "./App.scss";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const todoList = Object.values(todos);

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
  };

  const [view, setView] = useState("home");

  const updateView = (newView) => {
    console.log("'NAVIGATING' to the new view", newView);
    setView(newView);
  };

  const linkToHome = (event) => {
    event.preventDefault();
    updateView("home");
  };
  const linkToAll = (event) => {
    event.preventDefault();
    updateView("all");
  };
  const linkToDeleted = (event) => {
    event.preventDefault();
    updateView("deleted");
  };

  const filteredList = view === "deleted" ? todoList.filter((todo) => todo.isDeleted) : todoList

  return (
    <>
      <header>
        <h1>Super Todo App of Destiny</h1>
        <nav>
          <li>
            <a onClick={linkToHome} href="/">
              Home
            </a>
          </li>
          <li>
            <a onClick={linkToAll} href="/todos">
              All todos
            </a>
          </li>
          <li>
            <a onClick={linkToDeleted} href="/todos/deleted">
              Deleted todos
            </a>
          </li>
        </nav>
      </header>
      <main>
        {view === "home" && <TodoForm onSubmit={addTodo} />}
        <TodoList todos={filteredList} updateTodo={updateTodo} />
      </main>
    </>
  );
}

export default App;

// VIEWS VS ROUTES
