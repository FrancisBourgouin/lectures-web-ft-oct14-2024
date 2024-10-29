# TODO LIST - THE PLAN !

## Functionality

- View all todos
- View a todo
- Add a todo
- Remove a todo
- Edit/Update a todo (completion / text)

## Data structure

### Todo Item

```jsx
const todoItem = {
  id: 1,
  task: "Do the laundry",
  description: "Don't forget to separate the whites",
  isComplete: false,
  dateCreated: "2023-06-13",
};
```

### Todo List

Object of objects: "Instantly" access any todoItem, easily (Great!) Harder to iterate over (Bad :/ )
Array of objects: Easy to iterate, hard to access a specific element

```jsx
const todoListArr = [todoItem, todoItem]; // 1 x
todoListArr.find(); // that will return the first one that matches
const todoListObj = { id: todoItem, id: todoItem, id: todoItem }; // 2 xxxxxxxx
```

## Seed

```jsx
const todo1 = {
  id: 1,
  task: "Do the laundry",
  description: "Don't forget to separate the whites",
  isComplete: false,
  dateCreated: "2024-06-13",
};
const todo2 = {
  id: 2,
  task: "Make lunch",
  description: "No tomatoes please",
  isComplete: true,
  dateCreated: "2024-06-12",
};
const todo3 = {
  id: 3,
  task: "LHL Homework",
  description: "You'll be done when you'll be done, which is in probably 12 weeks",
  isComplete: false,
  dateCreated: "2024-05-29",
};

const todoListObj = { 1: todo1, 2: todo2, 3: todo3 };
const todoListArr = [todo1, todo2, todo3];
```

## Actions

### View all todos (READ)

We need to iterate over every todoItem

```jsx
const fetchAllTodos = (todosObj) => {
  if (todosObj) {
    const todoList = Object.values(todosObj);

    return { todos: todoList, error: null };
  }

  return { error: "No valid todo list", todos: null };
};
```

### View a todo (READ)

We need to fetch to object of a singular todoItem

```jsx
const fetchSingularTodo = (todosObj, todoId) => {
  if (todosObj[todoId]) {
    return { todo: todosObj[todoId], error: null };
  }

  return { todo: null, error: "Todo not found" };
};
```

### Add a todo (CREATE)

We need to create a todo, task and description string to build it

```jsx
const createTodo = (todosObj, task, description) => {
  if (!task || !description) {
    return { error: "Missing filed", todo: null };
  }

  const id = Object.keys(todosObj).sort((a, b) => b - a)[0] + 1;

  const newTodo = {
    id,
    task,
    description,
    dateCreated: new Date().toLocaleDateString(),
  };

  todosObj[id] = newTodo;

  return { todo: newTodo, error: null };
};
```

### Remove a todo (DELETE)

Deletes a todo using its id

```jsx

```

### Toggle todo complete (UPDATE)

```jsx

```

### Edit/Update a todo (completion / text)

## Events CRUD (GET POST PUT DELETE ...)

## Routes & Events

## Packages

- Express (https://expressjs.com/)
- UUID (https://www.npmjs.com/package/uuid)
- EJS (https://www.npmjs.com/package/ejs)
- Nodemon (https://www.npmjs.com/package/nodemon)
