import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BorderReveal from '../../components/BorderRevealEffect'

gsap.registerPlugin(ScrollTrigger)

const StickyScrollSection = () => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
    const headingRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const content = contentRef.current
        const heading = headingRef.current

        // Set explicit height for content to ensure proper scrolling
        const totalContentHeight = 200 // in vh units (adjust based on your content)

        // Calculate scroll distance
        const viewportHeight = window.innerHeight
        const scrollDistance = (totalContentHeight / 100) * viewportHeight - viewportHeight

        // Pin the section
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
                // Move content up
                gsap.to(content, {
                    y: -scrollDistance * self.progress,
                    ease: 'none',
                    duration: 0,
                })

                // Start moving heading when we're 70% through the scroll
                if (self.progress > 0.7) {
                    const headingProgress = (self.progress - 0.7) / 0.3
                    gsap.to(heading, {
                        y: -200 * headingProgress,
                        ease: 'none',
                        duration: 0,
                    })
                } else {
                    gsap.to(heading, {
                        y: 0,
                        ease: 'none',
                        duration: 0,
                    })
                }
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className="bg-gray-100">
            <section ref={sectionRef} className="relative h-[120vh] overflow-hidden bg-white">
                <div ref={headingRef} className="absolute inset-0 flex items-start justify-center pointer-events-none">
                    <h2 className="max-w-[1440px] mx-auto text-[12vw] 2xl:text-[8vw] mt-24 font-black text-black leading-tight uppercase text-center px-4">
                        we exist to shape cinematic worlds
                    </h2>
                </div>

                <div ref={contentRef} className="relative max-w-[1440px] mx-auto">
                    <div className="absolute top-[80vh] left-8">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="w-64 h-80 md:w-72 md:h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                                    alt="Music instrument"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[120vh] left-1/2 -translate-x-1/2">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="w-64 h-80 md:w-72 md:h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80"
                                    alt="Concert"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Image 3 - Right */}
                    <div className="absolute top-[60vh] right-8">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="w-64 h-80 md:w-72 md:h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
                                    alt="Studio"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Section */}
                    <div className="absolute top-[180vh] w-full px-4 hidden 2xl:block">
                        <p className="py-4 text-4xl md:text-6xl font-bold uppercase ml-4 md:ml-20">Philosophy</p>
                        <div className="w-full mx-auto">
                            <BorderReveal borderColor="black" />

                            <div className="relative flex py-8 group">
                                <div className="absolute left-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                                <div className="absolute right-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                                <div className="w-1/2 text-xl md:text-2xl text-end mr-8 md:mr-64">01</div>
                                <div className="w-1/2 text-2xl md:text-4xl">Built independently.</div>
                            </div>

                            <BorderReveal borderColor="black" />

                            <div className="relative flex py-8 group">
                                <div className="absolute left-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                                <div className="absolute right-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                                <div className="w-1/2 text-xl md:text-2xl text-end mr-8 md:mr-64">02</div>
                                <div className="w-1/2 text-2xl md:text-4xl">Crafted with intention.</div>
                            </div>

                            <BorderReveal borderColor="black" />

                            <div className="relative flex py-8 group">
                                <div className="absolute left-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                                <div className="absolute right-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                                <div className="w-1/2 text-xl md:text-2xl text-end mr-8 md:mr-64">03</div>
                                <div className="w-1/2 text-2xl md:text-4xl">Told in shadow and light.</div>
                            </div>

                            <BorderReveal borderColor="black" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full px-4 2xl:hidden bg-white">
                <p className="py-4 text-4xl md:text-6xl font-bold uppercase ml-4 md:ml-20">Philosophy</p>
                <div className="w-full mx-auto">
                    <BorderReveal borderColor="black" />

                    <div className="relative flex py-8 group">
                        <div className="absolute left-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                        <div className="absolute right-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                        <div className="w-1/2 text-xl md:text-2xl text-end mr-8 md:mr-64">01</div>
                        <div className="w-1/2 text-2xl md:text-4xl">Built independently.</div>
                    </div>

                    <BorderReveal borderColor="black" />

                    <div className="relative flex py-8 group">
                        <div className="absolute left-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                        <div className="absolute right-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                        <div className="w-1/2 text-xl md:text-2xl text-end mr-8 md:mr-64">02</div>
                        <div className="w-1/2 text-2xl md:text-4xl">Crafted with intention.</div>
                    </div>

                    <BorderReveal borderColor="black" />

                    <div className="relative flex py-8 group">
                        <div className="absolute left-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                        <div className="absolute right-5 top-4 bottom-4 w-5 rounded-2xl bg-gray-800 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                        <div className="w-1/2 text-xl md:text-2xl text-end mr-8 md:mr-64">03</div>
                        <div className="w-1/2 text-2xl md:text-4xl">Told in shadow and light.</div>
                    </div>

                    <BorderReveal borderColor="black" />
                </div>
            </div>
        </div>
    )
}

export default StickyScrollSection
