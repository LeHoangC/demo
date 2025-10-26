import { useRef, useState, useEffect } from 'react'

const RevealS = () => {
    const gridRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.8 }
        )

        if (gridRef.current) {
            observer.observe(gridRef.current)
        }

        return () => {
            if (gridRef.current) {
                observer.unobserve(gridRef.current)
            }
        }
    }, [])

    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <div ref={gridRef} className="grid md:grid-cols-2 min-h-96 my-8">
                <div className="text-white flex flex-col justify-center">
                    <h1 className="text-4xl font-bold leading-tight">
                        WHERE STORY
                        <br />
                        MEETS CRAFT
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                        Our work spans narrative film, branded cinema, and art-driven collaborations — all rooted in the
                        same belief: every detail matters.
                    </p>

                    <button className="group self-start relative py-3 bg-transparent text-base font-semibold cursor-pointer overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                            |
                        </span>
                        <span className="mx-2 tracking-widest">VIEW OUR WORK</span>
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                            |
                        </span>
                    </button>
                </div>

                <div className="flex flex-col items-center relative h-[400px]">
                    <div
                        className={`h-48 w-full max-w-[400px] absolute transition-all duration-700 ease-out ${
                            isVisible
                                ? 'top-48 [transform:perspective(500px)_rotateX(45deg)]'
                                : 'top-0 [transform:perspective(500px)_rotateX(0deg)]'
                        }`}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                            alt="Creative work 3"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                    </div>

                    <div
                        className={`h-56 w-full max-w-[440px] absolute transition-all duration-700 ease-out ${
                            isVisible
                                ? 'top-28 [transform:perspective(500px)_rotateX(45deg)]'
                                : 'top-0 [transform:perspective(500px)_rotateX(0deg)]'
                        }`}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                            alt="Creative work 2"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                    </div>

                    <div
                        className={`h-64 w-full max-w-[480px] absolute transition-all duration-700 ease-out ${
                            isVisible
                                ? 'top-4 [transform:perspective(500px)_rotateX(45deg)]'
                                : 'top-0 [transform:perspective(500px)_rotateX(0deg)]'
                        }`}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                            alt="Creative work 1"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevealS
