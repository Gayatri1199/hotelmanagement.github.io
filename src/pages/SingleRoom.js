import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Slide } from "react-slideshow-image";
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

  .room-suites {
    margin: auto;
    margin-top: 100px;
    max-width: 1200px;
    span {
      display: block;
      text-align: center;
      font-size: 32px;
      line-height: 40px;
      font-family: "Carattere", cursive;
      margin-bottom: 8px;
      text-transform: capitalize;
      color: #a9774e;
    }

    h2 {
      text-align: center;
      position: relative;
      font-family: "Cardo", serif;
      font-size: 50px;
      line-height: 60px;
      font-weight: 700;
    }
  }

  .room-details {
    display: flex;
    margin-top: 50px;
    border-top: 2px solid #e2dfdd;
    border-bottom: 2px solid #e2dfdd;
    .detail {
      width: 25%;
      border-right: 2px solid #e2dfdd;
      padding: 40px 20px;
      text-align: center;
      &:last-child {
        border-right: none;
      }
      h6 {
        position: relative;
        display: block;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 8px;
        color: #a9774e;
        letter-spacing: 1.55px;
      }

      p {
        color: #7c8083;
      }
    }
  }
  .rooms-feature {
    display: flex;
    max-width: 1156px;
    margin: auto;
    margin-top: 100px;
    justify-content: center;
    h2 {
      width: auto;
      padding-right: 15px;
      font-family: "Cardo", serif;
    }
    .features {
      width: calc(33.3%);
      padding-right: 15px;
      p {
        color: #8d8b8a;
        margin-bottom: 15px;
        position: relative;
        padding-left: 40px;
        span {
          font-size: 40px;
          left: 10px;
          position: absolute;
          top: -7px;
          color: #a9774e;
        }
      }
    }
  }

  .images-section {
    margin-top: 100px;
    padding: 100px;
    background: #0a0807;
    display: flex;
    gap: 50px;
    position: relative;
    .description {
      max-width: 400px;
      width: 100%;
      color: #fff;
      h2 {
        font-size: 60px;
        position: absolute;
        top: 60px;
        font-family: "Cardo", serif;
        left: 50px;
        z-index: 1;
        letter-spacing: 6px;
      }

      p {
        padding-top: 100px;
        line-height: 29px;
        text-transform: capitalize;
      }
    }
    .images {
      max-width: 50%;
      width: 100%;
    }
    img {
      width: 100%;
      display: block;
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
      <div className="room-suites">
        <span>Room - Suites</span>
        <h2>{slug.toUpperCase()} ROOM</h2>
        <div className="room-details">
          <div className="detail">
            <h6>Size</h6>
            <p>{size} sq ft</p>
          </div>
          <div className="detail">
            <h6>Bed</h6>
            <p>1 King Size Bed</p>
          </div>
          <div className="detail">
            <h6>Capacity</h6>
            <p>Upto {capacity} guest</p>
          </div>
          <div className="detail">
            <h6>VIEW</h6>
            <p>River & Garden View</p>
          </div>
        </div>
      </div>
      <div className="rooms-feature">
        <h2>ROOM FEATURES</h2>
        <div className="features">
          <p>
            <span>*</span>
            {breakfast ? "Breakfast" : "Not For Breakfast"}
          </p>
          <p>
            <span>*</span>
            42 Inch flat screen TV
          </p>
          <p>
            <span>*</span>
            In-room safe
          </p>
          <p>
            <span>*</span>
            Complimentary bottled water
          </p>
        </div>
        <div className="features">
          <p>
            <span>*</span>
            Coffee & tea making facilities
          </p>
          <p>
            <span>*</span>
            Coffee & tea making facilities
          </p>
          <p>
            <span>*</span>
            Mini-refrigerator
          </p>
          <p>
            <span>*</span>
            Telephone
          </p>
        </div>
      </div>
      <div className="images-section">
        <div className="description">
          <h2>STAY CLASSY, FEEL CLASSY</h2>
          <p>{description}</p>
        </div>
        <div className="images">
          <Slide>
            {images.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </Slide>
        </div>
      </div>
    </SingleRoomStyle>
  );
};

export default SingleRoom;
