import React, { useState, useContext } from "react";
import { RoomContext } from "../context";
import styled from "styled-components";

const RoomFilterStyle = styled.div`
  .filter-form {
    form {
      display: flex;
      max-width: 1170px;
      margin: 0 auto;
      margin-top: -50px;
      position: relative;
      z-index: 1;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      .form-group {
        max-width: calc(100% / 5);
        width: 100%;
        padding: 20px 15px;
        background: #f1efee;
        border-right: 1px solid #d3d0ce;
        &:last-child {
          border: none;
        }
        label {
          width: 100%;
          display: block;
          position: relative;
          font-size: 14px;
          line-height: 24px;
          color: #0a0807;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        select {
          width: 100%;
          padding: 10px;
          border: none;
          text-transform: capitalize;
        }

        .single-extra {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        input[type="range"] {
          margin-top: 10px;
          width: 100%;
        }

        input[type="number"] {
          margin-bottom: 12px;
          padding: 10px;
          display: inline-block;
          width: 34%;
          margin-right: 8px;
          border: none;
        }
      }
    }
  }
`;
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
    handleChangeForGuest,
    priceRangeFilter,
    handleChangeSize,
  } = useContext(RoomContext);
  const [roomType, setRoomType] = useState("all");
  const [roomCapacity, setroomCapacity] = useState("all");
  console.log("Breakfast Value==>", breakfast);
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
                handleChangeForGuest(e);
              }}
            >
              {people}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Room Size</label>
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={(e) => {
                // setRoomType(e.target.value);
                handleChangeSize(e);
              }}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={(e) => {
                // setRoomType(e.target.value);
                handleChangeSize(e);
              }}
            />
          </div>
          <div className="form-group">
            <div className="extra">
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="breakfast"
                  id="breakfast"
                  checked={breakfast}
                  onChange={handleChange}
                />
                <label htmlFor="breakfast">Breakfast</label>
              </div>
              <div className="single-extra">
                <input
                  type="checkbox"
                  name="pets"
                  id="pets"
                  checked={pets}
                  onChange={handleChange}
                />
                <label htmlFor="pets">Pets</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </RoomFilterStyle>
  );
};

export default RoomFilter;
