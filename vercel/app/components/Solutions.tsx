'use client';
import { useState } from 'react';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      icon: 'fa-industry',
      title: 'Manufacturing',
      description: 'Optimize production processes, predict maintenance needs, and improve quality control with AI-driven insights.',
      features: [
        'Predictive Maintenance',
        'Quality Control Automation',
        'Supply Chain Optimization',
        'Production Planning',
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-chart-pie',
      title: 'Finance',
      description: 'Enhance risk assessment, automate trading decisions, and detect fraudulent activities using advanced AI algorithms.',
      features: [
        'Risk Analysis',
        'Fraud Detection',
        'Automated Trading',
        'Customer Segmentation',
      ],
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: 'fa-heartbeat',
      title: 'Healthcare',
      description: 'Improve patient care, accelerate diagnosis, and streamline medical operations with AI-powered solutions.',
      features: [
        'Disease Prediction',
        'Medical Imaging Analysis',
        'Patient Data Management',
        'Treatment Optimization',
      ],
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 100% 0%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 0% 100%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`
      }}></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block glass-effect px-4 py-2 mb-4">
            <span className="text-sm font-medium text-blue-400">Industry Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Tailored AI Solutions for Your Industry
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide specialized AI solutions designed to address the unique challenges of your industry
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`glass-effect px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === index ? 'bg-gradient-to-r ' + solution.gradient + ' scale-105' : 'hover:bg-white/10'
              }`}
            >
              <i className={`fas ${solution.icon} mr-2`}></i>
              {solution.title}
            </button>
          ))}
        </div>

        {/* Solution Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${solutions[activeTab].gradient} bg-clip-text text-transparent`}>
              {solutions[activeTab].title} Solutions
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              {solutions[activeTab].description}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions[activeTab].features.map((feature, index) => (
                <div key={index} className="glass-effect p-4 rounded-lg flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${solutions[activeTab].gradient} flex items-center justify-center`}>
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4">
                <div className="w-full h-full rotate-6 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
              </div>

              {/* Main Visual Container */}
              <div className="glass-effect rounded-2xl p-8 relative">
                <div className={`aspect-square rounded-xl bg-gradient-to-br ${solutions[activeTab].gradient} p-[1px]`}>
                  <div className="w-full h-full glass-effect rounded-xl p-6 flex items-center justify-center">
                    <i className={`fas ${solutions[activeTab].icon} text-6xl text-white/90 animate-float`}></i>
                  </div>
                </div>
              </div>

              {/* Background Dots */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="absolute w-2 h-2 bg-purple-500 rounded-full" style={{ top: '40px', left: '60px' }}></div>
                  <div className="absolute w-2 h-2 bg-cyan-500 rounded-full" style={{ top: '80px', left: '20px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-block glass-effect px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-500 to-violet-500 hover:scale-105 transition-transform duration-300"
          >
            Explore Your Industry Solution
          </a>
        </div>
      </div>
    </section>
  );
}