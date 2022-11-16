import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BnbPage from "./pages/BnbPage";
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="place" element={<BnbPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;