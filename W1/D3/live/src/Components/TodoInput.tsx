import { trace } from "console";
import React, { useState } from "react";
import { addTodos } from "../api";
import { Todo, TodoType } from "../constants";

type TodoInputProps = {
  onAdd: (todo: Todo) => void;
};
function TodoInput(props: TodoInputProps) {
  const { onAdd } = props;
  const [value, setValue] = useState<string>("");
  //we will get type of event by hovering on its respective html element remove handler from it
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = await addTodos(value, TodoType.Learned);
    onAdd(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type={"text"} placeholder="Type Here..." onChange={handlechange} />
      <select></select>
      <button type="submit">ADD</button>
    </form>
  );
}

export default TodoInput;
