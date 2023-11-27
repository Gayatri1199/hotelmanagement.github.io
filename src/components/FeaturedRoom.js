import React from "react";
import { RoomContext } from "../context";
import { useContext } from "react";
import items from "../data";
import Room from "./Room";
import Loading from "./Loading";

const FeaturedRoom = () => {
  const { formatData, featuredRoom, loading } = useContext(RoomContext);
  // let rooms = formatData(items);
  // console.log("Rooms Data is there From Featured Section", rooms);
  // console.log("Sorted Rooms Data is there From Featured Section", sortedRooms);
  // console.log("featuredRoom Data is there From Featured Section", featuredRoom);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          {featuredRoom.map((featuredRoom, index) => {
            return <Room key={index} room={featuredRoom} />;
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedRoom;
