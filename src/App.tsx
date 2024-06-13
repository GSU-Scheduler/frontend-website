import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/> 
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;