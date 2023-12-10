import React from "react";
import items from "./data";
import { useEffect } from "react";

const RoomContext = React.createContext({
  rooms: [],
  sortedRooms: [],
  featuredRoom: [],
  loading: true,
});

const formatData = (items) => {
  let tempitems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });

  return tempitems;
};

let rooms = formatData(items);
let featuredRoom = rooms.filter((room) => room.featured === true);

const getRoom = (slug) => {
  let tempRooms = [...rooms];
  console.log("tempRooms => ", tempRooms);
  const room = tempRooms.find((room) => room.slug === slug);
  // const room = tempRooms[0];
  console.log("rooms==>", room);
  return room;
};

getRoom();

const RoomProvider = ({ children }) => {
  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms: rooms,
        featuredRoom,
        loading: false,
        getRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
