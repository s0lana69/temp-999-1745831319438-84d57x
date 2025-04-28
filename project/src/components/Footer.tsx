'use client';

import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkAccent border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-neonTeal-500 mr-2" />
              <span className="text-xl font-bold">TrueViral</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Because Viral is a Choice!
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="text-gray-400 hover:text-neonTeal-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#github" className="text-gray-400 hover:text-neonTeal-500 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-neonTeal-500 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#mail" className="text-gray-400 hover:text-neonTeal-500 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#api" className="text-gray-400 hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#status" className="text-gray-400 hover:text-white transition-colors duration-200">Status</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white transition-colors duration-200">Request a Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#docs" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#guides" className="text-gray-400 hover:text-white transition-colors duration-200">Guides</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors duration-200">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#press" className="text-gray-400 hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TrueViral. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">Terms</a>
            <a href="#privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">Privacy</a>
            <a href="#cookies" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;