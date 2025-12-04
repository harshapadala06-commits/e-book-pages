import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0">
          <span className="text-xl font-serif font-bold tracking-tight text-gray-900">
            V STORE <span className="text-brand-orange">ONLINE</span>
          </span>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 V STORE ONLINE. All rights reserved.
          </p>
          <p className="text-xs text-brand-purple mt-1 font-medium">
            Our Debut Entry into the Ebooks Community.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-brand-pink transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;