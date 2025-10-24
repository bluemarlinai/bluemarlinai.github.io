import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0f1c]">
      <Header />
      
  {/* Main Content */}
  <main className="relative pt-20">
        {/* Hero Section - Full height with modern gradient background */}
        <section id="home" className="relative min-h-screen flex items-center">
          <Hero />
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-20">
          <Features />
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="relative py-20 mt-20">
          <Solutions />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-20">
          <Pricing />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative py-20">
          <Testimonials />
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <CTASection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative mt-20">
        <Footer />
      </footer>
    </div>
  )
}