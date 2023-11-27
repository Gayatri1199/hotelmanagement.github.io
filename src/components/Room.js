import React from "react";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { name, slug, images, price, size } = room;
  return (
    <Link to={`/room/${slug}`}>
      <div className="featured-room">
        <div className="image-section">
          <img src={images[0]} alt="Room" />
          <span>{name}</span>
        </div>
        <div className="detail-section">
          <span>{size}</span>
          <p>2 King Size Bed</p>
          <p>Up to 5 guest</p>
        </div>
        <div className="price">{price}/per night</div>
      </div>
    </Link>
  );
};

export default Room;
