'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ ...formData, created_at: new Date().toISOString() }]);

      if (error) throw error;
      
      // 处理成功状态
      setFormData({ name: '', email: '', company: '', message: '' });
      alert('Thank you for your message!');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">Our team is here to help you find the right AI solutions</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">contact@bluemarlinai.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-200 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-200 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-gray-200 mb-2">Company</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent focus:outline-none focus:border-blue-500 text-white"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-bg text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}