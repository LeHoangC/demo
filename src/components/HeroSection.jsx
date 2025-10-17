import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StoryMeetsCraftGSAP = () => {
    const sectionRef = useRef(null)
    const image1Ref = useRef(null)
    const image2Ref = useRef(null)
    const image3Ref = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation cho ảnh trên (di chuyển lên + thêm clip-path)
            gsap.fromTo(
                image1Ref.current,
                {
                    y: 0,
                    clipPath: 'inset(0% 0% 0% 0% round 0px)',
                },
                {
                    y: -120,
                    clipPath: 'url(#skewed-rounded)',
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 36%', // Bắt đầu khi section ở 70% viewport (tức scroll 30%)
                        toggleActions: 'play none none reverse',
                        // markers: true // Uncomment để debug
                    },
                }
            )

            // Animation cho ảnh giữa (chỉ thêm clip-path)
            gsap.fromTo(
                image2Ref.current,
                {
                    clipPath: 'inset(0% 0% 0% 0% round 0px)',
                },
                {
                    clipPath: 'url(#skewed-rounded)',
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 36%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )

            // Animation cho ảnh dưới (di chuyển xuống + thêm clip-path)
            gsap.fromTo(
                image3Ref.current,
                {
                    y: 0,
                    clipPath: 'inset(0% 0% 0% 0% round 0px)',
                },
                {
                    y: 120,
                    clipPath: 'url(#skewed-rounded)',
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 36%',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="bg-zinc-950 text-white">
            <div ref={sectionRef} className="min-h-[70vh] flex items-center justify-center p-6 md:p-12">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 z-10">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            WHERE STORY
                            <br />
                            MEETS CRAFT
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                            Our work spans narrative film, branded cinema, and art-driven collaborations — all rooted in
                            the same belief: every detail matters.
                        </p>

                        <button className="group flex items-center gap-3 text-white border-l-4 border-orange-500 pl-6 py-2 text-lg font-medium hover:border-orange-400 transition-colors duration-300">
                            VIEW OUR WORK
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </button>
                    </div>

                    {/* Right Image Stack */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        {/* SVG Clip Path Definition */}
                        <svg width="0" height="0">
                            <defs>
                                <clipPath id="skewed-rounded" clipPathUnits="objectBoundingBox">
                                    <path d="M 0.14,0.05 Q 0.15,0 0.2,0 L 0.8,0 Q 0.85,0 0.85,0.05 L 1,0.90 Q 1,1 0.95,1 L 0.05,1 Q 0,1 0,0.95 Z" />
                                </clipPath>
                            </defs>
                        </svg>

                        {/* Image 1 - Top */}
                        <div ref={image1Ref} className="w-full h-52 overflow-hidden absolute" style={{ zIndex: 2 }}>
                            <img
                                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                                alt="Creative work 1"
                                className="w-full h-full object-cover"
                                style={{
                                    filter: 'sepia(0.3) saturate(1.3) hue-rotate(-10deg) brightness(1.1)',
                                }}
                            />
                        </div>

                        {/* Image 2 - Middle */}
                        <div ref={image2Ref} className="w-full h-52 overflow-hidden absolute" style={{ zIndex: 1 }}>
                            <img
                                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80"
                                alt="Creative work 2"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Image 3 - Bottom */}
                        <div ref={image3Ref} className="w-full h-52 overflow-hidden absolute">
                            <img
                                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                                alt="Creative work 3"
                                className="w-full h-full object-cover"
                                style={{
                                    filter: 'sepia(0.2) saturate(1.2) hue-rotate(160deg) brightness(0.9)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryMeetsCraftGSAP
