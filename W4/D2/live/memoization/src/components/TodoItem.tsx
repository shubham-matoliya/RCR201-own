import React from "react";

type TodoItemProp = {
  id: number;
  content: string;
  isCompleted: boolean;
  toggleStatus: (id: number) => void;
};

const TodoItem = ({ id, content, isCompleted, toggleStatus }: TodoItemProp) => {
  console.log("Todoitem");
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      onClick={() => toggleStatus(id)}
    >
      <div>
        {content} - {isCompleted ? "Done" : "Not Done"}
      </div>
    </div>
  );
};

const areEqual = (prevProps: TodoItemProp, nextProps: TodoItemProp) => {
  if (
    prevProps.id != nextProps.id ||
    prevProps.isCompleted != nextProps.isCompleted ||
    prevProps.content != nextProps.content
  ) {
    return false;
  }
  return true;
};

export default React.memo(TodoItem);
// export default React.memo(TodoItem,areEqual);

// if there are todoItems present already then on adding new TodoItem they should not rerender for that we are putting TodoItem component in React.memo()
// here inside memo we passed an another function because whenever we add any todo all to get render while only that which is added should render hence we write an additional callback function inside it which tell memo that id prev props are changed then only render them else do not render them

// there is unexpected problem which can occur due to memoization that's why we dont memoize those components whose props keep changing we can memoize static components.
// we memoize stateless components only

//line38 will work same as useCallback do in TodoApp
