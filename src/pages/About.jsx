import React, { useState } from 'react';
import hero from "../assets/hero1.png";

const About = () => {
  return (
    <div>
      <div className='bg-slate-100 w-full h-auto'>
        {/* About */}
        <div className='flex items-center justify-center px-3 py-2'>
          <h1 className='font-mono'>About Me</h1>
        </div>
        <div>
          {/* image div */}
          <div className='md:flex md:justify-center md:items-center md:right-4 flex justify-start items-start bg-slate-500'>
              <div className=''>
                <h3 className='md:text-lg md:flex md:items-start md:justify-start flex justify-center items-center text-xs md:pl-32 pl-2'>Hello, I'm Milap:</h3>
                <p className='md:text-lg md:flex md:items-start md:justify-start text-xs font-thin md:pl-32 pl-2'>A passionate web developer and designer. With a keen eye for aesthetics and a love for clean, user-friendly and reusable designs</p>
              </div>
              <img src={ hero } alt="assets/hero.img" className='md:w-2/4 w-44 '/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About