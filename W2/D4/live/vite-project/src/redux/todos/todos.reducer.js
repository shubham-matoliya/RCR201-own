import { ADD_TODO, GET_TODO, UPDATE_TODO, DELETE_TODO } from "./todos.types";

const initialState = {
  todos: [],
};
export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO: {
      return {
        ...state,
        todos: payload,
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case UPDATE_TODO: {
      const updatedTodos = state.todos.map((el) => {
        if (el.id === payload.id)
          return {
            ...el,
            ...payload.changes,
          };
        return el;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case DELETE_TODO: {
      const filteredTodos = state.todos.map((el) => el.id != payload);
      return {
        ...state,
        todos: filteredTodos,
      };
    }
    default:
      return state;
  }
};
