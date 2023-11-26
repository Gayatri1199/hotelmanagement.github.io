import React from "react";
import { RoomContext } from "../context";
import { useContext } from "react";
import items from "../data";
import Room from "./Room";

const FeaturedRoom = () => {
  const { formatData, featuredRoom, rooms, sortedRooms } =
    useContext(RoomContext);
  // let rooms = formatData(items);
  console.log("Rooms Data is there From Featured Section", rooms);
  console.log("Sorted Rooms Data is there From Featured Section", sortedRooms);
  console.log("featuredRoom Data is there From Featured Section", featuredRoom);

  return (
    <div>
      The data of FeaturedRoom will be from {formatData}
      <Room />
    </div>
  );
};

export default FeaturedRoom;
