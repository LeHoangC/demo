import React from 'react'

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#10100e] text-stone-200">
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-6">
                <ul className="hidden md:flex justify-between gap-8 text-xs tracking-widest uppercase">
                    <li>
                        <a href="#work" className="hover:opacity-60 transition-opacity duration-300">
                            FH
                        </a>
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
