import React, { useRef, useState, useEffect } from 'react'

const Reveal = () => {
    const gridRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting) // Cập nhật liên tục
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
                <div className="p-4 flex flex-col justify-center items-center md:items-start text-[#ffffe3]">
                    <p className="text-3xl font-bold tracking-widest">Short Film</p>
                    <p className="text-7xl font-extrabold tracking-widest">
                        Fever
                        <br />
                        Coast
                    </p>
                    <button className="group relative py-3 bg-transparent text-base font-semibold cursor-pointer text-[#ffffe3] overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                            |
                        </span>
                        <span className="mx-2 tracking-wider">EXPLORE</span>
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                            |
                        </span>
                    </button>
                </div>

                <div className="flex flex-col items-center relative h-[400px]">
                    {/* Ảnh 1 - nhỏ nhất */}
                    <div
                        className={`h-48 w-full max-w-[320px] absolute transition-all duration-700 ease-out ${
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

                    {/* Ảnh 2 - giữa */}
                    <div
                        className={`h-56 w-full max-w-[360px] absolute transition-all duration-700 ease-out ${
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

                    {/* Ảnh 3 - lớn nhất */}
                    <div
                        className={`h-64 w-full max-w-[400px] absolute transition-all duration-700 ease-out ${
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

export default Reveal
