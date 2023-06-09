import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-600 text-white font-thin text-lg static">
        <div>
          <div>
            <nav>
              <ul className="md:flex md:flex-row md:items-start md:justify-start flex items-center justify-center gap-5 px-4 py-5">
                <a href="https://github.com/Milap-Magar" target="_blank">
                  <li>
                    <BsGithub />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/milap-magar-21427a229/"
                  target="_blank"
                >
                  <li>
                    <BsLinkedin />
                  </li>
                </a>
                <a href="https://www.instagram.com/milx.2023/" target="_blank">
                  <li>
                    <BsInstagram />
                  </li>
                </a>
                <a
                  href="https://www.facebook.com/Milap.Magar2022"
                  target="_blank"
                >
                  <li className="">
                    <BsFacebook />
                  </li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
        <div className="md:flex md:items-start md:justify-start flex flex-col items-center justify-center px-2 py-4">
          <h2 className="text-base font-mono">Milap Ramauli Magar</h2>
          <h3 className="text-sm font-mono">Kusunti, Lalitpur-13</h3>
        </div>
        <h1 className="md:text-normal text-base flex items-center justify-center">
          © COPYRIGHT & Made by Milap Magar
        </h1>
      </div>
    </>
  );
};

export default Footer;
