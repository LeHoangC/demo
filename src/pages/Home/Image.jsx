import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Image() {
    useEffect(() => {
        const containers = gsap.utils.toArray('.image-container')

        containers.forEach((container) => {
            const image = container.querySelector('img')

            gsap.to(image, {
                y: () => image.offsetHeight - container.offsetHeight,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    scrub: true,
                    pin: false,
                    // markers: true, // bật nếu muốn debug
                    invalidateOnRefresh: true,
                },
            })
        })

        // Cleanup ScrollTriggers khi unmount
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <section className="max-w-[1200px] mx-auto flex flex-col items-center justify-center bg-black gap-16 my-20">
            <div className="image-container rounded-2xl relative overflow-hidden bg-gray-300 w-[90vw] 2xl:w-[50vw] h-[100vh] 2xl:h-[50vh]">
                <img
                    src="https://picsum.photos/1200/800"
                    alt="Parallax"
                    className="absolute bottom-0 left-0 w-full h-[150%] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm md:text-base font-light tracking-wide">
                            2024 | Berlin Independent Cinema Prize
                        </div>
                    </div>

                    <div className="absolute top-8 md:top-12 right-8 md:right-12 flex flex-col items-end gap-6">
                        <div className="text-right">
                            <div className="flex gap-1 mb-1 justify-end">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm md:text-base font-semibold mb-1">
                                Raw, immediate, unforgettable.
                            </div>
                            <div className="text-xs md:text-sm opacity-80 tracking-widest">FILM COMMENT</div>
                        </div>

                        <div className="text-right">
                            <div className="flex gap-1 mb-1 justify-end">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm md:text-base font-semibold mb-1">
                                Framehaus at its most visceral.
                            </div>
                            <div className="text-xs md:text-sm opacity-80 tracking-widest">SIGHT & SOUND</div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-xs md:text-sm tracking-widest mb-2 opacity-90">SHORT FILM</div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none">
                            FEVER
                            <br />
                            COAST
                        </h1>
                        <div className="text-sm md:text-base tracking-wide opacity-90">DIRECTOR: AKIRA NOMURA</div>
                    </div>

                    <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12">
                        <button className="text-sm md:text-base tracking-widest font-light hover:opacity-70 transition-opacity">
                            | EXPLORE |
                        </button>
                    </div>
                </div>
            </div>

            <div className="image-container rounded-2xl relative overflow-hidden bg-gray-300 w-[90vw] 2xl:w-[50vw] h-[100vh] 2xl:h-[50vh]">
                <img
                    src="https://picsum.photos/1201/801"
                    alt="Parallax"
                    className="absolute bottom-0 left-0 w-full h-[150%] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm md:text-base font-light tracking-wide">
                            2024 | Sundance Special Jury Prize
                        </div>
                    </div>

                    <div className="absolute top-8 md:top-12 right-8 md:right-12 flex flex-col items-end gap-6">
                        <div className="text-right">
                            <div className="flex gap-1 mb-1 justify-end">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm md:text-base font-semibold mb-1">Haunting and beautiful.</div>
                            <div className="text-xs md:text-sm opacity-80 tracking-widest">THE GUARDIAN</div>
                        </div>

                        <div className="text-right">
                            <div className="flex gap-1 mb-1 justify-end">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm md:text-base font-semibold mb-1">A visual masterpiece.</div>
                            <div className="text-xs md:text-sm opacity-80 tracking-widest">SIGHT & SOUND</div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-xs md:text-sm tracking-widest mb-2 opacity-90">SHORT FILM</div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none">
                            MIDNIGHT
                            <br />
                            TIDES
                        </h1>
                        <div className="text-sm md:text-base tracking-wide opacity-90">DIRECTOR: SOFIA CHEN</div>
                    </div>

                    <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12">
                        <button className="text-sm md:text-base tracking-widest font-light hover:opacity-70 transition-opacity">
                            | EXPLORE |
                        </button>
                    </div>
                </div>
            </div>

            <div className="image-container rounded-2xl relative overflow-hidden bg-gray-300 w-[90vw] 2xl:w-[50vw] h-[100vh] 2xl:h-[50vh]">
                <img
                    src="https://picsum.photos/1202/802"
                    alt="Parallax"
                    className="absolute bottom-0 left-0 w-full h-[150%] object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm md:text-base font-light tracking-wide">
                            2024 | Cannes Critics' Week Winner
                        </div>
                    </div>

                    <div className="absolute top-8 md:top-12 right-8 md:right-12 flex flex-col items-end gap-6">
                        <div className="text-right">
                            <div className="flex gap-1 mb-1 justify-end">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm md:text-base font-semibold mb-1">Bold and uncompromising.</div>
                            <div className="text-xs md:text-sm opacity-80 tracking-widest">VARIETY</div>
                        </div>

                        <div className="text-right">
                            <div className="flex gap-1 mb-1 justify-end">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-400">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm md:text-base font-semibold mb-1">Cinema at its finest.</div>
                            <div className="text-xs md:text-sm opacity-80 tracking-widest">SIGHT & SOUND</div>
                        </div>
                    </div>

                    {/* Bottom left content */}
                    <div className="flex flex-col">
                        <div className="text-xs md:text-sm tracking-widest mb-2 opacity-90">SHORT FILM</div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none">
                            STEEL
                            <br />
                            DREAMS
                        </h1>
                        <div className="text-sm md:text-base tracking-wide opacity-90">DIRECTOR: MARCO ROSSI</div>
                    </div>

                    {/* Bottom right explore button */}
                    <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12">
                        <button className="text-sm md:text-base tracking-widest font-light hover:opacity-70 transition-opacity">
                            | EXPLORE |
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
