const express = require("express");
const { todoListObj } = require("./data/todoData");
const { fetchAllTodos, fetchSingularTodo, createTodo } = require("./helpers/todoHelpers");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Hey App! If I have a HTTP GET request that asks for the path of /, please do the following
app.get("/", (req, res) => {
  res.render("index");
});

// GET / POST / PUT / DELETE / ... / PATCH ...
// GET ALL TODOS : /todos (GET)
// GET A TODO    : /todos/:todoId (GET)
// CREATE A TODO : /todos (POST)
// UPDATE A TODO : /todos/:todoId/update (PUT) (POST)
// DELETE A TODO : /todos/:todoId/delete (DELETE) (POST)

app.get("/todos", (req, res) => {
  // ENTER CODE HERE
  const { todos, error } = fetchAllTodos(todoListObj);

  if (error) {
    return res.status(418).send("OH NO :(");
  }

  const templateVars = { todos };
  return res.render("todos", templateVars);
});

app.get("/todos/new", (req, res) => {
  return res.render("new-todo");
});

app.get("/todos/:todoId", (req, res) => {
  // ENTER CODE HERE
  const todoId = req.params.todoId;

  const { todo, error, wdokwdodko } = fetchSingularTodo(todoListObj, todoId);
  console.log(todo, error, wdokwdodko);

  if (error) {
    console.log(error);
    return res.status(418).send("OH NO :(");
  }

  const templateVars = { todo };
  return res.render("todo", templateVars);
  // const result = fetchSingularTodo(todoListObj, todoId)
  // const todo = result.todo
  // const error = result.error
});

app.post("/todos", (req, res) => {
  console.log(req.body)

  // const task = req.body.task
  // const description = req.body.description

  const {task, description} = req.body

  const {todo, error} = createTodo(todoListObj, task, description)

  if(error){
    console.log(error)
    res.send("OH NO")
  }

  return res.redirect(`/todos/${todo.id}`)
});

app.post("/api/todos", (req, res) => {
  console.log(req.body)

  // const task = req.body.task
  // const description = req.body.description

  const {task, description} = req.body

  const {todo, error} = createTodo(todoListObj, task, description)

  if(error){
    console.log(error)
    res.send("OH NO")
  }

  return res.status(201).json(todo)
});

app.post("/todos/:todoId/update", (req, res) => {
  // ENTER CODE HERE
  const todoId = req.params.todoId

  const todo = todoListObj[todoId]

  if(!todo){
    console.log("Todo id doesn't exist")
    return res.status(418).send("OH NO :(")
  }

  todo.isComplete = !todo.isComplete

  return res.redirect(`/todos/${todoId}`)
});
app.post("/todos/:todoId/delete", (req, res) => {
    // ENTER CODE HERE
    const todoId = req.params.todoId

    const todo = todoListObj[todoId]
  
    if(!todo){
      console.log("Todo id doesn't exist")
      return res.status(418).send("OH NO :(")
    }
  
    delete todoListObj[todoId]
  
    return res.redirect(`/todos`)
});

app.listen(3000, () => {
  console.log("Server is ready!");
});
