import React, { useEffect, useState } from "react";
import { getTodos } from "../api";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Todo } from "../constants";
function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const onUpdate = (updatedTodo: Todo) => {
    let updatedTodos = todos.map((el) => {
      if (el.id === updatedTodo.id) return updatedTodo;
      else return el;
    });
    setTodos(updatedTodos);
  };
  useEffect(() => {
    getTodos().then((res) => setTodos(res));
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAdd={onAdd} />
      {todos.map((el) => (
        <TodoItem key={el.id} {...el} />
      ))}
    </div>
  );
}

export default TodoApp;
