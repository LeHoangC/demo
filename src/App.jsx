import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
    return (
        <div className="bg-black">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
export default App
