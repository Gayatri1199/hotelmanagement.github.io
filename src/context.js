import React from "react";
import items from "./data";

const RoomContext = React.createContext();

const state = {
  rooms: [],
  sortedRooms: [],
  featuredRoom: [],
  loading: true,
};

const RoomProvider = ({ children }) => {
  return <RoomContext.Provider value={state}>{children}</RoomContext.Provider>;
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
