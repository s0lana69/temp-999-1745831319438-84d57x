'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "TrueViral's AI platform integrated seamlessly into our app. The speech recognition accuracy is incredible, and the support team is highly responsive.",
      name: "Alex Chen",
      title: "CTO, TechFront",
      color: "teal"
    },
    {
      quote: "We reduced our processing time by 80% after implementing TrueViral. Our customers are amazed by how quickly we can analyze their data and provide insights.",
      name: "Samantha Rodriguez",
      title: "VP of Product, DataVerse",
      color: "blue"
    },
    {
      quote: "The accuracy of TrueViral's models is unmatched. We evaluated several AI platforms, and nothing came close to the quality and reliability we're seeing.",
      name: "Michael Thompson",
      title: "Director of AI, Enterprise Solutions",
      color: "magenta"
    },
    {
      quote: "From concept to production in just three weeks. TrueViral's documentation and APIs made it incredibly easy to build and scale our solution.",
      name: "Emma Wilson",
      title: "Lead Developer, InnovateTech",
      color: "green"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % Math.ceil(testimonials.length / 3));
  };
  
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };
  
  // Determine which testimonials to show based on current index and screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return testimonials.slice(currentIndex, currentIndex + 1);
    }
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, Math.min(startIndex + 3, testimonials.length));
  };

  return (
    <section className="section-padding bg-darkAccent">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Startups and Enterprises</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          See what our customers have to say about their experience with TrueViral
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 transition-transform duration-500 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={index}
                className={`card flex-1 min-w-full md:min-w-[30%] border-l-4 border-${testimonial.color === 'teal' ? 'neonTeal' : testimonial.color === 'blue' ? 'neonBlue' : testimonial.color === 'magenta' ? 'neonMagenta' : 'neonGreen'}-500`}
                style={{transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none'}}
              >
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index 
                  ? 'bg-neonTeal-500' 
                  : 'bg-gray-700 hover:bg-gray-500'
              } transition-colors duration-200`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <button 
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 rounded-full bg-darkLight border border-gray-700 text-white hover:text-neonTeal-500 hover:border-neonTeal-500 transition-colors duration-200"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 rounded-full bg-darkLight border border-gray-700 text-white hover:text-neonTeal-500 hover:border-neonTeal-500 transition-colors duration-200"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;