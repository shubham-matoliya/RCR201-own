import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/posts/posts.action";

const Posts = () => {
  const posts = useSelector((store) => store.postsManager.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // getPosts(dispatch);
    // after using thunk this can be written as
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>Post</h1>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
