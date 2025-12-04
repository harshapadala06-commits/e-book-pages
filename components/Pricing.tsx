import React from 'react';
import { Check, Clock } from 'lucide-react';

interface PricingProps {
  onGetAccess?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onGetAccess }) => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Product Info */}
          <div className="p-10 md:w-3/5 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              Pre-order the <br/>
              <span className="text-brand-purple">30-Day Growth Protocol</span>
            </h2>
            <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide">
              Official V STORE ONLINE Release
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Instant Access to PDF Guide (on launch)",
                "Bonus: 50+ Reel Hooks Template",
                "Bonus: Bio Optimization Checklist",
                "Private Community Access",
                "Lifetime Updates"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center text-sm text-gray-500 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
              <Clock className="w-4 h-4 mr-2 text-yellow-600" />
              <span>Launch Offer expires soon.</span>
            </div>
          </div>

          {/* Right Side: Price & CTA */}
          <div className="bg-gray-900 p-10 md:w-2/5 flex flex-col justify-center text-center md:text-left relative">
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded">
                50% OFF
              </div>
            </div>
            
            <p className="text-gray-400 text-lg mb-1">Total Value</p>
            <p className="text-3xl text-gray-500 line-through decoration-brand-orange mb-6 font-serif">
              ₹199
            </p>
            
            <p className="text-gray-400 text-lg mb-1">Pre-order Price</p>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-bold text-white tracking-tight">₹99</span>
              <span className="text-gray-400 ml-2">INR</span>
            </div>

            <button 
              onClick={onGetAccess}
              className="w-full bg-gradient-to-r from-brand-orange to-brand-pink text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-brand-orange/20 hover:scale-105 transition-all duration-200"
            >
              Get Access Now
            </button>
            <p className="text-gray-500 text-xs mt-4 text-center">
              100% Money-back guarantee.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;