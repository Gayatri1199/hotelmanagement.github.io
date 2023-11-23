import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  align-items: center;
  background-color: #000000;
  ul {
    list-style: none;
    display: flex;
    gap: 16px;
    li {
      a {
        color: #ffffff;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.55px;
      }
    }
  }

  i {
    display: none;
  }
`;

const Nav = () => {
  return (
    <NavStyle>
      <div className="logo">
        <Link to="/">
          <img
            src="https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/logo.png"
            alt="Logo"
          />
        </Link>
      </div>
      <i class="fa-solid fa-bars-staggered"></i>
      <div className="links">{/* <Link to="/"></Link> */}</div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
};

export default Nav;
