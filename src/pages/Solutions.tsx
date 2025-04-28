import React, { useRef, useEffect, useState } from 'react';
import { Zap, Target, DollarSign } from 'lucide-react';
import TrustedCompanies from '../components/TrustedCompanies';

const solutions = [
  {
    title: 'Conversational AI',
    description: 'Build chatbots, voice assistants, and virtual agents with human-like understanding and response.',
    icon: '💬',
  },
  {
    title: 'Speech Recognition',
    description: 'Transcribe audio to text in real time with high accuracy for calls, meetings, and more.',
    icon: '🎤',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends, detect anomalies, and make data-driven decisions with advanced AI models.',
    icon: '📈',
  },
  {
    title: 'Image & Video Analysis',
    description: 'Detect objects, faces, and scenes in images and videos for security, media, and more.',
    icon: '🖼️',
  },
  {
    title: 'Text Intelligence',
    description: 'Extract meaning, sentiment, and intent from text for smarter automation and insights.',
    icon: '📝',
  },
];

const Solutions: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoTop, setVideoTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (videoContainerRef.current) {
      setVideoTop(videoContainerRef.current.offsetTop + videoContainerRef.current.offsetHeight);
    }
  }, []);

  // Determine which content to show based on scroll position
  const showCyberpunkCrop = scrollY > 450;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Video section - full viewport height */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden">
        {/* Video-Background */}
        {isVisible && (
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            {!showCyberpunkCrop ? (
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/tv-intro.webm"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div className="absolute inset-0 bg-black flex items-center justify-end overflow-hidden">
                <div className="relative h-full w-3/4 overflow-hidden">
                  <img 
                    src="/images/cyberpunk-hero.png"
                    alt="AI Assistant"
                    className="absolute h-full w-full object-cover object-left"
                    style={{ transform: 'scale(2.2) translateX(-15%)' }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </section>
      
      {/* Rest of the page content */}
      <div className="bg-dark">
        {/* Adding TrustedCompanies component with the logos */}
        <TrustedCompanies />
        
        {/* Solutions Content */}
        <section className="max-w-5xl mx-auto text-center mb-16 mt-24 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unbeatable Value, Unmatched Performance</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our AI solutions deliver superior results across all key metrics compared to traditional approaches
          </p>
        </section>
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-4">
          {solutions.map((sol, idx) => (
            <div key={idx} className="bg-darkAccent rounded-xl p-8 shadow-lg border border-gray-800 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{sol.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{sol.title}</h2>
              <p className="text-gray-400">{sol.description}</p>
            </div>
          ))}
        </section>
        <section className="max-w-3xl mx-auto text-center mt-16 px-4 pb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
          <p className="text-gray-300 mb-8">Get started with our AI solutions today and see the difference in speed, accuracy, and innovation.</p>
        </section>
      </div>
    </main>
  );
};

export default Solutions; 