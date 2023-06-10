import React from "react";
import { Navbar, HomePage, Footer } from "../components";
import Contact from "./Contact";
import About from "./About";
import Works from "./Works";

const Home = () => {
  return (
    <>
      <div className="bg-slate-800">
        <Navbar />
        <div>
          <HomePage />
          <Contact />
          <Works />
          <About />
        </div >
        <Footer />
      </div>
    </>
  );
};

export default Home;
