import React from 'react';
import { ArrowRight, Lock, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-dark/5 text-brand-dark text-xs font-bold tracking-wide uppercase border border-gray-200">
                  Presented by V STORE ONLINE
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Debut Ebook Launch
                </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Cracking the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">Instagram Code</span> in 30 Days.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop guessing. Start growing. V STORE ONLINE's first-ever digital guide to 10k authentic followers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center">
                Secure Pre-Launch Price <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-1">
                  {[1,2,3].map(i => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/100/100?random=${i}`} alt="user" />
                  ))}
                </div>
                <span>Joined by 500+ creators</span>
              </div>
            </div>
          </div>

          {/* Right: Mystery Book */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-80 aspect-[2/3] bg-gray-900 rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 group cursor-pointer border-l-4 border-gray-800">
              {/* Book Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-800 to-gray-600 rounded-l-sm"></div>
              
              {/* Cover Content (Blurred/Mystery) */}
              <div className="absolute inset-0 ml-4 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-black rounded-r-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                <Lock className="w-16 h-16 text-gray-600 mb-4 group-hover:text-brand-orange transition-colors duration-300" />
                <h3 className="text-2xl font-bold text-white text-center blur-sm group-hover:blur-none transition-all duration-500 opacity-50 group-hover:opacity-100">
                  TOP SECRET
                </h3>
                <p className="mt-2 text-gray-400 text-xs tracking-widest uppercase">By V STORE ONLINE</p>
                
                {/* Price Tag Sticker */}
                <div className="absolute top-6 right-6 rotate-12 bg-brand-orange text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg transform group-hover:rotate-[20deg] transition-transform">
                  <span className="text-xs line-through opacity-75">₹199</span>
                  <span className="text-2xl font-bold">₹99</span>
                </div>
              </div>
            </div>
            
            {/* Shadow/Reflection */}
            <div className="absolute -bottom-10 left-10 right-10 h-4 bg-black blur-xl opacity-20 transform rotate-[-6deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;