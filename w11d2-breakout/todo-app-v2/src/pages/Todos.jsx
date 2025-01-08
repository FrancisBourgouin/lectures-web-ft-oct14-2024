import TodoList from "../components/TodoList";

export default function Todos(props) {
  const { todos, updateTodo } = props;
  return (
    <main>
      <h1>Todos!</h1>
      <TodoList todos={todos} updateTodo={updateTodo} />
    </main>
  );
}
