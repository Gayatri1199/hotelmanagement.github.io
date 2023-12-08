import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import styled from "styled-components";

const HeroBannerStyle = styled.div`
position:relative;

.content-section{
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  max-width:1200px;
  width:100%;
  margin: auto;
  button{
    width:110px;
    height:110px;
    border-radius:100px;
    text-transform:uppercase;
    font-weight:bold;
    cursor:pointer;
    transition:0.5s all ease-in-out;
    border:none;
    &:hover{
      transition:0.5s all ease-in-out;
      background-color:#a9774e;
      i{
        margin-left:12px;
        transition:0.5s all ease-in-out;
        color:#ffffff;
      }
      span{
        transition:0.5s all ease-in-out;
        color:#ffffff;
      }
    }
    i{
      font-size: 25px;
      margin-bottom: 12px;
      transition:0.5s all ease-in-out;
      color:#a9774e;
    }
    span{
      display:block;
      font-size:14px;
      letter-spacing:0.45px;
      transition:0.5s all ease-in-out;
      color:#000000;
    }
  }
  .caption{
    font-family:'Carattere', cursive;
    font-weight:bold;
    font-size:60px;
    color:#a9774e;
    margin-bottom:50px;
  }
  .content{
    font-family:'Cardo', serif;
    font-weight:bold;
    font-size:80px;
    color:#ffffff;
    margin-bottom:50px;
    text-transform:uppercase;
    letter-spacing:0.55px;
  }

}
  .react-slideshow-container {
      img{
        filter: brightness(50%);
        display:block;
        width:100%;
      }

      .nav{
        &:first-of-type{
          left:100px;
        }

        &:last-of-type{
          right:100px;
        }
      }
    }
  }
`;

const slidesImage = [
  {
    url: "https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/banner-2.jpg",
    caption: "Enjoy your stay 1",
    content: "stress-relieving experience 1",
  },
  {
    url: "https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/banner-1.jpg",
    caption: "Enjoy your stay 2",
    content: "stress-relieving experience 2",
  },
  {
    url: "https://fastwpdemo.com/newwp/grandeur/wp-content/uploads/2023/02/banner-3.jpg",
    caption: "Enjoy your stay 3",
    content: "stress-relieving experience 3",
  },
];

const HeroBanner = () => {
  return (
    <HeroBannerStyle className="slider-container">
      <Fade>
        {slidesImage.map((images, index) => (
          <div key={index}>
            <img src={images.url} alt="Slider" />
            <div className="content-section">
              <div className="caption">{images.caption}</div>
              <div className="content">{images.content}</div>
              <button>
                <i class="fas fa-arrow-right"></i>
                <span>Explore</span>
              </button>
            </div>
          </div>
        ))}
      </Fade>
    </HeroBannerStyle>
  );
};

export default HeroBanner;
