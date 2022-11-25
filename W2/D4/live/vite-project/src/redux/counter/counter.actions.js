import {
  INC_COUNTER,
  DEC_COUNTER,
} from "./counter.types";

export const increment = (payload = 1) => ({ type: INC_COUNTER, payload });
export const decrement = (payload = 1) => ({ type: DEC_COUNTER, payload });

