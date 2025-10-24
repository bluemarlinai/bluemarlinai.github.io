'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-[#0a0f1c]/80' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white font-bold text-xl transform transition-all duration-300 group-hover:scale-110">
                BM
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-white">
              BlueMarlin<span className="text-gradient">AI</span>
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Solutions', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 hidden md:block">
              Login
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}