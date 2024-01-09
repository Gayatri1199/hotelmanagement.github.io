import React from "react";
import items from "./data";
import { useEffect } from "react";

const RoomContext = React.createContext({
  rooms: [],
  sortedRooms: [],
  featuredRoom: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  maxSize: 0,
  minSize: 0,
  breakfast: false,
  pets: false,
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

const handleChange = (event) => {
  const target = event.target;
  const value = event.type === "checkbox" ? target.checked : target.value;

  const name = event.target.name;

  filterRooms();
};

const filterRooms = () => {
  console.log("Hello");
};

let maxPrice = Math.max(...rooms.map((item) => item.price));
let maxSize = Math.max(...rooms.map((item) => item.size));

const RoomProvider = ({ children }) => {
  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms: rooms,
        featuredRoom,
        loading: false,
        getRoom,
        price: maxPrice,
        maxPrice,
        maxSize,
        filterRooms,
        handleChange,
        type: handleChange,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
