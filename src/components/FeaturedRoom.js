import React from "react";
import { RoomContext } from "../context";
import { useContext } from "react";
import items from "../data";

const FeaturedRoom = () => {
  const { name, age } = useContext(RoomContext);
  console.log(items);

  return (
    <div>
      The data of FeaturedRoom will be from {name} {age}
    </div>
  );
};

export default FeaturedRoom;
