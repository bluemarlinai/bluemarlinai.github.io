'use client';

import { useState } from 'react';

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: 'fa-robot',
      title: 'Machine Learning',
      description: 'Build, train, and deploy ML models with our intuitive platform that requires minimal coding expertise.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: 'fa-comments',
      title: 'Natural Language Processing',
      description: 'Analyze and understand human language to extract insights, automate support, and improve communication.',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10'
    },
    {
      icon: 'fa-brain',
      title: 'Deep Learning',
      description: 'Leverage state-of-the-art neural networks for complex pattern recognition and decision-making tasks.',
      gradient: 'from-rose-500 to-orange-500',
      bgGradient: 'from-rose-500/10 to-orange-500/10'
    },
    {
      icon: 'fa-chart-line',
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions using advanced statistical modeling and AI.',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      icon: 'fa-eye',
      title: 'Computer Vision',
      description: 'Process and analyze visual data for object detection, image recognition, and scene understanding.',
      gradient: 'from-amber-500 to-yellow-500',
      bgGradient: 'from-amber-500/10 to-yellow-500/10'
    },
    {
      icon: 'fa-microchip',
      title: 'Edge AI',
      description: 'Deploy AI models directly on edge devices for real-time processing and reduced latency.',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10'
    }
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block glass-effect px-4 py-2 mb-4">
            <span className="text-sm font-medium text-blue-400">Core Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful AI Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive suite of AI tools and services empower your business with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`glass-effect p-8 h-full transition-all duration-500 hover:scale-[1.02] ${
                hoveredFeature === index ? 'bg-gradient-to-br ' + feature.bgGradient : ''
              }`}>
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-[1px] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full rounded-2xl glass-effect flex items-center justify-center">
                    <i className={`fas ${feature.icon} text-2xl text-white group-hover:scale-110 transition-transform duration-500`}></i>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none`}
                     style={{
                       background: `linear-gradient(120deg, transparent, rgba(255,255,255,0.1), transparent)`,
                       backgroundSize: '200% 100%',
                       animation: 'shimmer 2s linear infinite'
                     }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: '99%', label: 'Accuracy Rate' },
            { number: '24/7', label: 'Support Available' },
            { number: '500+', label: 'Enterprise Clients' },
            { number: '50M+', label: 'API Requests Daily' }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-effect p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}