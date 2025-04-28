import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Cpu, Shield, Zap, BarChart, Code } from 'lucide-react';

const FeatureHighlights: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-neonTeal-500" />,
      title: 'Conversational AI',
      description: 'Advanced natural language processing for human-like conversations with context awareness and personalization capabilities.',
      color: 'teal'
    },
    {
      icon: <Cpu className="h-8 w-8 text-neonBlue-500" />,
      title: 'Predictive Analytics',
      description: 'Powerful algorithms that analyze patterns in your data to forecast trends and provide actionable insights.',
      color: 'blue'
    },
    {
      icon: <Shield className="h-8 w-8 text-neonMagenta-500" />,
      title: 'Secure Deployment',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with industry standards for safe AI implementation.',
      color: 'magenta'
    },
    {
      icon: <Zap className="h-8 w-8 text-neonGreen-500" />,
      title: 'Real-time Processing',
      description: 'Ultra-fast response times for immediate insights and actions, even with large data volumes or complex requests.',
      color: 'green'
    },
    {
      icon: <BarChart className="h-8 w-8 text-neonTeal-500" />,
      title: 'Advanced Analytics',
      description: 'Deep learning models that uncover hidden patterns and correlations in your data for competitive advantage.',
      color: 'teal'
    },
    {
      icon: <Code className="h-8 w-8 text-neonBlue-500" />,
      title: 'Simple Integration',
      description: 'Comprehensive APIs and SDKs for easy integration with your existing systems and workflows in minutes.',
      color: 'blue'
    }
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-dark to-darkAccent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[1000px] h-full z-0">
        <div 
          className={`w-full h-full transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img 
            src="/images/cyberpunk-hero.png"
            alt="Cyberpunk AI"
            className="w-[1000px] h-[750px] object-cover"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Foundations</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Powerful AI building blocks designed for seamless integration and exceptional performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card card-hover border-glow border-glow-${feature.color}`}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;