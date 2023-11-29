import React from "react";
import { RoomContext } from "../context";
import { useContext } from "react";
import items from "../data";
import Room from "./Room";
import Loading from "./Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FeaturedRoomStyle = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 100px;

  .heading-title {
    text-align: center;
    font-size: 32px;
    line-height: 40px;
    font-family: "Carattere", cursive;
    margin-bottom: 8px;
    text-transform: capitalize;
    color: #a9774e;
    display: block;
  }

  .heading {
    text-align: center;
    font-family: "Cardo", serif;
    display: block;
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0px;
  }

  .featured-section {
    display: flex;
    margin-top: 50px;
    gap: 25px;
    .featured-room {
      box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);
    }
    .image-section {
      min-height: 240px;

      max-height: 240px;
      overflow: hidden;
      position: relative;
      span.name {
        display: block;
        padding: 10px 10px 10px 20px;
        position: absolute;
        bottom: 0;
        width: 80%;
        background: #000000ab;
        color: #ffffff;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        transition: 0.5s all ease-in-out;
        font-family: "Cardo", serif;
      }
      .img-icon {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        position: absolute;
        top: 10px;
        right: 10px;
        color: #a9774e;
        border-radius: 100px;
        transition: 0.5s all ease-in-out;

        i {
          font-size: 15px;
          margin: 0px;
        }
      }
      img {
        object-fit: cover;
        height: 240px;
        transition: 0.5s all ease-in-out;
      }

      &:hover {
        img {
          transition: 0.5s all ease-in-out;
          transform: scale(1.1);
        }
        .img-icon {
          color: #ffffff;
          background: #a9774e;
          transition: 0.5s all ease-in-out;
        }
        span.name {
          transition: 0.5s all ease-in-out;
          width: 100%;
        }
      }
    }
  }
  .detail-section {
    padding: 20px;
    background: #f1efee;
    color: #161618 !important;
    p {
      margin-bottom: 15px;
      color: #8d8b8a;
      letter-spacing: 0.55px;
    }

    .guest-size {
      margin-bottom: 0px;
    }
    span {
      display: inline-block;
      margin-right: 20px;
    }
  }

  .price {
    padding: 20px;
    color: #161618 !important;
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Cardo", serif;
      position: relative;
      font-weight: 600;
      font-size: 18px;
      letter-spacing: 0.85px;
      text-transform: capitalize;
      color: #161618;
      padding-left: 15px;

      span {
        position: absolute;
        font-size: 32px;
        left: -5px;
        top: -4px;
        color: #a9774e;
      }
    }

    i {
      color: #fec004;
    }
  }

  .view-all-btn {
    margin-top: 50px;
    text-align: center;
    a {
      padding: 15px 60px;
      background: #f1efee;
      border-radius: 100px;
      letter-spacing: 0.65px;
      font-weight: 600;
      transition: 0.5s all ease-in-out;

      &:hover {
        transition: 0.5s all ease-in-out;
        color: #ffffff;
        background: #a9774e;
      }
    }
  }
`;

const FeaturedRoom = () => {
  const { formatData, featuredRoom, loading } = useContext(RoomContext);
  // let rooms = formatData(items);
  // console.log("Rooms Data is there From Featured Section", rooms);
  // console.log("Sorted Rooms Data is there From Featured Section", sortedRooms);
  // console.log("featuredRoom Data is there From Featured Section", featuredRoom);

  return (
    <FeaturedRoomStyle>
      <span className="heading-title">Popular Rooms</span>
      <h2 className="heading">BOTH BUSINESS & PLEASURE</h2>
      {loading ? (
        <div className="loading-section">
          <Loading />
        </div>
      ) : (
        <div className="featured-section">
          {" "}
          {featuredRoom.map((featuredRoom, index) => {
            return <Room key={index} room={featuredRoom} />;
          })}
        </div>
      )}
      <div className="view-all-btn">
        <Link to={`/`}>View All</Link>
      </div>
    </FeaturedRoomStyle>
  );
};

export default FeaturedRoom;
