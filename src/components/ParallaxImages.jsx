import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function ImageParallaxMouse() {
    const containerRef = useRef(null)
    const layer1Ref = useRef(null)
    const layer2Ref = useRef(null)
    const layer3Ref = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const layer1 = layer1Ref.current
        const layer2 = layer2Ref.current
        const layer3 = layer3Ref.current

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            // Layer 1 (front) - theo sát chuột nhất
            gsap.to(layer1, {
                x: x,
                y: y,
                duration: 0.3,
                ease: 'power2.out',
            })

            // Layer 2 (middle) - chậm hơn 1 chút
            gsap.to(layer2, {
                x: x,
                y: y,
                duration: 0.7,
                ease: 'power2.out',
            })

            // Layer 3 (back) - chậm nhất
            gsap.to(layer3, {
                x: x,
                y: y,
                duration: 1.4,
                ease: 'power2.out',
            })
        }

        const handleMouseEnter = () => {
            gsap.to([layer1, layer2, layer3], {
                opacity: 1,
                scale: 1,
                duration: 0.3,
            })
        }

        const handleMouseLeave = () => {
            const containerRect = container.getBoundingClientRect()
            const layerRect = layer1.getBoundingClientRect()

            const centerX = containerRect.width / 2
            const centerY = containerRect.height / 2

            gsap.to([layer1, layer2, layer3], {
                x: centerX,
                y: centerY,
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
            })
        }

        container.addEventListener('mousemove', handleMouseMove)
        container.addEventListener('mouseenter', handleMouseEnter)
        container.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            container.removeEventListener('mousemove', handleMouseMove)
            container.removeEventListener('mouseenter', handleMouseEnter)
            container.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <div className="bg-[#ffffe3] flex items-center justify-center p-8">
            <div
                ref={containerRef}
                className="relative w-[60vw] h-[90vh] bg-[ffffe3] rounded-2xl overflow-hidden cursor-none border border-stone-200/10"
            >
                <div
                    ref={layer3Ref}
                    className="absolute top-0 left-0 pointer-events-none will-change-transform opacity-0"
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <div className="w-60 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div
                    ref={layer2Ref}
                    className="absolute top-0 left-0 pointer-events-none will-change-transform opacity-0"
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <div className="w-60 h-80 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-2xl flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div
                    ref={layer1Ref}
                    className="absolute top-0 left-0 pointer-events-none will-change-transform opacity-0"
                    style={{ transform: 'translate(-50%, -50%)' }}
                >
                    <div className="w-60 h-80 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl shadow-2xl flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
                    <div class=" mx-auto">
                        <p class="uppercase tracking-widest mb-3 text-3xl">Every Detail Matters</p>
                        <h1 class="text-5xl md:text-9xl font-extrabold leading-tight text-[#10100e] uppercase">
                            We approach
                            <br />
                            Every Project
                            <br />
                            With:
                        </h1>
                    </div>

                    <div class="border-b border-black w-full max-w-6xl mx-auto my-12"></div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        <div>
                            <h2 class="text-3xl font-bold mb-3">01</h2>
                            <h3 class="uppercase font-semibold mb-2">Restraint</h3>
                            <p class="text-sm leading-relaxed text-gray-700">
                                We favor clarity over clutter. Every decision is intentional, guided by the narrative,
                                not noise.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-3xl font-bold mb-3">02</h2>
                            <h3 class="uppercase font-semibold mb-2">Precision</h3>
                            <p class="text-sm leading-relaxed text-gray-700">
                                Details are everything. From framing to finish, we execute with care and control to
                                serve the story.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-3xl font-bold mb-3">03</h2>
                            <h3 class="uppercase font-semibold mb-2">Emotion</h3>
                            <p class="text-sm leading-relaxed text-gray-700">
                                We aim to move. Every element is shaped to stir feeling and forge connection through
                                atmosphere.
                            </p>
                        </div>
                    </div>

                    <div class="border-b border-black w-full max-w-6xl mx-auto my-12"></div>
                </div>
            </div>
        </div>
    )
}
