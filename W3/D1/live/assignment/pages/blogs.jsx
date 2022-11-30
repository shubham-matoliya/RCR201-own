import React from "react";

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Blogs</h1>
      <div
        style={{
          display: "flex",
          width: "50vw",
          margin: "30px auto",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {blogs.map((el, i) => (
          <div key={el.id}>
            <b>Blog {i + 1}: </b>
            {el.blog}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

//server will call that async function
export async function getServerSideProps() {
  const response = await fetch("http://localhost:7980/blogs");
  let data = await response.json();
  return { props: { blogs: data } };
}
