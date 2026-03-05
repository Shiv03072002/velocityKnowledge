"use client";
import { useState, useEffect } from "react";
import { Calendar, ChevronDown, Search, X, Menu } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Training Programs", dropdown: true, href: "/programs" },
    { label: "About", dropdown: true, href: "/about" },
    { label: "Contact", dropdown: false, href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    // Handle navigation
    const handleNavigation = (href) => {
        window.location.href = href;
    };

    return (
        <>
            <div className="bg-white sticky top-0 z-50 transition-all duration-300" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        
                        {/* Logo - Links to home */}
                        <div 
                            className="flex items-center flex-1 md:flex-none cursor-pointer"
                            onClick={() => window.location.href = '/'}
                        >
                            <div className="relative h-10 w-32 sm:h-12 sm:w-40 md:h-20 md:w-60">
                                <Image
                                    src="/images/logo.png"
                                    alt="Velocity Knowledge Logo"
                                    fill
                                    priority
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => handleNavigation(link.href)}
                                    className="flex items-center gap-1 text-gray-600 hover:text-black text-sm font-medium transition-colors group"
                                >
                                    {link.label}
                                    {link.dropdown && (
                                        <ChevronDown 
                                            size={16} 
                                            className="group-hover:rotate-180 transition-transform duration-200" 
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Desktop Right Side - Hidden on mobile */}
                        <div className="hidden md:flex items-center gap-4 lg:gap-6">
                            <button className="text-gray-500 hover:text-black transition-colors p-2">
                                <Search size={18} />
                            </button>

                            <button 
                                onClick={() => window.location.href = '/public-schedule'}
                                className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-sm font-semibold px-4 lg:px-5 py-2 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                                Public Schedule
                                <Calendar size={16} />
                            </button>
                        </div>

                        {/* Mobile Menu Button - Visible only on mobile */}
                        <button
                            className="md:hidden text-gray-600 hover:text-black p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
                    menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div 
                className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div 
                            className="relative h-8 w-32 cursor-pointer"
                            onClick={() => {
                                window.location.href = '/';
                                setMenuOpen(false);
                            }}
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Velocity Knowledge Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 overflow-y-auto py-4">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                className="w-full flex items-center justify-between px-6 py-4 text-gray-600 hover:text-black hover:bg-gray-50 text-base font-medium transition-colors border-b border-gray-100"
                                onClick={() => {
                                    window.location.href = link.href;
                                    setMenuOpen(false);
                                }}
                            >
                                <span>{link.label}</span>
                                {link.dropdown && <ChevronDown size={18} className="text-gray-400" />}
                            </button>
                        ))}

                        {/* Mobile Search and Schedule */}
                        <div className="mt-8 px-6 space-y-4">
                            <button className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-5 py-3 rounded-lg transition-colors">
                                <Search size={18} />
                                <span>Search</span>
                            </button>
                            
                            <button 
                                className="w-full flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white font-medium px-5 py-3 rounded-lg transition-colors"
                                onClick={() => {
                                    window.location.href = '/public-schedule';
                                    setMenuOpen(false);
                                }}
                            >
                                <Calendar size={18} />
                                <span>Public Schedule</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="border-t p-6">
                        <p className="text-sm text-gray-500 text-center">
                            © 2024 Velocity Knowledge. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}