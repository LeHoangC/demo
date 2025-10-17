import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero3DLayers() {
    return (
        <div className="relative max-w-[1440px] mx-auto h-[34vh] md:h-[50vh] lg:h-[70vh] overflow-hidden mt-16 bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="absolute text-center pointer-events-none will-change-transform overflow-hidden"
                    style={{
                        transform: 'translate3d(0px, 26%, 0px) scale3d(0.8, 0.8, 1)',
                        transformStyle: 'preserve-3d',
                        clipPath: 'inset(92% 0 0 0)',
                    }}
                >
                    <div className="text-[6vw] md:text-[8vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                        WHAT WE
                        <br />
                        SHAPE
                    </div>
                </div>

                <div
                    className="absolute text-center pointer-events-none will-change-transform overflow-hidden"
                    style={{
                        transform: 'translate3d(0px, 9%, 0px) scale3d(0.9, 0.9, 1)',
                        transformStyle: 'preserve-3d',
                        clipPath: 'inset(92% 0 0 0)',
                    }}
                >
                    <div className="text-[6vw] md:text-[8vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                        WHAT WE
                        <br />
                        SHAPE
                    </div>
                </div>

                <div
                    className="absolute text-center z-10 will-change-transform"
                    style={{
                        transform: 'translate3d(0px, -30px, 0px) scale3d(1, 1, 1)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <h1 className="text-[6vw] md:text-[8vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                        WHAT WE
                        <br />
                        SHAPE
                    </h1>
                </div>
            </div>
        </div>
    )
}
