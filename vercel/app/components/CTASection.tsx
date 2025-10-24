export default function CTASection() {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Example Corp',
      feedback: 'This platform has transformed the way we approach AI. Highly recommend!'
    },
    {
      name: 'Jane Smith',
      position: 'CTO, Tech Innovations',
      feedback: 'An intuitive and powerful tool for any business looking to leverage AI.'
    }
    // 添加更多推荐...
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from those who have transformed their businesses with our solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/[0.03] glass-effect p-8 rounded-xl hover-lift">
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.position}</p>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}