import React from "react";
import items from "./data";
import { useEffect } from "react";

const RoomContext = React.createContext({
  rooms: [],
  sortedRooms: [],
  featuredRoom: [],
  loading: true,
});

// const state = {
//   rooms: [],
//   sortedRooms: [],
//   featuredRoom: [],
//   loading: true,
// };

const formatData = (items) => {
  let tempitems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });

  return tempitems;
};

const RoomProvider = ({ children }) => {
  let rooms = formatData(items);
  // console.log("Rooms Data is there", rooms);
  // console.log(rooms[0]);
  let featuredRoom = rooms.filter((room) => room.featured === true);
  // console.log("Featured Room", featuredRoom);

  // return {
  //   ...state,
  //   rooms,
  //   sortedRooms: rooms,
  //   featuredRoom,
  //   loading: false,
  // };

  return (
    <RoomContext.Provider
      value={{ rooms, sortedRooms: rooms, featuredRoom, loading: true }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
