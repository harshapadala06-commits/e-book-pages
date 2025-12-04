import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FreeTipGenerator from './components/FreeTipGenerator';
import TemplateDownloader from './components/TemplateDownloader';
import PaymentSuccessModal from './components/PaymentSuccessModal';
import UserDetailsModal from './components/UserDetailsModal';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Modal States
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUserDetailsProceed = () => {
    // 1. Close user details modal
    setShowUserDetailsModal(false);
    
    // 2. Open Razorpay in new tab
    window.open('https://razorpay.com/payment-link/plink_RnUTxCB5qauKHY', '_blank');
    
    // 3. Show success modal in current tab
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-orange selection:text-white">
      
      {/* Sticky Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              InstaGrow<span className="text-brand-orange">30</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-gray-900 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
            >
              Get Access
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col space-y-4 shadow-lg animate-in slide-in-from-top-2">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium">Features</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium">About</a>
            <button 
               onClick={() => {
                 document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'});
                 setMobileMenuOpen(false);
               }}
               className="bg-brand-orange text-white px-5 py-3 rounded-lg font-bold text-center"
            >
              Get Access - ₹99
            </button>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <div className="px-4">
          <FreeTipGenerator />
        </div>
        <div id="features">
          <Features />
        </div>
        
        {/* Social Proof Strip */}
        <div className="bg-gray-900 py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">Trusted by creators from</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Logos would go here, using text for now */}
               <span className="text-white font-serif font-bold text-xl">VOGUE</span>
               <span className="text-white font-serif font-bold text-xl">Forbes</span>
               <span className="text-white font-serif font-bold text-xl">BuzzFeed</span>
               <span className="text-white font-serif font-bold text-xl">Wired</span>
            </div>
          </div>
        </div>

        {/* Open User Details Modal instead of direct success modal */}
        <Pricing onGetAccess={() => setShowUserDetailsModal(true)} />

        {/* About / Author Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200 relative">
                  <img 
                    src="https://picsum.photos/400/400?grayscale" 
                    alt="Author" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                     <p className="font-bold text-lg">Alex Doe</p>
                     <p className="text-sm opacity-80">Social Strategist</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why I wrote this book.</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I spent 3 years analyzing over 5,000 viral posts. I realized that 90% of advice online is outdated or just plain wrong. 
                  Most people tell you to "just be consistent," but consistency without strategy is just noise.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This 30-day protocol is the exact system I used to take my own account from 400 followers to 50k in 3 months. 
                  It's not magic. It's math and psychology.
                </p>
                <div className="p-4 bg-brand-light border-l-4 border-brand-purple rounded-r-lg">
                  <p className="text-gray-800 font-medium italic">
                    "This is the manifesto for the modern creator."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
           <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
             <div className="space-y-6">
                {[
                  { q: "Is this for beginners?", a: "Yes. We start from the fundamentals of profile optimization and move to advanced algorithmic theories." },
                  { q: "When will the title be revealed?", a: "The official title and full cover art will be revealed 48 hours before the launch date. Pre-ordering locks in your discount." },
                  { q: "Do I need to buy ads?", a: "No. This entire strategy focuses on organic growth." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-900 mb-2">{item.q}</h4>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

      </main>
      <Footer />
      
      {/* Modals */}
      <UserDetailsModal 
        isOpen={showUserDetailsModal} 
        onClose={() => setShowUserDetailsModal(false)}
        onProceed={handleUserDetailsProceed}
      />
      
      <PaymentSuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
      
      <TemplateDownloader />
    </div>
  );
};

export default App;