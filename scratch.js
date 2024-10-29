const { todoListObj } = require("./w3d2/todo-list/data/todoData")

app.get("/todos", (req,res) => {
  // 
  const todoList = fetchAllTodos(todoObj)

  // Show the todos
})


// const result = fetchSingularTodo(todos, todoId)

// const todo = result.todo
// const error = result.error

const {todo, error} = fetchSingularTodo(todos, todoId)

if(error){
  // ...
}

todo