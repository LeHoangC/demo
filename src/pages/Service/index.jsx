import React from 'react'
import Hero from '../../components/Hero'
import ParallaxImages from '../../components/ParallaxImages'
import ServicesSection from '../../components/ServicesSection'
import RevealS from './RevealS'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'

const Service = () => {
    return (
        <div>
            <Hero>
                WHAT WE
                <br />
                SHAPE
            </Hero>
            <ParallaxImages />
            <ServicesSection />
            <RevealS />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Service
