import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { getTodos } from "../redux/actions";

const TodoApp = () => {
  const todos = useSelector((store) => {
    console.log(store);
    return store.todos;
  });
  const dispatch = useDispatch();
  //useSelector gives us the access to redux store from which we can access the values directly. It can be access by store.getState().todos also but it will not rerender our components hence will not update the state. To update the state we have to use hooks or we can use these functions in custom hooks.
  // useDispatch is only used to give dispatch function

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </div>
  );
};

export default TodoApp;
