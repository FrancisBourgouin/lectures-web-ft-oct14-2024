function TodoListItem(props) {
  const { isCompleted, name, id, updateTodo } = props;

  return (
    <li>
      <span>{name}</span>
      {!isCompleted && <button onClick={() => updateTodo(id, "toggle")}>Complete</button>}
      {isCompleted && (
        <>
          <button onClick={() => updateTodo(id, "toggle")}>Fail</button>
          <button onClick={() => updateTodo(id, "delete")}>Delete</button>
        </>
      )}
    </li>
  );
}

export default function TodoList(props) {
  const { todos, updateTodo } = props;

  const parsedTodos =
    Array.isArray(todos) && todos.map((todo) => <TodoListItem key={todo.id} {...todo} updateTodo={updateTodo}/>);

  return <ul>{parsedTodos}</ul>;
}
