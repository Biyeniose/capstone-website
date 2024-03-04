import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import CarDetails from './components/CarDetails';
import MessiInfoPage from './components/MessiInfoPage';
import Demo from './components/Demo';
import Team from './components/Team'
//importing react browser breaks the code
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
