import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home(props) {
  const { todos, updateTodo, addTodo } = props;

  return (
    <main>
      <h1>Home!</h1>

      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} />
    </main>
  );
}
