import React, { useContext } from "react";
import RoomFilter from "../components/RoomFilter";
import RoomList from "../components/RoomList";
import HeroBanner from "../components/HeroBanner";
import styled from "styled-components";
import items from "../data";
import { RoomConsumer, RoomContext } from "../context";
import Loading from "../components/Loading";

const RoomStyle = styled.div`
  .slider-container {
    max-height: 500px;
    overflow: hidden;

    button {
      display: none;
    }
    .content-section {
      top: 35%;
      button {
        display: none;
      }
    }
  }
`;

const Rooms = () => {
  const { sortedRooms, loading, rooms } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <RoomStyle>
      <HeroBanner />
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </RoomStyle>
  );
};

export default Rooms;
