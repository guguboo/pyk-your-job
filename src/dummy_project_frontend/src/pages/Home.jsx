import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Talents from '../components/Talents';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='w-[100vw] flex flex-col gap-40 justify-start'>
        <Navbar />
        <Landing />
        <Features />
        <Talents />
        <Footer />
    </div>
  );
}

export default Home;
