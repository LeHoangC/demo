import { Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-gray-800">
                    {/* Logo */}
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-5xl font-bold tracking-tight">FH</h2>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap gap-8 text-sm">
                        <a href="#work" className="hover:text-yellow-300 transition-colors font-medium tracking-wide">
                            WORK
                        </a>
                        <a
                            href="#services"
                            className="text-yellow-300 hover:text-yellow-400 transition-colors font-medium tracking-wide"
                        >
                            SERVICES
                        </a>
                        <a href="#about" className="hover:text-yellow-300 transition-colors font-medium tracking-wide">
                            ABOUT
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-yellow-300 transition-colors font-medium tracking-wide"
                        >
                            CONTACT
                        </a>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8">
                    {/* Copyright and Credits */}
                    <div className="flex flex-wrap items-center gap-2 text-sm mb-6 md:mb-0">
                        <span>© 2025 FRAMEHAUS</span>
                        <span className="text-gray-600">|</span>
                        <span className="text-gray-400">BUILT BY</span>
                        <a
                            href="https://ahd.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-300 hover:text-yellow-400 transition-colors underline"
                        >
                            AHD.DESIGN
                        </a>
                    </div>

                    {/* Middle Links */}
                    <div className="flex flex-wrap gap-8 text-sm mb-6 md:mb-0">
                        <a href="#webflow" className="text-gray-400 hover:text-white transition-colors">
                            WEBFLOW
                        </a>
                        <a href="#style-guide" className="text-gray-400 hover:text-white transition-colors">
                            STYLE GUIDE
                        </a>
                        <a href="#license" className="text-gray-400 hover:text-white transition-colors">
                            LICENSE
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href="#threads"
                            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-yellow-300 hover:text-yellow-300 transition-colors"
                            aria-label="Threads"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.672 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                            </svg>
                        </a>
                        <a
                            href="#instagram"
                            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-yellow-300 hover:text-yellow-300 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="#twitter"
                            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-yellow-300 hover:text-yellow-300 transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="#tiktok"
                            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-yellow-300 hover:text-yellow-300 transition-colors"
                            aria-label="TikTok"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative max-w-[1440px] mx-auto h-40 overflow-hidden bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="absolute text-center pointer-events-none will-change-transform overflow-hidden"
                        style={{
                            transform: 'translate3d(0px, -26%, 0px) scale3d(0.8, 0.8, 1)',
                            transformStyle: 'preserve-3d',
                            clipPath: 'inset(0 0 70% 0)',
                        }}
                    >
                        <div className="text-[6vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                            FRAMEHAUS
                        </div>
                    </div>

                    <div
                        className="absolute text-center pointer-events-none will-change-transform overflow-hidden"
                        style={{
                            transform: 'translate3d(0px, 0px, 0px) scale3d(0.9, 0.9, 1)',
                            transformStyle: 'preserve-3d',
                            clipPath: 'inset(0 0 70% 0)',
                        }}
                    >
                        <div className="text-[6vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">
                            FRAMEHAUS
                        </div>
                    </div>

                    <div
                        className="absolute text-center z-10 will-change-transform"
                        style={{
                            transform: 'translate3d(0px, 30px, 0px) scale3d(1, 1, 1)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <h1 className="text-[6vw] font-bold leading-[0.85] tracking-tight text-[#ffffe3]">FRAMEHAUS</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}
