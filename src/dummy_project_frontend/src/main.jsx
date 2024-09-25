import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Landing from './components/Landing'
import './index.css';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Talents from './components/Talents';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Landing />
    <Features />
    <Talents />
    <Footer />
  </React.StrictMode>,
);
