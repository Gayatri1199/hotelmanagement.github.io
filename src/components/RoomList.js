import React from "react";
import Room from "./Room";
import styled from "styled-components";

const RoomListStyle = styled.div`
  &.roomlist {
    display: flex;
    margin: 100px auto;
    gap: 25px;
    flex-wrap: wrap;
    align-items: center;

    max-width: 1280px;
    width: 100%;

    a {
      text-decoration: none;
    }
    .feature-room-wrapper {
      max-width: calc(100% / 3 - 25px);
    }
    .featured-room {
      box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);

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
`;

const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h1>NO rooms are available as per your search!!!!</h1>
      </div>
    );
  }
  return (
    <RoomListStyle className="roomlist">
      {rooms.map((item) => {
        return <Room key={item.id} room={item} />;
      })}
    </RoomListStyle>
  );
};

export default RoomList;
