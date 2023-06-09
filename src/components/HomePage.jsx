import React from "react";
import Image from "./Image";
import line from "../assets/line.png";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <Image />
      <div className="text-white absolute md:top-60 md:justify-start justify-center top-40 px-5">
        <h2 className="text-3xl pb-2">
          Hie! <span className="hover:text-red-600 hover:font-mono">It's me</span>
        </h2>
        {/* <Title>Think. Make. Solve.</Title> */}
        <img src={line} alt="../assets/line.png" className="h-2 w-10" />
        <h3 className="font-medium py-3 text-red-600">What I do:</h3>
        <p className="mb-3 font-mono font-normal pb-3 pt-1 text-shadow shadow-white">
          I enjoy creating delightful, Human-centered digital experience.
        </p>
        <nav>
          <button>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <a href="/about" target="_blank">
              <span>Learn More</span>
            </a>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
