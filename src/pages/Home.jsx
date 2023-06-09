import React from "react";
import { Navbar, HomePage, Footer, Image } from "../components";

const Home = () => {
  return (
    <>
      <div className="bg-slate-800">
        <Navbar />
        <div>
          <HomePage />
        </div >
        <Footer />
      </div>
    </>
  );
};

export default Home;
