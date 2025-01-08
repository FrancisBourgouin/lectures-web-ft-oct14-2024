import TodoList from "../components/TodoList";

export default function DeletedTodos(props) {
  const { todos, updateTodo } = props;

  return (
    <main>
      <h1>DeletedTodos!</h1>
      <TodoList todos={todos} updateTodo={updateTodo} />
    </main>
  );
}
