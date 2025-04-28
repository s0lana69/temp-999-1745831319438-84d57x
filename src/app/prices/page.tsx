'use client';

import React, { useState } from 'react';

const plans = [
  {
    name: 'Basic Plan',
    price: 19,
    features: [
      'SEO Optimization Tools',
      'Video Performance Insights',
      '24/7 Customer Support',
    ],
  },
  {
    name: 'Business Plan',
    price: 29,
    features: [
      'Advanced Analytics Features',
      'Customizable Reports',
      'Team Collaboration Tools',
      'Priority Support Access',
    ],
  },
  {
    name: 'Enterprise Plan',
    price: 49,
    features: [
      'All Business Features',
      'Dedicated Account Manager',
      'Enhanced Security Options',
      'Unlimited User Accounts',
      'Custom Integrations Available',
    ],
  },
];

export default function PricesPage() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-darkAccent text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Subscription Plans</h1>
          <p className="text-gray-300 mb-8">Choose the plan that fits your needs best.</p>
          <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
            <button
              className={`px-6 py-2 text-sm font-medium border border-neonTeal-500 focus:z-10 focus:ring-2 focus:ring-neonTeal-500 focus:bg-darkLight transition-colors duration-200 ${billing === 'monthly' ? 'bg-neonTeal-500 text-darkAccent' : 'bg-darkLight text-white'}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 text-sm font-medium border border-neonTeal-500 focus:z-10 focus:ring-2 focus:ring-neonTeal-500 focus:bg-darkLight transition-colors duration-200 ${billing === 'yearly' ? 'bg-neonTeal-500 text-darkAccent' : 'bg-darkLight text-white'}`}
              onClick={() => setBilling('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto px-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex-1 bg-darkLight border-2 border-neonTeal-500 rounded-xl shadow-lg p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-200"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-neonTeal-500">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-4">
                  ${billing === 'monthly' ? plan.price : plan.price * 10}/<span className="text-lg font-medium">{billing === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <ul className="mb-8 space-y-2 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-neonTeal-500">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-3 bg-neonTeal-500 text-darkAccent font-bold rounded-lg hover:bg-neonTeal-400 transition-colors duration-200">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
  );
}