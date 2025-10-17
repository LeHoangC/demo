import React from 'react'
import Hero from './components/Hero'
import ParallaxImages from './components/ParallaxImages'
import './App.css'
import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import StickyParallaxSection from './components/StickyParallaxSection'
import PartnersSection from './components/PartnersSection'
import HeroSection from './components/HeroSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
    return (
        <div className="bg-black">
            <Header />
            <Hero />
            <ParallaxImages />
            <ServicesSection />
            <StickyParallaxSection />
            <div className="relative z-10 mt-[20vh]">
                <PartnersSection />
            </div>
            <HeroSection />
            <ContactForm />
            <Footer />
        </div>
    )
}
export default App
