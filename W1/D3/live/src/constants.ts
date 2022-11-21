// TodoType
export enum TodoType {
  Learned = "learned",
  Learning = "learning",
  Pending = "pending",
  Revision = "revision",
}

export type Todo = {
  id: number;
  type: TodoType;
  message: string;
  likes: number;
};

export const ColorMap: Record<TodoType, string> = {
  learned: "lightgreen",
  learning: "lightyellow",
  pending: "lightorange",
  revision: "lightblue",
};
