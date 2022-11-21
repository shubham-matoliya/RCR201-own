import axios, { AxiosResponse } from "axios";
import { Todo, TodoType } from "./constants";

//get function
export const getTodos = async (): Promise<Todo[]> => {
  const response: AxiosResponse<Todo[]> = await axios.get(
    `http://localhost:8900/todos`
  );
  return response.data;
};

//add function
export const addTodos = async (
  message: string,
  type: TodoType
): Promise<Todo> => {
  const response: AxiosResponse<Todo> = await axios.post(
    `http://localhost:8900/todos`,
    {
      message,
      type,
      likes: 0,
    }
  );
  return response.data;
};

//update function
export const updateTodo = async (changedTodo: Todo): Promise<Todo[]> => {
  const response: AxiosResponse<Todo[]> = await axios.patch(
    `http://localhost:8900/todos/${changedTodo.id}`,
    {
      ...changedTodo,
    }
  );
  return response.data;
};
