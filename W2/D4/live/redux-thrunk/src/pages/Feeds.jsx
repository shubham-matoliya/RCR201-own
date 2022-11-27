import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeeds } from "../redux/feeds/feeds.action";

const Feeds = () => {
  const feeds = useSelector((store) => store.feedsManager.feeds);
  const dispatch = useDispatch();
  useEffect(() => {
    // getFeeds(dispatch)
    dispatch(getFeeds());
  }, [dispatch]);
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
