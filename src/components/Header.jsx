import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#10100e] text-stone-200">
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-6">
                {/* Mobile Header */}
                <div className="flex md:hidden justify-between items-center">
                    <a href="/" className="text-base font-bold">
                        FH
                    </a>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="relative w-16 h-6 text-xs tracking-widest uppercase overflow-hidden"
                    >
                        <span
                            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                                isMenuOpen ? '-translate-y-full' : 'translate-y-0'
                            }`}
                        >
                            Menu
                        </span>
                        <span
                            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                                isMenuOpen ? 'translate-y-0' : 'translate-y-full'
                            }`}
                        >
                            Close
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${
                        isMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
                    }`}
                >
                    <ul className="flex flex-col gap-4 text-sm tracking-widest uppercase">
                        <li>
                            <NavLink
                                to="/work"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 hover:opacity-60 transition-opacity duration-300 ${
                                        isActive ? 'text-yellow-300' : ''
                                    }`
                                }
                            >
                                Work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/service"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 hover:opacity-60 transition-opacity duration-300 ${
                                        isActive ? 'text-yellow-300' : ''
                                    }`
                                }
                            >
                                Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 hover:opacity-60 transition-opacity duration-300 ${
                                        isActive ? 'text-yellow-300' : ''
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block py-2 hover:opacity-60 transition-opacity duration-300 ${
                                        isActive ? 'text-yellow-300' : ''
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Desktop Menu */}
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
                        <a href="/" className="hover:opacity-60 transition-opacity duration-300">
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
                        <NavLink
                            to="/work"
                            className={({ isActive }) =>
                                `hover:opacity-60 transition-opacity duration-300 ${isActive ? 'text-yellow-300' : ''}`
                            }
                        >
                            Work
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/service"
                            className={({ isActive }) =>
                                `hover:opacity-60 transition-opacity duration-300 ${isActive ? 'text-yellow-300' : ''}`
                            }
                        >
                            Service
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `hover:opacity-60 transition-opacity duration-300 ${isActive ? 'text-yellow-300' : ''}`
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:opacity-60 transition-opacity duration-300 ${isActive ? 'text-yellow-300' : ''}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
