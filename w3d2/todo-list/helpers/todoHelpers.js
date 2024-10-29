const fetchAllTodos = (todosObj) => {
  if (todosObj) {
    const todoList = Object.values(todosObj);

    return { todos: todoList, error: null };
  }

  return { error: "No valid todo list", todos: null };
};

const fetchSingularTodo = (todosObj, todoId) => {
  if (todosObj[todoId]) {
    return { todo: todosObj[todoId], error: null };
  }

  return { todo: null, error: "Todo not found" };
};

const createTodo = (todosObj, task, description) => {
  if (!task || !description) {
    return { error: "Missing filed", todo: null };
  }
  const biggestId = Object.keys(todosObj).sort((a, b) => b - a)[0]
  const id = Number(biggestId) + 1;

  const newTodo = {
    id,
    task,
    description,
    dateCreated: new Date().toLocaleDateString(),
  };

  todosObj[id] = newTodo;

  return { todo: newTodo, error: null };
};

module.exports = {fetchAllTodos, fetchSingularTodo, createTodo}