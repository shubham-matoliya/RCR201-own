export enum TopicType {
  Pending = "Pending Topics...",
  Completed = "Completed Topics...",
  Revision = "Topics Needing Revision...",
  New = "New Topics...",
  // Refer Inital data to know other types
}

export type Topic = {
  // Refer Inital data to know all keys
  titile: string;
  like: number;
};

export type TopicInfo = {
  // section title
  title: string;
  // can be use for section bgColor
  sectionBgColor: "#feb2b2" | "#9ae6b4" | "#90ccf4" | "#faef88";
  // can be use for item bgcolor
  itemBgColor: "#e53e3e" | "#37a169" | "#3182ce" | "#d69d2e";
};

export const topicInfo: Record<TopicType, TopicInfo> = {
  // Need to add all the data
};
