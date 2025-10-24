'use client';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'John Anderson',
      position: 'CEO, TechForge Solutions',
      company: 'TechForge',
      feedback: 'BlueMarlinAI has revolutionized our approach to data analysis. The AI-driven insights have helped us increase operational efficiency by 40% and make better strategic decisions.',
      image: '/john-anderson.jpg',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Sarah Chen',
      position: 'CTO, FinTech Innovations',
      company: 'FinTech Innovations',
      feedback: 'Their machine learning solutions have transformed our risk assessment process. We\'ve seen a 60% improvement in accuracy and significant cost savings.',
      image: '/sarah-chen.jpg',
      rating: 5,
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      name: 'Michael Rodriguez',
      position: 'Head of Innovation, Healthcare Plus',
      company: 'Healthcare Plus',
      feedback: 'The AI-powered diagnostic tools have dramatically improved our patient care accuracy. A game-changer in the healthcare industry.',
      image: '/michael-rodriguez.jpg',
      rating: 5,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`
      }}></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block glass-effect px-4 py-2 mb-4">
            <span className="text-sm font-medium text-blue-400">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how leading companies are transforming their businesses with our AI solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass-effect p-8 md:p-12 rounded-2xl relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].gradient} opacity-5`}></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className={`w-16 h-16 mb-8 rounded-full bg-gradient-to-r ${testimonials[activeTestimonial].gradient} p-[1px]`}>
                  <div className="w-full h-full rounded-full glass-effect flex items-center justify-center">
                    <i className="fas fa-quote-right text-2xl text-white"></i>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-3">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                      "{testimonials[activeTestimonial].feedback}"
                    </p>

                    <div className="flex flex-wrap items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{testimonials[activeTestimonial].name}</h3>
                        <p className="text-gray-400">{testimonials[activeTestimonial].position}</p>
                      </div>

                      <div className="flex space-x-1 mt-4 md:mt-0">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <i key={i} className={`fas fa-star text-yellow-500`}></i>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Company Logo/Visual */}
                  <div className="md:col-span-2">
                    <div className="glass-effect rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                      <div className={`text-4xl mb-4 bg-gradient-to-r ${testimonials[activeTestimonial].gradient} bg-clip-text text-transparent font-bold`}>
                        {testimonials[activeTestimonial].company}
                      </div>
                      <p className="text-gray-400">Verified Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-gradient-to-r from-blue-500 to-violet-500 w-12'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '500+', label: 'Enterprise Clients' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '40%', label: 'Efficiency Increase' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="glass-effect p-6 text-center rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}