import { store } from "./redux/store.js";
import { increment, decrement, addTodo, updateTodo } from "./redux/actions.js";
console.log(store.getState().count);
store.dispatch(increment(10));
store.dispatch(decrement(5));
store.dispatch(increment(15));
store.dispatch(decrement(2));

console.log(store.getState());

store.dispatch(decrement(8));
console.log(store.getState());

store.dispatch(addTodo("Hello There"));
store.dispatch(addTodo("How are you all"));
console.log(store.getState());

let todo1 = store.getState().todo[0];
store.dispatch(updateTodo(todo1.id, { isCompleted: true }));
console.log(store.getState());

let todo2 = store.getState().todo[1];
store.dispatch(updateTodo(todo2.id));
console.log(store.getState());
