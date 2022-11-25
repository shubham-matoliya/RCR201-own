import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions";
import { UPDATE_TODO } from "../redux/actionType";

const TodoItem = ({ id, value, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(updateTodo(id, { isCompleted: !isCompleted }))}
    >
      {value}= {isCompleted ? "Completed" : "InComplete"}
    </div>
  );
};

export default TodoItem;
