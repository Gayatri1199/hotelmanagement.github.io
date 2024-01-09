import React, { useContext } from "react";
import { RoomContext } from "../context";
import styled from "styled-components";

const RoomFilterStyle = styled.div``;
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
const RoomFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  console.log("Types==>", types);
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <RoomFilterStyle>
      <div className="filter-form">
        <form>
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {types}
            </select>
          </div>
          <div className="form-group ">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="price-stripe"
            />
          </div>
        </form>
      </div>
    </RoomFilterStyle>
  );
};

export default RoomFilter;
