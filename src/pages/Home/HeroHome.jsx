import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroHome = () => {
    const layer1 = useRef(null)
    const layer2 = useRef(null)
    const layer3 = useRef(null)
    const layer4 = useRef(null)
    const layer5 = useRef(null)
    const containerRef = useRef(null)
    const [animationComplete, setAnimationComplete] = useState(false)

    useEffect(() => {
        const timeline = gsap.timeline({
            onComplete: () => setAnimationComplete(true),
        })

        timeline
            .fromTo(
                layer3.current,
                { scale: 0.5 },
                {
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                }
            )
            .fromTo(
                [layer2.current, layer4.current],
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 1,
                    scale: 0.9,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '<'
            )
            .fromTo(
                [layer1.current, layer5.current],
                { opacity: 0, scale: 0.5 },
                {
                    opacity: 1,
                    scale: 0.8,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '<'
            )
    }, [])

    return (
        <div
            ref={containerRef}
            className={`relative max-w-[1440px] mx-auto overflow-hidden bg-black mt-12 flex items-center justify-center transition-all duration-700 ease-out ${
                animationComplete ? 'h-[30vh] md:h-[50vh]' : 'h-screen'
            }`}
        >
            <div
                ref={layer1}
                className="absolute text-center will-change-transform overflow-hidden pointer-events-none transform -translate-y-1/2 scale-80 [clip-path:inset(0_0_72%_0)]"
            >
                <div className="text-6xl md:text-[200px] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                    FRAMEHAUS
                </div>
            </div>

            <div
                ref={layer2}
                className="absolute text-center will-change-transform overflow-hidden pointer-events-none transform -translate-y-1/4 scale-90 [clip-path:inset(0_0_72%_0)]"
            >
                <div className="text-6xl md:text-[200px] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                    FRAMEHAUS
                </div>
            </div>

            <div ref={layer3} className="relative text-center z-10 will-change-transform">
                <h1 className="text-6xl md:text-[200px] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                    FRAMEHAUS
                </h1>
            </div>

            <div
                ref={layer4}
                className="absolute text-center will-change-transform overflow-hidden pointer-events-none transform translate-y-[30%] scale-90 [clip-path:inset(86%_0_0_0)]"
            >
                <div className="text-6xl md:text-[200px] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                    FRAMEHAUS
                </div>
            </div>
            <div
                ref={layer5}
                className="absolute text-center will-change-transform overflow-hidden pointer-events-none translate-y-[60%] scale-80 [clip-path:inset(86%_0_0_0)]"
            >
                <div className="text-6xl md:text-[200px] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                    FRAMEHAUS
                </div>
            </div>
        </div>
    )
}

export default HeroHome
