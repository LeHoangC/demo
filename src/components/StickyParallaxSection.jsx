import React from 'react'

export default function StickyParallaxSection() {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
            alt: 'Person with guitar',
            className: 'top-[calc(100vh-320px)] left-[15%]', // Hiển thị full từ đầu
            size: 'w-64 h-80 md:w-72 md:h-96',
        },
        {
            url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
            alt: 'Person outdoor',
            className: 'top-[calc(100vh-105px)] right-[12%]', // Hiển thị 3/4 từ đầu (105px = 420px * 1/4)
            size: 'w-72 h-96 md:w-80 md:h-[420px]',
        },
        {
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
            alt: 'Portrait',
            className: 'top-[calc(140vh)] left-1/2 -translate-x-1/2', // Ẩn dưới, trồi lên khi scroll
            size: 'w-64 h-80 md:w-72 md:h-96',
        },
    ]

    return (
        <div className="bg-gray-100">
            <div className="relative h-[240vh]">
                <div className="sticky top-0 h-screen bg-[#f4e04d] flex items-center justify-center overflow-hidden">
                    <div className="text-center z-10 max-w-4xl px-5">
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-tight">
                            FOR THOSE
                            <br />
                            WHO SEE IN
                            <br />
                            FRAMES.
                        </h2>
                    </div>
                </div>

                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute ${img.size} rounded-xl overflow-hidden shadow-2xl ${img.className}`}
                    >
                        <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                    </div>
                ))}

                <div className="absolute top-[210vh] left-0 right-0 px-5 bg-[#f4e04d] flex items-center justify-center">
                    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left side - Text */}
                        <div>
                            <p className="text-xs font-semibold tracking-[2px] mb-5 text-black">CONTACT US</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-5 text-black">
                                EVERY STORY
                                <br />
                                BEGINS WITH A<br />
                                CONVERSATION
                            </h2>
                            <p className="text-lg mb-8 text-black">Reach out — let's build something enduring.</p>
                            <button className="py-3 bg-transparent border-0 border-b-2 border-black text-base font-semibold cursor-pointer text-black hover:opacity-70 transition-opacity">
                                | BOOK A CALL |
                            </button>
                        </div>

                        <div>
                            <form className="flex flex-col gap-8 py-5">
                                <div>
                                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                        NAME *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full py-3 border-0 border-b border-black bg-transparent text-base outline-none text-black placeholder-black/50"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                        EMAIL *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full py-3 border-0 border-b border-black bg-transparent text-base outline-none text-black placeholder-black/50"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                        INQUIRY TYPE *
                                    </label>
                                    <select className="w-full py-3 border-0 border-b border-black bg-transparent text-base outline-none cursor-pointer text-black">
                                        <option>Select one...</option>
                                        <option>Video Production</option>
                                        <option>Photography</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold tracking-wider mb-2 text-black">
                                        MESSAGE *
                                    </label>
                                    <textarea
                                        placeholder="Leave us a note"
                                        rows="4"
                                        className="w-full py-3 border-0 border-b border-black bg-transparent text-base outline-none resize-y text-black placeholder-black/50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="self-end px-10 py-4 bg-black text-[#f4e04d] border-0 rounded text-sm font-bold tracking-wider cursor-pointer transition-transform hover:scale-105"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
