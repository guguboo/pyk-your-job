import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Talents from '../components/Talents';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Parallax pages={3}>
    <div className='w-[100vw] flex flex-col gap-40 justify-start'>
      <ParallaxLayer speed={0.7}>
        <img src="/img/landing/cube1.png" id="cube1" className="w-[60%] absolute top-[7%] left-[60%] z-0"/>
      </ParallaxLayer>
      <ParallaxLayer speed={0.05}>
        <img src="/img/landing/cube2.png" id="cube2" className="w-[30%] absolute top-[5%] left-[-13%] z-0"/>
      </ParallaxLayer>

      <ParallaxLayer speed={0} factor={3}>
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
      </ParallaxLayer>
    </div>
    </Parallax>
  );
}

export default Home;
