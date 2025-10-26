import React from 'react'
import HeroHome from './HeroHome'
import Footer from '../../components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from './Image'
import ParallaxImages from '../../components/ParallaxImages'
import ContactForm from '../../components/ContactForm'
import StickyScrollSection from './StickyScrollSection'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
    return (
        <div>
            <HeroHome />
            <section className="relative bg-black py-12 px-4 md:px-8">
                <div className="max-w-[1440px] mx-auto px-12">
                    <div className="flex items-center justify-between gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-2 md:w-6 h-20 bg-white rounded-full"></div>
                        </div>

                        <div className="flex-1 text-center space-y-2">
                            <p className="text-white text-sm md:text-base lg:text-lg tracking-[0.3em] font-light uppercase">
                                AN INTERNATIONAL PRODUCTION STUDIO
                            </p>
                            <h2 className="text-white text-lg md:text-xl lg:text-2xl tracking-[0.2em] font-light uppercase">
                                SHAPING THE FUTURE OF VISUAL STORYTELLING.
                            </h2>
                        </div>

                        <div className="flex-shrink-0">
                            <div className="w-2 md:w-6 h-20 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Image />

            <StickyScrollSection />

            <ParallaxImages />

            <ContactForm />

            <Footer />
        </div>
    )
}

export default HomePage
