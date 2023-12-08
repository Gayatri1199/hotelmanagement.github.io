import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SingleRoom = (props) => {
  const { getData } = useContext(RoomContext);
  const { slug } = useParams();

  console.log("getData =>", getData);
  console.log("slug => ", slug);
  return (
    <div>
      SingleRoom {slug} {console.log("Props =>", props)}
    </div>
  );
};

export default SingleRoom;
