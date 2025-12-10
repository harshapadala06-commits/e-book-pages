import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';
import { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-serif font-bold tracking-tight text-gray-900">
              V STORE <span className="text-brand-orange">ONLINE</span>
            </span>
            <p className="text-sm text-gray-500 mt-3 max-w-xs">
              Empowering creators with data-backed strategies. 
              © 2025 V STORE ONLINE. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <a 
              href="https://www.instagram.com/vstoreonline.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center text-gray-400 hover:text-brand-pink transition-colors"
            >
              <div className="p-3 rounded-full bg-gray-50 group-hover:bg-brand-pink/10 transition-colors">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold mt-1 tracking-wide">@vstoreonline.in</span>
            </a>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-blue-400 hover:bg-blue-50 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-sm text-gray-500 font-medium">
            <button onClick={() => onOpenLegal('about')} className="hover:text-brand-purple transition-colors">About Us</button>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-brand-purple transition-colors">Privacy Policy</button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-brand-purple transition-colors">Terms & Conditions</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;