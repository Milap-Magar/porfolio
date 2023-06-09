import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Works } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/works' element={ <Works /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
