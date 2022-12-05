import { useRouter } from "next/router";
import React from "react";

const Page = ({ blog }) => {
  // for reading parameters of url
  const router = useRouter();
  return (
    <div>
      <h3 onClick={() => router.back()}>GO BACK</h3>
      <h1>Page: {router.query.id}</h1>
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
    </div>
  );
};

export default Page;

// export async function getServerSideProps(context) {
//    context has many parameters inside it but we require only query and params
//   const {
//     query: { id },
//   } = context;
//   let response = await fetch(`http://localhost:8080/blogs/${id}`);
//   let data = await response.json();
//   return {
//     props: { blog: data },
//   };
// }

// getServerSideProps does not make html file during building process (npm run build) but getStaticProps will generate an html file for every data passed inside it
// getStaticProps use getStaticPaths

export async function getStaticPaths() {
  let response = await fetch(`http://localhost:8080/blogs`);
  let data = await response.json();
  return {
    paths: data.map((el) => ({
      params: { id: el.id.toString() },
      // params takes only id as parameter while query can take other parameters also
    })),
    fallback: false, //can also be true or 'blocking'
  };
}
// getStaticProps will create problem while deploying as it is not accessible hence use get ServerSideProps
export async function getServerSideProps(context) {
  // context has many parameters inside it but we require only query and params
  // if in paths we are passing params then we can extract params only not query
  const {
    params: { id },
  } = context;
  let response = await fetch(`http://localhost:8080/blogs/${id}`);
  let data = await response.json();
  return {
    props: { blog: data },
  };
}
