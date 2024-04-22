import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AboutStyle = styled.div`
  
  max-width: 1170px;
  width: 100%;
  margin: 100px auto 0;
  padding:0px 32px;

  .upper-section {
   
    gap: 50px;
    margin-bottom: 0px;

    @media screen and (min-width:1261px){
      display: flex;
    }

    .left-section {
      position: relative;
      .years {
        width: 140px;
        height: 140px;
        background: #0a0807;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 65px;
        border-radius: 100px;
        color: #a9774e;
        font-family: "Cardo",serif;
        font-weight: 600;
        position: absolute;
        top: 20px;
        right: -60px;
        animation-name: spin;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear; 
    }
      }
      img {
        margin-bottom: 56px;
      }
      span {
        display: block;
        font-family: "Carattere", cursive;
        font-size: 30px;
        font-weight: 600;
        color: #a9774e;
        margin-bottom: 12px;
      }
      p {
        font-size: 50px;
        font-family: "Cardo", serif;
        font-weight: 600;
        color: #0a0807;
        letter-spacing: 0.65px;
      }
    }
  }
  .lower-section {
    
    gap: 50px;
    @media screen and (min-width:1261px){
      display: flex;
    }

    .content {
      max-width: 350px;
      width: 100%;
      p {
        font-size: 35px;
        font-family: "Cardo", serif;
        font-weight: 600;
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: 4px solid #0a0807;
        color: #bdb9b5;
      }

      .owner {
        font-size: 14px;
        color: #0a0807;
        span {
          color: #a9774e;
        }
      }
    }
  }

  .description {
    max-width: 400px;
    width: 100%;

    p {
      font-family: "Outfit", sans-serif;
      line-height: 28px;
      font-size: 18px;
      color: #7c8083;
      letter-spacing: 0.65px;
      margin-bottom: 24px;
    }
    ul {
      padding: 0px;
      list-style-type: none;
      li {
        position: relative;
        display: block;
        font-size: 18px;
        color: #8d8b8a;
        margin-bottom: 21px;
        padding-bottom: 12px;
        padding-left: 35px;
  
        .icon {
          width: 24px;
          height: 24px;
          background: #a9774e;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          font-size: 12px;
          color: #fff;
          position: absolute;
          left: 0px;
          top:2px;
        }
      }
    }
  }

  

  .img-section {
    max-width: 200px;
    position: relative;
  }

  a{
    display: inline-block;
    color:#0a0807;
    font-size: 16px;
    text-decoration: none;
    transition:0.5s all ease-in-out;
    &:hover{
      transition:0.5s all ease-in-out;
      color:#a9774e;
    }
    i{
      margin-right:8px;
    }
  }

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
`;
const AboutUsSection = () => {
  return (
    <AboutStyle>
      <div className="upper-section">
        <img
          src="https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/about-1.jpg"
          alt="Awesome"
        />
        <div className="left-section">
          <div className="img-section">
            <img
              decoding="async"
              src="https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/about-2.jpg"
              alt="Awesome"
            />
            <div className="years">15+</div>
          </div>
          <span>Our Hotel</span>
          <p>
            THE WORLDS <br />
            LUXURIOUS HOTEL
          </p>
        </div>
      </div>
      <div className="lower-section">
        <div className="content">
          <p>ENJOY AN EXTRAORDINARY RETREAT WITH EXCLUSIVE OFFERS</p>
          <div className="owner">
            MICHEL KYLE, <span>Founder & Ceo</span>
          </div>
        </div>
        <div className="description">
          <p>
            The masterbuilder of human happiness no one dislikes, too avoids
            pleasure itself because it is pleasure, but because those who do not
            knows pleasure rationally encounters consequences pursues or desires
            to obtain.
          </p>
          <ul>
            <li>
              {" "}
              <span className="icon">
                <i class="fa-solid fa-check"></i>
              </span>
              Experience luxury in the lap of nature
            </li>
            <li>
              {" "}
              <span className="icon">
                <i class="fa-solid fa-check"></i>
              </span>
              Providing iconic experiences
            </li>
          </ul>
          <Link to="/about">
            {" "}
            <i class="fas fa-arrow-right"></i>MORE ABOUT US
          </Link>
        </div>
        <img
          decoding="async"
          src="https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/about-3.jpg"
          alt="Awesome"
        />
      </div>
    </AboutStyle>
  );
};

export default AboutUsSection;
