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
  id: 6,
  task: "LHL Homework",
  description: "You'll be done when you'll be done, which is in probably 12 weeks",
  isComplete: false,
  dateCreated: "2024-05-29",
};

const todoListObj = { 1: todo1, 2: todo2, 6: todo3 };
const todoListArr = [todo1, todo2, todo3];

module.exports = { todoListArr, todoListObj };
