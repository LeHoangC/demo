import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BorderReveal({ direction = 'center', duration = 0.5, className = '', borderColor = 'white' }) {
    const borderRef = useRef(null)

    useEffect(() => {
        const origins = {
            left: 'left',
            right: 'right',
            center: 'center',
        }

        gsap.fromTo(
            borderRef.current,
            { scaleX: 0 },
            {
                scaleX: 1,
                duration,
                ease: 'power2.out',
                transformOrigin: origins[direction],
                scrollTrigger: {
                    trigger: borderRef.current,
                    start: 'top 90%',
                    once: true,
                },
            }
        )
    }, [direction, duration])

    return (
        <div
            ref={borderRef}
            className={`border-b border-[1px] border-${borderColor} w-full max-w-[1440px] mx-auto ${className}`}
        />
    )
}
