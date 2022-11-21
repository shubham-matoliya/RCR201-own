import { createContext, useState } from "react";

export const TopicContext = createContext<unknown>();
const [topics, setTopics] = useState([]);
// topics, addTopic, liketopic, deleteTopic
const addTopics = (topicReceived)=>{
    topics.push(topicReceived)
  setTopics(topics)
}
const TopicContextProvider = ({ children }) => {
  return <TopicContext.Provider value={{topics,addTopics}}>{children}</TopicContext.Provider>;
};

export default TopicContextProvider