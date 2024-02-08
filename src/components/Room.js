import React from "react";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { name, slug, images, price, size } = room;
  return (
    <div className="feature-room-wrapper">
      <Link to={`/room/${slug}`}>
        <div className="featured-room">
          <div className="image-section">
            <img src={images[0]} alt="Room" />
            <span className="name">{name}</span>
            <span className="img-icon">
              <i class="fa-regular fa-image"></i>
            </span>
          </div>
          <div className="detail-section">
            <p>
              <span className="size">
                <i class="fa-solid fa-crop"></i> {size} Sq ft
              </span>
              <span className="king-size">
                <i class="fa-solid fa-bed"></i>2 King Size Bed
              </span>
            </p>

            <p className="guest-size">
              <i class="fa-solid fa-people-group"></i>Up to 5 guest
            </p>
          </div>
          <div className="price">
            <p>
              {" "}
              <span>*</span>
              {price} Rs / per night
            </p>
            <div className="ratings">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Room;
