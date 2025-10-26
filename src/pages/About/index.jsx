import React from 'react'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import RevealA from './RevealA'
import StickyScrollSection from './StickyScrollSection'
import CrewSection from './CrewSection'

const About = () => {
    return (
        <div className="">
            <Hero>
                BUILT FOR
                <br />
                STORY
            </Hero>
            <RevealA />
            <StickyScrollSection />
            <section className="bg-[#F5F1E8] flex items-center justify-center px-6 py-16">
                <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black">
                            SHAPED BY
                            <br />
                            HOW WE SEE.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl">
                            We're drawn to story over spectacle, texture over gloss. Our process is nimble and hands-on
                            — grounded in curiosity, shaped by instinct, and driven by the desire to create work that
                            resonates long after the frame fades. Whether it's a film, a brand, or a visual experiment,
                            we build with care and leave space for discovery.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop"
                                alt="Photographer at work"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <CrewSection />
            <Footer />
        </div>
    )
}

export default About
