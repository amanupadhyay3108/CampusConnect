import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Clubs from './pages/Clubs'
import Events from './pages/Events'
import WhyJoin from './pages/WhyJoin'
import HallOfFame from './pages/HallOfFame'
import Navbar from './components/Navbar'
import About from './pages/About' 
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/why-join" element={<WhyJoin />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
