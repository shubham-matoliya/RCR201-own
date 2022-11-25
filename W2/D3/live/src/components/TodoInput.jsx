import React from "react";
import { v4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: v4(), value, isCompleted: false }));
    setValue("");
  };
  //npm i uuid import {v4}
  return (
    <form onSubmit={submitHandler}>
      <input
        type={"text"}
        placeholder="Type Something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type={"submit"} />
    </form>
  );
};

export default TodoInput;
