import { INC_COUNTER, DEC_COUNTER } from "./counter.types";

const initialState = {
  count: 0,
};
export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INC_COUNTER: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case DEC_COUNTER: {
      return {
        ...state,
        count: state.count - payload,
      };
    }

    default:
      return state;
  }
};
