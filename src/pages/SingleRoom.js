import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const SingleRoomStyle = styled.div`
  .herobanner {
    max-height: 450px;
    overflow: hidden;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      background: linear-gradient(#ab8f8fa6, #000000a1);
      position: absolute;
    }

    img {
      width: 100%;
      display: block;
      transition: 0.5s all ease-in-out;
    }

    .room-detail {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #fff;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      letter-spacing: 5.85px;
      font-size: 30px;
      width: 100%;
      text-align: center;
      h1 {
        font-family: "Cardo", serif;
      }

      .bread-crumb {
        display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-transform: capitalize;
        letter-spacing: 2.85px;
        a {
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }

    .price-tag {
      padding: 20px;
      background: #ffffff;
      position: absolute;
      bottom: 0;
      left: 200px;
      font-size: 16px;
      font-family: "Cardo", serif;
      font-weight: bold;
      span {
        font-size: 20px;
      }
    }
  }
`;

const SingleRoom = (props) => {
  const { getRoom } = useContext(RoomContext);
  const { slug } = useParams();
  const room = getRoom(slug);
  console.log("getRoom ==>", getRoom(slug));

  if (!room) {
    return <div>Room nhi h gadheeee!!!</div>;
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  return (
    <SingleRoomStyle>
      <div className="herobanner">
        <img src={images[0]} alt="Hero Banner" />
        <div className="room-detail">
          <h1>{name}</h1>
          <div className="bread-crumb">
            <Link to="/">Home</Link>/<span>{name}</span>
          </div>
        </div>
        <div className="price-tag">
          <span>$ {price}</span>/ Per Night
        </div>
      </div>
      <div className="images">
        {images.map((image, index) => {
          return <img key={index} src={image} alt={name} />;
        })}
      </div>
    </SingleRoomStyle>
  );
};

export default SingleRoom;
