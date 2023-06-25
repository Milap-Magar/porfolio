import React, { useState } from "react";
import ss1 from "../assets/ss1.png";

const About = () => {
  return (
    <div className="bg-slate-100 w-full h-auto">
      {/* About */}
      <div className="flex items-center justify-center px-3 py-2">
        <h1 className="font-mono">Works</h1>
      </div>
      <div>
        {/* image div */}
        <div className=" bg-slate-500">
          <h3 className="md:text-lg flex justify-center items-center text-xs pl-4 py-3">
            My Works:
          </h3>
          {/* 1st card */}
          <div className="flex gap-6 px-6 py-10">
            <div className="max-w-2xl mb-4">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <a href="#">
                  <img className="rounded" src={ss1} alt="/images/porto" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white font-mono">
                      Nike Store
                    </h5>
                    <p className="py-4">This is Nike store where you can add product and see more..</p>
                  </a>
                  <a
                    href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Open Website
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 2nd card */}
            <div className="max-w-2xl mb-4">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <a href="#">
                  <img className="rounded" src={ss1} alt="/images/porto" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white"></h5>
                  </a>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Open Website
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* 3rd card */}
            <div className="max-w-2xl mb-4">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <a href="#">
                  <img className="rounded" src={ss1} alt="/images/porto" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white"></h5>
                  </a>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Open Website
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
