'use client';
import React, { useRef, useEffect, useState } from 'react';

const FinalCta: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using our AI solutions to transform their operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-neonBlue-500 text-white rounded-lg font-semibold hover:bg-neonBlue-600 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;