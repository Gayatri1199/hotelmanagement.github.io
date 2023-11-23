import React from "react";
import items from "./data";
import { useEffect } from "react";

const RoomContext = React.createContext();

const state = {
  rooms: [],
  sortedRooms: [],
  featuredRoom: [],
  loading: true,
};

const formatData = (items) => {
  let tempitems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    console.log(id);
    console.log(images);
    console.log(room);

    return room;
  });
  // console.log(tempitems);
  return tempitems;
};

const RoomProvider = ({ children }) => {
  useEffect(() => {
    let rooms = formatData(items);
    // console.log(rooms);
    let featuredRoom = rooms.filter((room) => room.feature === true);
    setState({});
  }, []);

  return <RoomContext.Provider value={state}>{children}</RoomContext.Provider>;
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
