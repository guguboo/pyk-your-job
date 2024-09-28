import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Talents from "../components/Talents";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-[100vw] flex flex-col gap-40 justify-start">
      <img src="/img/landing/cube1.png" id="cube1" className="w-[60%] absolute top-[7%] left-[60%] z-0"/>
      <img src="/img/landing/cube2.png" id="cube2" className="w-[30%] absolute top-[5%] left-[-13%] z-0"/>
      <Navbar />
          <div id="header">
            <Landing />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="jobs">
            <Talents />
          </div>
        <Footer />
      </div>
  );
};

export default Home;
