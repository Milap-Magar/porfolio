import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] =useState(false);

  return (
    <>
      <header className="w-full bg-slate-900 shadow-lg shadow-amber-400 top-0 left-0 md:static rounded-lg relative">
        <div className="md:flex justify-between y-4 md:px-10 px-7">
          <div className="flex gap-1 md:px-auto">
            <a href="/">
            <h1 className="text-white py-4 px-8 font-mono font-medium text-lg hover:text-amber-500 cursor-pointer">
              Milap{" "}
              <span className="text-amber-500 hover:text-white shadow-lg">
                Magar
              </span>
            </h1>
            </a>
              <div onClick={()=>setOpen(!open)} className="text-3xl text-white hover:text-amber-400 cursor-pointer md:hidden block absolute right-0 top-0 px-8 py-4">
                {open ? <AiFillCloseCircle /> : <HiMenu /> }
              </div>
          </div>
          <div className="font-mono">
            <nav  className={`flex md:flex-row flex-col items-center justify-center md:pb-0 pb-12 absolute md:static md:bg-slate-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
              <div className="px-4 py-10 md:py-4 md:my-0">
                <a href="/contact">
                  <h1 className="text-white hover:text-amber-500">Contact</h1>
                </a>
              </div>
              <div className="px-4 py-10 md:py-4 md:my-0">
                <a href="/works">
                  <h1 className="text-white hover:text-amber-500">Works</h1>
                </a>
              </div>
              <div className="px-4 py-10 md:py-4 md:my-0">
                <a href="/about">
                  <h1 className="text-white hover:text-amber-500">About Me</h1>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
