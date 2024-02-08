import React from "react";
import items from "./data";
import { useEffect } from "react";
import { useState } from "react";

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
  let tempItems = items.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });

  return tempItems;
};

let rooms = formatData(items);
let featuredRoom = rooms.filter((room) => room.featured === true);

const getRoom = (slug) => {
  let tempRooms = [...rooms];
  const room = tempRooms.find((room) => room.slug === slug);
  return room;
};

const filterRooms = (filterData) => {
  return rooms.filter((item) => item.type === filterData);
};

let maxPrice = Math.max(...rooms.map((item) => item.price));
let minPrice = Math.min(...rooms.map((item) => item.price));
let maxSize = Math.max(...rooms.map((item) => item.size));

const RoomProvider = ({ children }) => {
  const [roomsData, setRoomsData] = useState(rooms);
  const [priceRangeFilter, setpriceRangeFilter] = useState([
    minPrice,
    maxPrice,
  ]);
  const [filteredProducts, setFilteredProducts] = useState(rooms);

  const handleChange = (event) => {
    if (event.target.value === "all") {
      setRoomsData(rooms);
      return;
    }
    const filteredRooms = filterRooms(event.target.value);
    setRoomsData(filteredRooms);
  };

  const handlePriceRange = (value) => {
    setpriceRangeFilter(value);
    console.log("handlePriceRange has been called!!", priceRangeFilter);
    console.log("Rooms from handle price function", rooms);
    const filtered = rooms.filter((room) => room.price >= 600);
    console.log("Handle PRice Range Filter Product == >", filtered);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms: filteredProducts ? filteredProducts : rooms,
        sortedRooms: roomsData,
        featuredRoom,
        loading: false,
        getRoom,
        price: maxPrice,
        maxPrice,
        maxSize,
        filterRooms,
        handleChange,
        type: handleChange,
        handlePriceRange,
        setpriceRangeFilter,
        priceRangeFilter,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
