import React from 'react';
import { ChevronRight } from 'lucide-react';
import HeroGraphic from './HeroGraphic';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-dark relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-neonTeal-500/20 to-transparent opacity-30 blur-xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-neonBlue-500/20 to-transparent opacity-30 blur-xl -z-10"></div>
      
      {/* Cyberpunk Image Layer - positioned for center head placement */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-visible">
        <HeroGraphic />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto h-screen flex">
          <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-0 items-center w-full mt-24 px-6 md:px-8">
            <div className="max-w-md mx-auto lg:mx-0 self-start lg:self-auto lg:mt-0 pt-32">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                The <span className="text-white">AI</span> <span className="gradient-text gradient-teal-blue">platform</span> for enterprise use cases
              </h1>
              
              <p className="text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed">
                TrueViral's AI platform provides powerful models for natural language processing, image recognition, and predictive analytics. Over 200,000+ developers use TrueViral to build innovative AI applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#try-free" 
                  className="btn btn-primary relative overflow-hidden group text-xs px-4 py-2"
                >
                  Try It Free
                  <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="absolute inset-0 bg-gradient-to-r from-neonTeal-500/20 to-neonBlue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
                <a 
                  href="#get-demo" 
                  className="btn btn-outline relative overflow-hidden group text-xs px-4 py-2"
                >
                  Get a Demo
                  <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="absolute inset-0 bg-gradient-to-r from-neonBlue-500/10 to-neonMagenta-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;