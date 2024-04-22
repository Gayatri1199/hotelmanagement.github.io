import React from "react";
import styled from "styled-components";

const ServicesStyle = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto 0;
  .heading-title {
    display: block;
    font-size: 32px;
    line-height: 40px;
    font-family: "Carattere", cursive;
    margin-bottom: 8px;
    text-transform: capitalize;
    text-align: center;
    color: #a9774e;
  }
  h2.title {
    text-align: center;
    position: relative;
    display: block;
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0px;
    font-family: "Cardo", serif;
    margin-bottom: 50px;
  }
  .service-wrapper {
    display: flex;
    flex-wrap: wrap;
    .service {
      width: 100%;
      display: flex;
      padding: 50px 50px 50px 70px;
      align-items: center;
      justify-content: center;
      @media screen and (min-width: 1261px) {
        width: calc(50% - 130px);
        justify-content: unset;
      }
      .icon {
        min-width: 140px;
        height: 140px;
        background: #a9774e17;
        display: block;
        position: relative;
        border-radius: 100px;
        margin-right: 20px;
        i {
          min-width: 40px;
          height: 40px;
          font-size: 40px;
          color: #a9774e;
          display: block;
          text-align: center;
          position: absolute;
          bottom: 30px;
          left: 50px;
        }
      }
    }
  }

  p.title {
    font-size: 20px;
    margin-bottom: 16px;
    font-family: "Cardo", serif;
    font-weight: 600;
    margin-left: -60px;
    position: relative;
    &::before {
      content: "";
      width: 20%;
      height: 2px;
      display: block;
      background: #a9774e;
      position: absolute;
      left: -100px;
      top: 50%;
    }
  }

  .info {
    font-family: "Outfit", sans-serif;
    color: #7c8083;
    font-weight: 400;
    max-width: 270px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.55px;
  }

  .service {
    &:nth-child(1) {
      border-right: 1px solid #eeeeee;
      border-bottom: 1px solid #eeeeee;
    }

    &:nth-child(2) {
      border-bottom: 1px solid #eeeeee;
    }

    &:nth-child(3) {
      border-right: 1px solid #eeeeee;
    }

    &:nth-child(4) {
    }
  }
`;

const ServicesData = [
  {
    icon: <i class="fa-solid fa-bell-concierge"></i>,
    title: "24 Hrs Room Service",
    info: "How all this mistake idea denonce all pleasure complete account off the system",
  },
  {
    icon: <i class="fa-solid fa-jug-detergent"></i>,
    title: "Laundry & Dry Cleaning",
    info: "Right to find fault with a man who chooses to enjoy a pleasure that annoying consequences.",
  },
  {
    icon: <i class="fa-solid fa-wifi"></i>,
    title: "Wi-Fi Connection",
    info: "Take a trivial example, which of us ever undertakes laborious physical obtain some advantage.",
  },
  {
    icon: <i class="fa-solid fa-user-shield"></i>,
    title: "24 Hrs Security",
    info: "Desires to obtain pain of itself it is because occasional circumstance some great pleasure.",
  },
];

const Services = () => {
  return (
    <ServicesStyle>
      <span className="heading-title">Why Choose Us</span>
      <h2 className="title">UNDOUBTEDLY THE BEST</h2>
      <div className="service-wrapper">
        {ServicesData.map((service, index) => (
          <div key={index} className="service">
            <span className="icon">{service.icon}</span>
            <div className="content">
              <p className="title">{service.title}</p>
              <p className="info">{service.info}</p>
            </div>
          </div>
        ))}
      </div>
    </ServicesStyle>
  );
};

export default Services;
