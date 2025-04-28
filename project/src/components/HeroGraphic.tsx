import React, { useEffect, useState, useRef } from 'react';

const HeroGraphic: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const scaleRange = { min: 1.0, max: 1.15 };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate scale and position based on scroll with smoother transitions
  const calculateScale = () => {
    const scrollRange = { min: 0, max: 400 }; // Increased range for smoother scaling
    
    if (scrollY < scrollRange.min) return scaleRange.min;
    if (scrollY > scrollRange.max) return scaleRange.max;
    
    const scrollProgress = (scrollY - scrollRange.min) / (scrollRange.max - scrollRange.min);
    return scaleRange.min + (scrollProgress * (scaleRange.max - scaleRange.min));
  };
  
  // Improved position calculations for better visibility
  const calculatePosition = () => {
    const scale = calculateScale();
    const xShift = ((scale - scaleRange.min) * 5); // Reduced shift for better centering
    const yShift = ((scale - scaleRange.min) * 2); // Subtle vertical movement
    
    return {
      x: xShift,
      y: yShift
    };
  };
  
  const scale = calculateScale();
  const position = calculatePosition();
  
  // Smoother fade out calculation
  const heroOpacity = scrollY > 350 ? Math.max(0, 1 - (scrollY - 350) / 200) : 1;
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        ref={imageRef}
        className="absolute left-[5%] top-[50%] -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x}%, -${50 + position.y}%) scale(${scale})`,
          transformOrigin: 'center center',
          opacity: heroOpacity,
          willChange: 'transform, opacity'
        }}
      >
        <div className="relative w-[1000px]"> {/* Increased base size */}
          <img
            src="/images/cyberpunk-hero.png"
            alt="AI Assistant"
            width={1000}
            height={750}
            loading="eager"
            className="w-full h-auto object-cover"
          />
          
          {/* Support element with improved positioning */}
          <div 
            className="absolute bottom-[32%] right-[28%] flex flex-col items-end transform transition-all duration-300" 
            style={{ 
              width: '100px',
              opacity: Math.max(0, 1 - (scale - 1) * 2),
              transform: `scale(${1 / scale})`
            }}
          >
            <div className="text-neonTeal-500 text-sm font-medium leading-tight">Talk to</div>
            <div className="text-neonTeal-500 text-sm font-medium leading-tight">an Agent</div>
            <div className="mt-1">
              <svg width="20" height="20" viewBox="0 0 50 50">
                <path 
                  d="M10,25 Q25,40 40,25" 
                  stroke="rgb(60, 255, 236)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse-slow"
                />
                <circle cx="40" cy="25" r="3" fill="rgb(60, 255, 236)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGraphic;