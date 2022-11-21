import React from "react";
import { TopicType } from "../constants";
const TopicsSection = () => {
  return (
    <div className="topic-section-container">
      <div>
        <h1>{TopicType.Pending}</h1>
      </div>
      <div>
        <h1>{TopicType.Completed}</h1>
      </div>
      <div>
        <h1>{TopicType.Revision}</h1>
      </div>
      <div>
        <h1>{TopicType.New}</h1>
      </div>
    </div>
  );
};

export default TopicsSection;
