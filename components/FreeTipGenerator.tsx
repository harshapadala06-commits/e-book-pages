import React, { useState } from 'react';
import { generateInstagramTip } from '../services/geminiService';
import { Sparkles, Loader2, Share2 } from 'lucide-react';

const FreeTipGenerator: React.FC = () => {
  const [tip, setTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateTip = async () => {
    setLoading(true);
    const result = await generateInstagramTip();
    setTip(result);
    setLoading(false);
  };

  return (
    <div className="my-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-purple"></div>
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
          <Sparkles className="w-6 h-6 text-brand-purple" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
          Unsure? Get a Free AI-Generated Strategy Tip
        </h3>
        <p className="text-gray-600">
          Experience a preview of the insights contained in the book. Powered by Gemini.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        {!tip && !loading && (
          <button
            onClick={handleGenerateTip}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>Reveal a Secret Tip</span>
            <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
          </button>
        )}

        {loading && (
          <div className="flex items-center space-x-2 text-brand-purple animate-pulse">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="font-medium">Consulting the algorithm...</span>
          </div>
        )}

        {tip && !loading && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-lg text-gray-800 font-serif italic leading-relaxed text-center">
              "{tip}"
            </p>
            <div className="mt-6 flex justify-center">
              <button 
                onClick={handleGenerateTip}
                className="text-sm text-gray-500 hover:text-brand-orange transition-colors flex items-center"
              >
                <Share2 className="w-4 h-4 mr-1" /> Generate Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreeTipGenerator;