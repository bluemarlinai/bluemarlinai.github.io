export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0a0f1c]">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 20% 30%, rgba(124, 58, 237, 0.15) 0%, transparent 40%),
                      radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.15) 0%, transparent 40%)`
        }}></div>
      </div>

      {/* Animated Background Shapes (behind content) */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-12 w-80 h-80 bg-violet-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 md:order-1">
            <div className="space-y-6 max-w-2xl">
              <div className="inline-block glass-effect px-4 py-2 mb-4">
                <span className="text-sm font-medium text-blue-400">Powered by Advanced AI</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Transform Your Business with{' '}
                <span className="text-gradient">Advanced AI Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                BlueMarlinAI delivers cutting-edge artificial intelligence services that drive efficiency, innovation, and growth for enterprises of all sizes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="button-glow bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:scale-105 transform transition duration-300 ease-out shadow-lg">
                  Start Free Trial
                </a>
                <a href="#features" className="glass-effect px-8 py-4 rounded-xl font-semibold text-center hover:bg-white/20 transition duration-300">
                  Learn More
                </a>
              </div>

              <div className="flex items-center gap-4 pt-8">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-violet-500"></div>
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">500+</span> companies already trust us
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="md:w-1/2 flex justify-center md:order-2">
            <div className="relative w-full max-w-lg">
              {/* Animated Circles */}
              <div className="absolute top-6 -left-6 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute top-6 -right-6 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-6 left-16 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

              {/* Main Visual Content */}
              <div className="relative glass-effect p-8 rounded-2xl transform hover:scale-105 transition duration-500">
                <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-white/10 to-white/5 p-4 hover:from-white/15 hover:to-white/10 transition duration-300">
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center">
                        <i className="fas fa-brain text-3xl text-white/80"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}