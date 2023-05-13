import React from 'react';
import HomePage from './pages/HomePage';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Team from './pages/Team';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './screen/Registration';
import Login from './screen/Login';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
