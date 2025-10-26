import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BorderReveal from './BorderRevealEffect'
import Form from './Form'

gsap.registerPlugin(ScrollTrigger)

const StickyScrollSection = () => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const content = contentRef.current

        // Tính toán chiều cao cần scroll
        const contentHeight = content.scrollHeight
        const viewportHeight = window.innerHeight
        const scrollDistance = contentHeight - viewportHeight

        // Pin section và scroll nội dung bên trong
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: true,
            onUpdate: (self) => {
                // Di chuyển content lên khi scroll
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
                    <div className="flex items-end px-4">
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
                    {/* <div className="hidden 2xl:grid 2xl:grid-cols-1 2xl:lg:grid-cols-2 2xl:gap-12 2xl:lg:gap-16 mt-12">
                        <div>
                            <p className="text-xs font-semibold tracking-[2px] mb-5 text-black">CONTACT US</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 text-black">
                                EVERY STORY
                                <br />
                                BEGINS WITH A<br />
                                CONVERSATION
                            </h2>
                            <p className="text-lg mb-8 text-black">Reach out — let's build something enduring.</p>
                            <button className="group relative py-3 bg-transparent text-base font-semibold cursor-pointer text-black overflow-hidden">
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    |
                                </span>
                                <span className="mx-2 tracking-widest">BOOK A CALL</span>
                                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                                    |
                                </span>
                            </button>
                        </div>
                        <form className="flex flex-col gap-8 py-5 mx-4 ">
                            <div>
                                <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                    NAME *
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full py-3 bg-transparent text-base outline-none text-black placeholder-black/50"
                                />
                                <BorderReveal borderColor="black" direction="left" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                    EMAIL *
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full py-3 bg-transparent text-base outline-none text-black placeholder-black/50"
                                />
                                <BorderReveal borderColor="black" direction="left" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                    INQUIRY TYPE *
                                </label>
                                <select className="w-full py-3 bg-transparent text-base outline-none cursor-pointer text-black">
                                    <option>Select one...</option>
                                    <option>Video Production</option>
                                    <option>Photography</option>
                                    <option>Other</option>
                                </select>
                                <BorderReveal borderColor="black" direction="left" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                    MESSAGE *
                                </label>
                                <textarea
                                    placeholder="Leave us a note"
                                    rows="4"
                                    className="w-full py-3 bg-transparent text-base outline-none resize-y text-black placeholder-black/50"
                                />
                                <BorderReveal borderColor="black" direction="left" />
                            </div>

                            <button
                                type="submit"
                                className="self-end px-10 py-4 bg-black text-[#f4e04d] border-0 rounded text-sm font-bold tracking-wider cursor-pointer transition-transform hover:scale-105"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div> */}
                </div>
            </section>

            <Form
                className="bg-[#e9e92f] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 2xl:hidden px-28 py-16"
                type={2}
            />

            <section className="min-h-screen bg-gradient-to-b from-teal-900 to-cyan-900 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-6xl font-bold mb-4">Thêm section nữa</h1>
                    <p className="text-xl">Scroll hoàn toàn bình thường ở đây</p>
                </div>
            </section>
        </div>
    )
}

export default StickyScrollSection
