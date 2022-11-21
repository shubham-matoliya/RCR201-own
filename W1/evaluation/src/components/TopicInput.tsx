import React, { useContext, useState } from "react";
import { TopicContext } from "../context/TopicsContext";

const TopicInput = () => {
  const { addTopic } = useContext(TopicContext);
  const [val, setVal] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    addTopic(val);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        id="topic-typed"
        type={"text"}
        placeholder="new Topic..."
        required
        onChange={(e) => setVal(e.target.value)}
      />
      <input type={"submit"} />
    </form>
  );
};

export default TopicInput;
