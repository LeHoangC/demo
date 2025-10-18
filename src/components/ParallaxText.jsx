import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FramehausZoomEffect() {
    const containerRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { scale: 0.5, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 100%',
                    once: true,
                },
            }
        )
    }, [])

    return (
        <div ref={containerRef} className="relative max-w-[1440px] mx-auto h-40 overflow-hidden bg-black mt-12">
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="absolute text-center pointer-events-none will-change-transform overflow-hidden"
                    style={{
                        transform: 'translate3d(0px, -26%, 0px) scale3d(0.8, 0.8, 1)',
                        transformStyle: 'preserve-3d',
                        clipPath: 'inset(0 0 70% 0)',
                    }}
                >
                    <div className="text-[6vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">FRAMEHAUS</div>
                </div>

                <div
                    className="absolute text-center pointer-events-none will-change-transform overflow-hidden"
                    style={{
                        transform: 'translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)',
                        transformStyle: 'preserve-3d',
                        clipPath: 'inset(0 0 70% 0)',
                    }}
                >
                    <div className="text-[6vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">FRAMEHAUS</div>
                </div>

                <div
                    className="absolute text-center z-10 will-change-transform"
                    style={{
                        transform: 'translate3d(0px, 30px, 0px) scale3d(1, 1, 1)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <h1 className="text-[6vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">FRAMEHAUS</h1>
                </div>
            </div>
        </div>
    )
}
