import { useState } from 'react'

export default function CrewSection() {
    const crew = [
        {
            name: 'Ava Reed',
            role: 'Executive Producer',
            image1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
            image2: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
            bg: 'bg-red-900',
        },
        {
            name: 'Zoe Hart',
            role: 'Production Manager',
            image1: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop',
            image2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
            bg: 'bg-yellow-700',
        },
        {
            name: 'Nia Cross',
            role: 'Director of Photography',
            image1: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
            image2: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',
            bg: 'bg-red-950',
        },
        {
            name: 'Skye Orr',
            role: 'Production Designer',
            image1: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop',
            image2: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
            bg: 'bg-orange-600',
        },
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <section className="bg-black px-6 py-16">
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12">THE CREW</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {crew.map((member, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background color */}
                            <div className={`absolute inset-0 ${member.bg}`}></div>

                            {/* Image 1 */}
                            <img
                                src={member.image1}
                                alt={member.name}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                    hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                                }`}
                            />

                            {/* Image 2 */}
                            <img
                                src={member.image2}
                                alt={`${member.name} alternate`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                }`}
                            />

                            {/* Text overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
                                <p className="text-white/90 text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
