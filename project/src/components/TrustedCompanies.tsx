import React from 'react';

const TrustedCompanies: React.FC = () => {
  const companies = [
    { name: 'Revenue', id: 'revenue', url: 'https://revenue.com' },
    { name: 'NASA', id: 'nasa', url: 'https://www.nasa.gov' },
    { name: 'Twilio', id: 'twilio', url: 'https://www.twilio.com' },
    { name: 'Citi', id: 'citi', url: 'https://www.citi.com' },
    { name: 'Vonage', id: 'vonage', url: 'https://www.vonage.com' },
    { name: 'Khoros', id: 'khoros', url: 'https://www.khoros.com' },
  ];

  return (
    <section className="py-8 bg-transparent border-t border-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6 text-gray-300 text-sm uppercase tracking-wider">
          TRUSTED BY THE WORLD'S TOP ENTERPRISES AND STARTUPS
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {companies.map((company) => (
            <div 
              key={company.id}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <div className="h-8 md:h-10 flex items-center justify-center">
                <a 
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-bold text-white hover:text-neonTeal-500 transition-colors duration-300"
                >
                  {company.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;