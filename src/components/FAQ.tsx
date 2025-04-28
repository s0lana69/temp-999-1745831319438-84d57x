import React, { useState } from 'react';
import { Zap, Target, DollarSign } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const metrics = [
    {
      icon: <Target className="w-8 h-8 text-neonTeal-500" />,
      value: "95%",
      title: "Accuracy",
      description: "Our AI models consistently outperform traditional systems by achieving 95% accuracy in complex scenarios.",
      color: "neonTeal"
    },
    {
      icon: <Zap className="w-8 h-8 text-neonBlue-500" />,
      value: "10x",
      title: "Faster Processing",
      description: "Process and analyze data up to 10 times faster than conventional solutions, enabling real-time decision making.",
      color: "neonBlue"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-neonGreen-500" />,
      value: "60%",
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 60% compared to traditional approaches while improving performance.",
      color: "neonGreen"
    }
  ];

  const faqs = [
    {
      question: "What is MPC-AI?",
      answer: "MPC-AI (Multi-Party Computation Artificial Intelligence) is our proprietary technology that combines advanced AI with secure multi-party computation to deliver enterprise-grade solutions while maintaining data privacy and security."
    },
    {
      question: "How does your AI training process work?",
      answer: "Our AI models undergo rigorous training using proprietary datasets and advanced algorithms. We employ a multi-stage training process that includes data preprocessing, model optimization, and continuous learning to ensure optimal performance."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including finance, healthcare, telecommunications, and government sectors. Our solutions are tailored to meet the specific needs of each industry while maintaining the highest standards of security and performance."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement state-of-the-art security measures including end-to-end encryption, secure multi-party computation, and regular security audits. Our systems are designed to protect sensitive data while maintaining high performance."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, regular system updates, and dedicated account managers for enterprise clients. Our support team is trained to handle any technical issues and provide guidance on best practices."
    }
  ];

  return (
    <section className="relative min-h-screen bg-dark pt-32 pb-16">
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">FAQ</h1>
          <p className="text-gray-300 mb-8">Frequently Asked Questions</p>
        </div>

        {/* Metrics Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Center circle with logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-darkLight border-2 border-white/20 flex items-center justify-center z-10">
                <div className="text-white font-bold text-lg">TrueViral</div>
              </div>
              
              {/* Vertical metric display (Yellow highlighted area) */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-4">
                {/* Accuracy metric */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-darkAccent border border-neonTeal-500/50 flex items-center justify-center mb-2 shadow-glow">
                    <Target className="w-6 h-6 text-neonTeal-500" />
                  </div>
                  <div className="text-neonTeal-500 font-bold text-lg">95%</div>
                  <div className="text-gray-300 text-sm">Accuracy</div>
                </div>
                
                {/* TrueViral logo is already in center */}
                
                {/* Cost metric */}
                <div className="flex flex-col items-center mt-4">
                  <div className="w-14 h-14 rounded-full bg-darkAccent border border-neonGreen-500/50 flex items-center justify-center mb-2 shadow-glow-green">
                    <DollarSign className="w-6 h-6 text-neonGreen-500" />
                  </div>
                  <div className="text-neonGreen-500 font-bold text-lg">60%</div>
                  <div className="text-gray-300 text-sm">Cost Savings</div>
                </div>
              </div>
              
              {/* Vertical metrics on right side (Green highlighted area) */}
              <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-4">
                {/* Speed metric */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-darkAccent border border-neonBlue-500/50 flex items-center justify-center mb-2 shadow-glow-blue">
                    <Zap className="w-6 h-6 text-neonBlue-500" />
                  </div>
                  <div className="text-neonBlue-500 font-bold text-lg">10x</div>
                  <div className="text-gray-300 text-sm">Faster</div>
                </div>
                
                {/* Additional metrics could be added here */}
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                <line x1="20" y1="40" x2="100" y2="100" stroke="rgba(60, 255, 236, 0.3)" strokeWidth="1" />
                <line x1="180" y1="100" x2="100" y2="100" stroke="rgba(23, 168, 255, 0.3)" strokeWidth="1" />
                <line x1="20" y1="160" x2="100" y2="100" stroke="rgba(57, 255, 176, 0.3)" strokeWidth="1" />
              </svg>
            </div>
            <div className="max-w-md space-y-6">
              <div>
                <div className="flex items-start mb-2">
                  <Target className="w-5 h-5 text-neonTeal-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold flex items-center">
                      <span className="text-neonTeal-500 text-xl mr-2">95%</span> 
                      <span>Accuracy</span>
                    </h3>
                    <p className="text-gray-300 text-sm">Our AI models consistently outperform traditional systems by achieving 95% accuracy in complex scenarios.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-2">
                  <Zap className="w-5 h-5 text-neonBlue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold flex items-center">
                      <span className="text-neonBlue-500 text-xl mr-2">10x</span> 
                      <span>Faster Processing</span>
                    </h3>
                    <p className="text-gray-300 text-sm">Process and analyze data up to 10 times faster than conventional solutions, enabling real-time decision making.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-2">
                  <DollarSign className="w-5 h-5 text-neonGreen-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold flex items-center">
                      <span className="text-neonGreen-500 text-xl mr-2">60%</span> 
                      <span>Cost Reduction</span>
                    </h3>
                    <p className="text-gray-300 text-sm">Reduce operational costs by up to 60% compared to traditional approaches while improving performance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-5 transition-all duration-300 ${openIndex === index ? 'ring-2 ring-neonTeal-500 shadow-lg' : ''}`}> 
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold text-white mb-2 focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{ pointerEvents: openIndex === index ? 'auto' : 'none' }}
                >
                  <p className="text-gray-300 text-sm pb-2 pt-1">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Still have questions?</h3>
          <p className="text-gray-300 mb-4 text-center">We're here to help you!</p>
          <a href="/contact" className="px-6 py-2 rounded border border-white text-white font-semibold hover:bg-white hover:text-dark transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 