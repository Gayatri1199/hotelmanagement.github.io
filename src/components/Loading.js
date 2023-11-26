import React from "react";
import styled from "styled-components";

const LoadingStyle = styled.div`
  /* KEYFRAMES */

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .spinner-box {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  /* ALTERNATING ORBITS */

  .circle-border {
    width: 150px;
    height: 150px;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    background: linear-gradient(0deg, #a9774e17 33%, #a9774e 100%);
    animation: spin 0.8s linear 0s infinite;
  }

  .circle-core {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 50%;
  }
`;

const Loading = () => {
  return (
    <LoadingStyle>
      <div class="spinner-box">
        <div class="circle-border">
          <div class="circle-core"></div>
        </div>
      </div>
    </LoadingStyle>
  );
};

export default Loading;
