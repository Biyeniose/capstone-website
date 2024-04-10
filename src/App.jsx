import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import CarDetails from './components/CarDetails';
import Images from './components/Images';
import Team from './components/Team'
//importing react browser breaks the code
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <Router>
      <div className="flex flex-col min-h-screen">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/images" element={<Images />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
      </div>
    </Router>
    
  );
}

export default App;
