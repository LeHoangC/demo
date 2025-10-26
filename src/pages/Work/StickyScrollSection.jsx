import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Form from '../../components/Form'

gsap.registerPlugin(ScrollTrigger)

const StickyScrollSection = () => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const content = contentRef.current

        const contentHeight = content.scrollHeight
        const viewportHeight = window.innerHeight
        const scrollDistance = contentHeight - viewportHeight

        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: true,
            onUpdate: (self) => {
                gsap.to(content, {
                    y: -scrollDistance * self.progress,
                    ease: 'none',
                    duration: 0,
                })
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className="bg-gray-900">
            <section ref={sectionRef} className="relative h-screen overflow-hidden">
                <div className="absolute text-center inset-0 bg-[#e9e92f]">
                    <h2 className="text-5xl md:text-7xl lg:text-9xl mt-24 font-black text-black leading-tight">
                        FOR THOSE
                        <br />
                        WHO SEE IN
                        <br />
                        FRAMES.
                    </h2>
                </div>

                <div ref={contentRef} className="relative max-w-[1440px] mx-auto">
                    <div className="h-[60vh] flex items-end px-4">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="w-64 h-80 md:w-72 md:h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                                    alt="ik"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end px-4">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="w-64 h-80 md:w-72 md:h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                                    alt="ik"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="w-64 h-80 md:w-72 md:h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                                    alt="ik"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <Form
                        className="hidden 2xl:grid 2xl:grid-cols-1 2xl:lg:grid-cols-2 2xl:gap-12 2xl:lg:gap-16 mt-12"
                        type={1}
                    />
                </div>
            </section>

            <Form
                className="bg-[#e9e92f] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 2xl:hidden px-28 py-16"
                type={2}
            />
        </div>
    )
}

export default StickyScrollSection
