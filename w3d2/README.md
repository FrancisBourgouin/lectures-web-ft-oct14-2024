# W3D2 - Lecture - CRUD with Express

## Today's menu

- Implementing CRUD operations in Express
- Should we render or redirect?
- Forms & Links
- DevTools

## CRUD Operation

For each resource, we want to:

- create => creating a new resource
- read => getting a resource
- update => changing a resource
- delete => deleting a resource

## BREAD Operation

- Browse
- Read
- Edit
- Add
- Delete

### HTTP methods

What language does a client use to makes request to the server ? HTTP

The HTTP protocol gives us verbs that we can use:

- Create => Create a new ressource => Post
- Read => Get a resource => Get
- Update => Change a resource => Put
- Delete => Delete a resource => Delete

However we will use only GET & POST for now.

### Scoping information

- collections vs single entity
- which one?

### End Points

We design design the following end points for our todos app:

| Action                               | http verb | end point                  |
| ------------------------------------ | --------- | -------------------------- |
| List all todos                       | GET       | get    '/todos'            |
| Get a specific todo                  | GET       | get    '/todos/:id'        |
| Display the new form                 | GET       | get    '/todos/new         |
| Create a new todo                    | POST      | post   '/todos             |
| Display the form for updating a todo | GET       | get    '/todos/:id/update' |
| Update the todos                     | PUT       | put    '/todos/:id         |
| Deleting a specific todo             | DELETE    | delete '/todos:id'         |

#### Nested Resources

You may need to access a nested resources. For example, you need to create a new comment.

| Action               | http verb | end point                 |
| -------------------- | --------- | ------------------------- |
| Create a new comment | POST      | post '/todos/:id/comments |
