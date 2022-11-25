import { ADD_TODO, GET_TODO, UPDATE_TODO, DELETE_TODO } from "./actionType";

export const getTodos = () => ({
  type: GET_TODO,
  payload: [
    { id: 1, isCompleted: false, value: "Memory Todo 1" },
    { id: 2, isCompleted: false, value: "Memory Todo 2" },
    { id: 3, isCompleted: false, value: "Memory Todo 3" },
    { id: 4, isCompleted: false, value: "Memory Todo 4" },
  ],
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (id, changes) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    changes,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
