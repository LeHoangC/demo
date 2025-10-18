import React from 'react'

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#10100e] text-stone-200">
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-6">
                <ul className="hidden md:flex justify-between gap-8 text-xs tracking-widest uppercase">
                    <li className="relative scale-150 group">
                        {/* Layer 1 */}
                        <p
                            className="absolute -top-3 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100"
                            style={{
                                clipPath: 'inset(0 0 65% 0)',
                            }}
                        >
                            FH
                        </p>

                        {/* Layer 2 */}
                        <p
                            className="absolute -top-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100"
                            style={{
                                clipPath: 'inset(0 0 50% 0)',
                            }}
                        >
                            FH
                        </p>

                        {/* Main text */}
                        <a href="#work" className="hover:opacity-60 transition-opacity duration-300">
                            FH
                        </a>

                        {/* Layer 3 */}
                        <p
                            className="absolute top-2 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100"
                            style={{
                                clipPath: 'inset(60% 0 0 0)',
                            }}
                        >
                            FH
                        </p>

                        {/* Layer 4 */}
                        <p
                            className="absolute top-3 opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100"
                            style={{
                                clipPath: 'inset(70% 0 0 0)',
                            }}
                        >
                            FH
                        </p>
                    </li>

                    <li>
                        <a href="#work" className="hover:opacity-60 transition-opacity duration-300">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#service" className="hover:opacity-60 transition-opacity duration-300">
                            Service
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:opacity-60 transition-opacity duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:opacity-60 transition-opacity duration-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
