import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = ({ children }) => {
    const layer1 = useRef(null)
    const layer2 = useRef(null)
    const layer3 = useRef(null)
    const containerRef = useRef(null)

    useLayoutEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { scale: 0.5 },
            {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 100%',
                    once: true,
                },
            }
        )
        gsap.fromTo(
            layer2.current,
            { opacity: 0 },
            {
                opacity: 1,
                delay: 0.1,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: layer2.current,
                    start: 'top 100%',
                    once: true,
                },
            }
        )
        gsap.fromTo(
            layer3.current,
            { opacity: 0 },
            {
                opacity: 1,
                delay: 0.1,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: layer3.current,
                    start: 'top 100%',
                    once: true,
                },
            }
        )
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative max-w-[1440px] mx-auto h-[30vh] sm:h-[50vh] md:h-screen 2xl:h-[50vh] overflow-hidden bg-black mt-12 flex items-center justify-center"
        >
            <div
                ref={layer3}
                className="absolute text-center will-change-transform overflow-hidden pointer-events-none"
                style={{
                    transform: 'translate3d(0, 35%, 0) scale3d(0.8, 0.8, 1)',
                    transformStyle: 'preserve-3d',
                    clipPath: 'inset(92% 0 0 0)',
                }}
            >
                <div className="text-4xl md:text-[13vw] 2xl:text-[200px] font-extrabold leading-[0.85] tracking-tight text-[#ffffe3]">
                    {children}
                </div>
            </div>

            <div
                ref={layer2}
                className="absolute text-center will-change-transform overflow-hidden pointer-events-none"
                style={{
                    transform: 'translate3d(0, 20%, 0) scale3d(0.9, 0.9, 1)',
                    transformStyle: 'preserve-3d',
                    clipPath: 'inset(92% 0 0 0)',
                }}
            >
                <div className="text-4xl md:text-[13vw] 2xl:text-[200px] font-extrabold leading-[0.85] tracking-tight text-[#ffffe3]">
                    {children}
                </div>
            </div>

            <div
                ref={layer1}
                className="relative text-center z-10 will-change-transform"
                style={{
                    transform: 'translate3d(0, 0, 0)',
                    transformStyle: 'preserve-3d',
                }}
            >
                <h1 className="text-4xl md:text-[13vw] 2xl:text-[200px] font-extrabold leading-[0.85] tracking-tight text-[#ffffe3]">
                    {children}
                </h1>
            </div>
        </div>
    )
}

export default Hero
