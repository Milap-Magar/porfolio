import React from "react";
import moon from "../assets/moon.png";
import styled from 'styled-components';

const Img = styled.img`
  object-fit: contain;
  position: absolute;
  bottom:0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  overflow: none;

  @keyframes animate{
    100%{
      transform: translateY(20px);
    }
  }
`;
const Image = () => {

  return (
    <>
      <div className="w-screen h-screen">
          <div>
            <Img src={ moon } alt="assets/moon.png" className={`md:w-3/4 md:h-3/4 md:top-20 md:left-96 w-80 h-80 left-0 top-72`} />
          </div>
      </div>
    </>
  );
};

export default Image;
