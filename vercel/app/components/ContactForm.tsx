'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          created_at: new Date().toISOString()
        }])

      if (error) throw error
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-3xl"></div>
      
      {/* Main Form Container */}
      <div className="glass-effect p-8 md:p-12 rounded-3xl relative">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative w-full h-full glass-effect rounded-2xl flex items-center justify-center">
                <i className="fas fa-paper-plane text-2xl text-white"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-400">We'd love to hear from you</p>
          </div>

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group">
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                  focusedField === 'name' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-white"
                  required
                />
                <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl"></div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                  focusedField === 'email' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-white"
                  required
                />
                <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl"></div>
                </div>
              </div>
            </div>

            <div className="relative group md:col-span-2">
              <label 
                htmlFor="company" 
                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                  focusedField === 'company' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                Company
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('company')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-white"
                />
                <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl"></div>
                </div>
              </div>
            </div>

            <div className="relative group md:col-span-2">
              <label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                  focusedField === 'message' ? 'text-blue-400' : 'text-gray-400'
                }`}
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-4 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-white"
                  required
                ></textarea>
                <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 glass-effect border border-green-500/50 rounded-xl text-green-400 text-center">
              <i className="fas fa-check-circle mr-2"></i>
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="p-4 glass-effect border border-red-500/50 rounded-xl text-red-400 text-center">
              <i className="fas fa-exclamation-circle mr-2"></i>
              There was an error submitting your message. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <div className="relative group">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-arrow-right ml-2"></i>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'fa-envelope', title: 'Email', info: 'contact@bluemarlin.ai' },
            { icon: 'fa-phone', title: 'Phone', info: '+1 (555) 123-4567' },
            { icon: 'fa-map-marker-alt', title: 'Address', info: 'San Francisco, CA' }
          ].map((item, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-full h-full glass-effect rounded-lg flex items-center justify-center">
                  <i className={`fas ${item.icon} text-xl text-white`}></i>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}