import React from "react";
import { updateTodo } from "../api";
import { ColorMap, Todo } from "../constants";
interface TodoItemProps extends Todo {
  onUpdate: (todo: Todo) => void;
  // interface is used to add more types in our existing type
}
function TodoItem(props: TodoItemProps) {
  const onClick = () => {
    updateTodo({ id: props.id, likes: props.likes + 1 });
  };
  return (
    <div style={{ padding: "5px", backgroundColor: ColorMap[props.type] }}>
      {props.message} - {props.likes}
    </div>
  );
}

export default TodoItem;
