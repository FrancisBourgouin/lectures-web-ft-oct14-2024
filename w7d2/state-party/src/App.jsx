import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTasks = [
    { id: 1, name: "Play deadlock, after work, of course" },
    { id: 2, name: "Eat potatoes" },
  ];

  // JS Classes (Getters / Setters)
  const [tasks, setTasks] = useState(initialTasks); // adding a state
  let [count, setCount] = useState(0); //add a stateful value

  const addGenericTask = () => {
    const newTask = { id: tasks.length + 1, name: "some generic task" };

    setTasks([...tasks, newTask]);
    // Immutability in React
    // tasks.push(newTask)
    // setTasks(tasks);
  };

  console.log("Rendered!");

  const incrementCounter = () => {
    setCount(count)
    // React does a shallow check to see if it needs updating

  };

  return (
    <>
      <header>
        <h1>Some app!</h1>
      </header>
      <main>
        <h1>Some content here!</h1>
        <SomeList tasks={tasks} />
        <button onClick={addGenericTask}>Add task!</button>

        <p>The count is {count}</p>
        <button onClick={incrementCounter}>Increment the counter</button>
      </main>
    </>
  );
}

function SomeList(props) {
  const { tasks } = props;

  const parsedTasks =
    Array.isArray(tasks) && tasks.map((task) => <SomeListItem key={task.id} {...task} />);

  return <ul>{parsedTasks}</ul>;
}

function SomeListItem(props) {
  const { name } = props;

  return <li>{name}</li>;
}

export default App;
