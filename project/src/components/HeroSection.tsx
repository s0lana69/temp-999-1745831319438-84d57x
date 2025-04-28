import React, { useState } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import HeroGraphic from './HeroGraphic';
import { generateSEOSuggestions, SEOSuggestion } from '../utils/seo';

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [seoSuggestions, setSeoSuggestions] = useState<SEOSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const suggestions = await generateSEOSuggestions(searchQuery);
      setSeoSuggestions(suggestions);
    } catch (err: any) {
      setError(err.message || 'Failed to generate SEO suggestions. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

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
                <form onSubmit={handleSearch} className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Go Viral!"
                    className="w-full px-4 py-2 bg-darkLight text-white rounded-full border border-neonBlue-500 focus:outline-none focus:ring-2 focus:ring-neonBlue-500 transition-shadow duration-200 shadow-[0_0_15px_rgba(23,168,255,0.3)]"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neonBlue-500"
                    disabled={isLoading}
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* SEO Suggestions Display */}
              {isLoading && (
                <div className="mt-4 text-neonBlue-500">
                  Generating SEO suggestions...
                </div>
              )}

              {error && (
                <div className="mt-4 text-red-500 bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                  {error}
                </div>
              )}

              {seoSuggestions && (
                <div className="mt-4 bg-darkLight rounded-lg p-4 border border-neonBlue-500/30">
                  <h3 className="text-neonBlue-500 font-bold mb-2">SEO Suggestions</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold">Title:</span> {seoSuggestions.title}
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold">Description:</span> {seoSuggestions.description}
                    </p>
                    <div className="text-sm text-gray-300">
                      <span className="font-semibold">Keywords:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {seoSuggestions.keywords.map((keyword, index) => (
                          <span key={index} className="px-2 py-1 bg-darkAccent rounded-full text-xs">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">
                      <span className="font-semibold">Improvements:</span>
                      <ul className="list-disc list-inside mt-1">
                        {seoSuggestions.improvements.map((improvement, index) => (
                          <li key={index} className="text-xs">{improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;