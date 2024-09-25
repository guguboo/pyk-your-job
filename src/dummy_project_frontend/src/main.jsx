import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Landing from './Landing'
import './index.css';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Landing />
  </React.StrictMode>,
);
