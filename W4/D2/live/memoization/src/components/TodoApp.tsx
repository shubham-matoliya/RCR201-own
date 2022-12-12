import React, { useCallback, useState } from "react";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

type Todo = {
  id: number;
  content: string;
  isCompleted: boolean;
};

const TodoApp = () => {
  console.log("TodoApp");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, content: "hello", isCompleted: false },
    { id: 2, content: "welcome", isCompleted: true },
  ]);

  const onAdd = (content: string) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        content,
        isCompleted: false,
      },
    ]);
  };

  // remove strict mode to see expected results in console
  const toggleStatus = useCallback((id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  }, []);
  return (
    <div>
      Todos : {todos.length}
      <div>
        <TodoInput onAdd={onAdd} />
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} toggleStatus={toggleStatus} />
      ))}
    </div>
  );
};

export default React.memo(TodoApp);
//if we write a function inside memo then it will nor rerender till its value chages
//watch documentation
//memo is not hook it is higher order component
// using this child component will not rerender if a parent component rerender till props of child component changes
