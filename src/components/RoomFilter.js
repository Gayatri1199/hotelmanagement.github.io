import React, { useState, useContext } from "react";
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
    handlePriceRange,
    priceRange,
    priceRangeFilter,
  } = useContext(RoomContext);
  const [roomType, setRoomType] = useState("all");
  const [roomCapacity, setroomCapacity] = useState("all");

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
  console.log({ roomType }, type);

  let people = getUnique(rooms, "capacity");
  people = ["all", ...people];
  // console.log("Types==>", types);
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  console.log("PEOPLE==>", people);

  return (
    <RoomFilterStyle>
      <div className="filter-form">
        <form>
          <div className="form-group">
            <label htmlFor="type">Room Type</label>
            <select
              name="type"
              id="type"
              value={roomType}
              className="form-control"
              onChange={(e) => {
                setRoomType(e.target.value);
                handleChange(e);
              }}
            >
              {types}
            </select>
          </div>
          <div className="form-group ">
            <label htmlFor="price">Room Price $0 - ${priceRangeFilter}</label>
            <input
              type="range"
              name="price"
              min="0"
              max={maxPrice}
              id="price"
              value={priceRangeFilter}
              onChange={handlePriceRange}
              className="price-stripe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Guest</label>
            <select
              name="capacity"
              id="capacity"
              value={roomCapacity}
              className="form-control"
              onChange={(e) => {
                setroomCapacity(e.target.value);
                handleChange(e);
              }}
            >
              {people}
            </select>
          </div>
        </form>
      </div>
    </RoomFilterStyle>
  );
};

export default RoomFilter;
