import React from 'react';
import { X, FileText, Shield, Info } from 'lucide-react';

export type LegalModalType = 'about' | 'privacy' | 'terms' | null;

interface LegalModalsProps {
  type: LegalModalType;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    about: {
      title: "About V STORE ONLINE",
      icon: <Info className="w-6 h-6 text-brand-purple" />,
      body: (
        <div className="space-y-4 text-gray-600">
          <p>Welcome to <strong>V STORE ONLINE</strong>, a premier digital destination for creators, entrepreneurs, and dreamers.</p>
          <p>Founded in 2024, our mission is to decode the complexities of the digital economy and provide actionable, high-impact resources that bridge the gap between "posting content" and "building a business."</p>
          <p>InstaGrow30 represents our flagship entry into educational products, synthesizing years of social media experiments into a single, cohesive protocol.</p>
          <p>We believe in transparency, quality, and results. Thank you for being part of our journey.</p>
        </div>
      )
    },
    privacy: {
      title: "Privacy Policy",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      body: (
        <div className="space-y-4 text-gray-600">
          <p><strong>Last Updated: January 2025</strong></p>
          <p>At V STORE ONLINE, we take your privacy seriously. This policy outlines how we handle your data.</p>
          <h4 className="font-bold text-gray-900">1. Information Collection</h4>
          <p>We collect basic information (Name, Email, Phone) only when you voluntarily provide it during the checkout process to deliver your digital products.</p>
          <h4 className="font-bold text-gray-900">2. Usage</h4>
          <p>Your email is used solely to send you the ebook, updates regarding the product, and critical account notifications. We do not sell your data to third parties.</p>
          <h4 className="font-bold text-gray-900">3. Security</h4>
          <p>We use industry-standard encryption and trusted third-party payment processors (Razorpay) to ensure your financial data is never stored on our servers.</p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      body: (
        <div className="space-y-4 text-gray-600">
          <p><strong>Last Updated: January 2025</strong></p>
          <h4 className="font-bold text-gray-900">1. Digital Products</h4>
          <p>Since InstaGrow30 is a digital product, access is granted immediately upon launch. By purchasing, you agree that the content is for personal use only.</p>
          <h4 className="font-bold text-gray-900">2. Refund Policy</h4>
          <p>We offer a 100% money-back guarantee if you are unsatisfied with the quality of the material within 7 days of the launch date.</p>
          <h4 className="font-bold text-gray-900">3. Intellectual Property</h4>
          <p>Redistribution, resale, or unauthorized sharing of the ebook file is strictly prohibited and may result in legal action.</p>
        </div>
      )
    }
  };

  const activeContent = content[type];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-full shadow-sm">
                {activeContent.icon}
            </div>
            <h3 className="font-serif font-bold text-gray-900 text-xl">{activeContent.title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
            {activeContent.body}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end flex-shrink-0">
            <button onClick={onClose} className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;