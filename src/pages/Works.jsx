import React, { useState } from "react";
import ss1 from "../assets/ss1.png";
import ss from "../assets/ss.png";
import ss23 from "../assets/ss23.png";
import { AiFillGithub } from "react-icons/ai";

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
          <div className="flex flex-col items-center gap-6 px-6 py-10 md:flex-row md:items-center">
            <div className="md:max-w-2xl max-w-xl mb-4">
              {/* 1st card */}
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <img className="rounded" src={ss1} alt="/images/porto" />
                <div className="p-5">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white font-mono">
                    Nike Store
                  </h5>
                  <p className="py-4">
                    This is Nike store where you can add product and see more..
                  </p>
                  <div className="flex gap-44">
                    <a
                      href="https://nikestore12.netlify.app"
                      target="_blank"
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
                    <a href="https://github.com/Milap-Magar/NikeStore/tree/master" target="_blank">
                      <AiFillGithub className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd card */}
            <div className="max-w-2xl mb-4">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <img className="rounded" src={ss} alt="/images/porto" />
                <div className="p-5">
                  <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white font-mono">
                    E-com Store and Admin Pannel
                  </h5>
                  <p className="py-5">
                    Dynamic and Responsive Admin-pannel and Ecom-Store
                  </p>
                  <div className="flex gap-44">
                    <a
                      href="https://github.com/Milap-Magar/ecommerce"
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
                    <a href="https://github.com/Milap-Magar/ecommerce" target="_blank">
                      <AiFillGithub className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 3rd card */}
            <div className="max-w-2xl mb-4">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <img className="rounded" src={ss23} alt="/images/porto" />
                <div className="p-5">
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white font-mono">
                    Responsive Travel Website
                  </h5>
                  <p className="py-4">
                    Travel Page which renders to various packages and
                    information about Nepal
                  </p>
                  <div className="flex gap-44">
                    <a
                      href="https://tours-travel12.netlify.app/"
                      target="_blank"
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
                    <a href="https://github.com/Milap-Magar/Tour" target="_blank">
                      <AiFillGithub className="w-8 h-8" />
                    </a>
                  </div>
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
