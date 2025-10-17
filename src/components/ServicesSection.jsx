import React from 'react'

const services = [
    {
        id: '01',
        title: 'Production',
        items: [
            {
                label: 'Concept Design',
                text: 'Translating story into space, tone, and visual intention.',
            },
            {
                label: 'Sourcing',
                text: 'Finding materials, textures, and objects that ground the world in reality.',
            },
            {
                label: 'Set Dressing',
                text: 'Composing scenes with layered detail — everything placed with purpose.',
            },
        ],
        img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: '02',
        title: 'SFX & Effects',
        items: [
            {
                label: 'Character Make-up',
                text: 'Building physical identities that blur the line between realism and illusion.',
            },
            {
                label: 'Sculpting',
                text: 'Shaping form and texture to give ideas physical weight and presence.',
            },
            {
                label: 'Concept Design',
                text: 'Imagining the surreal and rendering it tangible — from sketch to surface.',
            },
        ],
        img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80',
    },
    {
        id: '03',
        title: 'Cinematography',
        items: [
            {
                label: 'Sound Design',
                text: 'Sculpting sonic atmosphere that lingers long after the final frame.',
            },
            {
                label: 'Color Grading',
                text: 'Every hue intentional — emotion, dialed in to the pixel.',
            },
            {
                label: 'Motion Design',
                text: 'Moving visuals that pulse with rhythm, nuance, and narrative clarity.',
            },
        ],
        img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
    },
]

export default function ServicesSection() {
    return (
        <div className="bg-black text-[#f8f7e9] py-20 px-6 font-sans">
            {/* Title */}
            <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-6xl md:text-7xl font-extrabold uppercase tracking-tight">Services</h2>
            </div>

            {/* Services List */}
            <div className="max-w-6xl mx-auto space-y-20">
                {services.map((service, i) => (
                    <div key={service.id} className="group">
                        <div class="border-b border-white w-full max-w-6xl mx-auto"></div>
                        <div className="grid md:grid-cols-12 items-center">
                            {/* Image with Flip Effect */}
                            <div className="relative col-span-4 perspective w-full h-80 flex justify-center items-center">
                                <div className="absolute -top-4 w-72 h-72 transition-all duration-500 transform-style-preserve-3d -rotate-x-70 -rotate-z-30 -rotate-y-10 opacity-0 group-hover:rotate-x-0 group-hover:-rotate-y-0 group-hover:rotate-z-0 group-hover:opacity-100">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl backface-hidden"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <p className="col-span-2 text-sm text-center tracking-widest mb-3">{service.id}</p>
                            <div className="col-span-6">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-5">{service.title}</h3>
                                <div className="space-y-4">
                                    {service.items.map((item, j) => (
                                        <div key={j}>
                                            <p className="font-semibold">{item.label}</p>
                                            <p className="text-sm text-gray-300">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
