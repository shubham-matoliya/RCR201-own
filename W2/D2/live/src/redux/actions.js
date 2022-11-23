import { INC, DEC, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actiontype.js";
import { v4 } from "uuid";

export const increment = (payload = 1) => ({ type: INC, payload: +payload });
export const decrement = (payload = 1) => ({ type: DEC, payload: +payload });

export const addTodo = (message) => ({
  type: ADD_TODO,
  payload: {
    id: v4(),
    message,
    isCompleted: false,
  },
});

export const updateTodo = (id, changes) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    ...changes,
  },
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
