import React from 'react';
import { CheckCircle } from 'lucide-react';

const ScalabilitySection: React.FC = () => {
  const integrationPoints = [
    "Seamless API Integration: Works with your existing tools via REST or GraphQL",
    "Scales Automatically: From prototype to production without performance loss",
    "Enterprise Ready: Complete with security, compliance, and support"
  ];

  return (
    <section className="section-padding bg-darkAccent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions that Scale</h2>
          <p className="text-gray-300 mb-8">
            Easily integrate our AI into your stack – whether you're handling dozens of requests or billions. Our infrastructure grows with you, ensuring consistent performance.
          </p>
          
          <ul className="space-y-4">
            {integrationPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-neonGreen-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200">{point}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative h-96">
          {/* 3D Layered Stack Graphic */}
          <div className="absolute inset-0 perspective-1000">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-float" style={{ animationDelay: '0.5s' }}>
              {/* Layer 3 (Bottom) */}
              <div className="w-80 h-48 md:w-96 md:h-56 bg-gradient-to-r from-neonMagenta-500/20 to-neonBlue-500/20 rounded-lg border border-neonMagenta-500/30 backdrop-blur-sm shadow-lg transform translate-y-8 translate-x-8 rotate-6">
                <div className="p-6">
                  <p className="text-neonMagenta-500 font-medium">Database Layer</p>
                  <div className="mt-4 w-full h-6 bg-darkAccent rounded-md opacity-50"></div>
                  <div className="mt-2 w-3/4 h-6 bg-darkAccent rounded-md opacity-50"></div>
                </div>
              </div>
              
              {/* Layer 2 (Middle) */}
              <div className="absolute top-0 left-0 w-80 h-48 md:w-96 md:h-56 bg-gradient-to-r from-neonBlue-500/20 to-neonGreen-500/20 rounded-lg border border-neonBlue-500/30 backdrop-blur-sm shadow-lg transform translate-y-4 translate-x-4 rotate-3">
                <div className="p-6">
                  <p className="text-neonBlue-500 font-medium">API Layer</p>
                  <div className="mt-4 w-full h-6 bg-darkAccent rounded-md opacity-50"></div>
                  <div className="mt-2 w-3/4 h-6 bg-darkAccent rounded-md opacity-50"></div>
                </div>
              </div>
              
              {/* Layer 1 (Top) */}
              <div className="absolute top-0 left-0 w-80 h-48 md:w-96 md:h-56 bg-gradient-to-r from-neonTeal-500/20 to-neonGreen-500/20 rounded-lg border border-neonTeal-500/30 backdrop-blur-sm shadow-lg">
                <div className="p-6">
                  <p className="text-neonTeal-500 font-medium">Frontend Layer</p>
                  <div className="mt-4 w-full h-6 bg-darkAccent rounded-md opacity-50"></div>
                  <div className="mt-2 w-3/4 h-6 bg-darkAccent rounded-md opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(60, 255, 236, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(60, 255, 236, 0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ScalabilitySection;