import { INC, DEC, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actiontype.js";
let initialState = { count: 0, todo: [] };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case DEC: {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    }
    case UPDATE_TODO: {
      {
        let updatedTodos = state.todo.map((el) => {
          if (el.id === action.payload.id) return { ...el, ...action.payload };
          return el;
        });
        return { ...state, todo: updatedTodos };
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        todo: state.todo.filter((el) => el.id != action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
