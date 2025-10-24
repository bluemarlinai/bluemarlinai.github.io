'use client'

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-xl">
              BM
            </div>
            <span className="ml-3 text-xl font-bold text-white">
              BlueMarlin<span className="text-gradient">AI</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition">Solutions</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white hidden md:block">Login</a>
            <a href="#contact" className="relative overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}