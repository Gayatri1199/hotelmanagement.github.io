import React from "react";
import { RoomContext } from "../context";
import { useContext } from "react";

const FeaturedRoom = () => {
  const { name, age } = useContext(RoomContext);
  const jsonData = require("../data.js");
  console.log(jsonData);

  return (
    <div>
      The data of FeaturedRoom will be from {name} {age}
    </div>
  );
};

export default FeaturedRoom;
