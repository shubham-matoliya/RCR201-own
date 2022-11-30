import React from "react";

const Page = ({ todos }) => {
  return (
    <div>
      <h1>All Todos</h1>
      <div>
        {todos.map((el) => (
          <div key={el.id}>{el.value}</div>
        ))}
      </div>
    </div>
  );
};

export default Page;

//server will call that async function
export async function getServerSideProps() {
  const response = await fetch("http://localhost:8080/todos");
  let data = await response.json();
  return { props: { todos: data } };
}
