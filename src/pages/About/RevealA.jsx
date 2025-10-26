import { useRef, useState, useEffect } from 'react'

const RevealA = () => {
    const gridRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredImage, setHoveredImage] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.5 }
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
            <div ref={gridRef} className="">
                <div className="flex flex-col items-center relative h-[40vh] md:h-[60vh]">
                    <div
                        className={`w-[60vw] sm:w-[50vw] md:w-[44vw] 2xl:w-[32vw] h-[16vh] sm:h-[20vh] md:h-[24vh] 2xl:h-[28vh] absolute transition-all duration-700 ease-out group scale-90
        ${
            isVisible
                ? 'top-32 2xl:top-72 [transform:perspective(600px)_rotateX(30deg)]'
                : 'top-0 [transform:perspective(600px)_rotateX(0deg)]'
        }
        ${hoveredImage !== null && hoveredImage !== 3 ? 'opacity-0' : 'opacity-100'}
        ${hoveredImage === 3 ? 'scale-100' : ''}
        hover:z-30`}
                        onMouseEnter={() => setHoveredImage(3)}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                            alt="Creative work 3"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                    </div>

                    <div
                        className={`w-[60vw] sm:w-[50vw] md:w-[44vw] 2xl:w-[32vw] h-[16vh] sm:h-[20vh] md:h-[24vh] 2xl:h-[28vh] absolute transition-all duration-700 ease-out group scale-95
        ${
            isVisible
                ? 'top-20 2xl:top-40 [transform:perspective(600px)_rotateX(30deg)]'
                : 'top-0 [transform:perspective(600px)_rotateX(0deg)]'
        }
        ${hoveredImage !== null && hoveredImage !== 2 ? 'opacity-0 z-10' : 'opacity-100'}
        ${hoveredImage === 2 ? 'scale-100' : ''}
        hover:z-30`}
                        onMouseEnter={() => setHoveredImage(2)}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
                            alt="Creative work 2"
                            className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        />
                    </div>

                    <div
                        className={`w-[60vw] sm:w-[50vw] md:w-[44vw] 2xl:w-[32vw] h-[16vh] sm:h-[20vh] md:h-[24vh] 2xl:h-[28vh] absolute transition-all duration-700 ease-out group
        ${
            isVisible
                ? 'top-4 [transform:perspective(600px)_rotateX(30deg)]'
                : 'top-0 [transform:perspective(600px)_rotateX(0deg)]'
        }
        ${hoveredImage !== null && hoveredImage !== 1 ? 'opacity-0' : 'opacity-100'}
        hover:z-30`}
                        onMouseEnter={() => setHoveredImage(1)}
                        onMouseLeave={() => setHoveredImage(null)}
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

export default RevealA
