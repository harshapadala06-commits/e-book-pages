import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Camera, Zap, ShieldCheck, ChevronDown, ChevronUp, BookOpen, MessageCircle, Hash, ClipboardCheck } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Algorithm Mastery",
    description: "Understand exactly how the 2025 algorithm ranks content and how to exploit it legally.",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    title: "Community Building",
    description: "Turn passive scrollers into raving fans who engage with every single story.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Monetization Models",
    description: "Five proven ways to make $1,000/mo even with a small following under 2k.",
    icon: <DollarSign className="w-6 h-6 text-white" />,
  },
  {
    title: "Visual Aesthetics",
    description: "Create a cohesive, high-end feed look using just your smartphone and free apps.",
    icon: <Camera className="w-6 h-6 text-white" />,
  },
  {
    title: "Viral Reels Framework",
    description: "Copy-paste scripts and hook structures that have generated millions of views.",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    title: "Shadowban Protection",
    description: "What not to do. Keep your account safe from engagement throttling.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Story Sales Scripts",
    description: "Exact word-for-word scripts to convert story views into DMs and sales.",
    icon: <MessageCircle className="w-6 h-6 text-white" />,
  },
  {
    title: "SEO & Hashtag Vault",
    description: "The new SEO strategy that replaces dead hashtags. Rank on Explore pages easily.",
    icon: <Hash className="w-6 h-6 text-white" />,
  },
  {
    title: "Profile Audit Kit",
    description: "A 15-point checklist to ensure your profile converts visitors into followers.",
    icon: <ClipboardCheck className="w-6 h-6 text-white" />,
  },
];

const chapters = [
  {
    module: "Module 1",
    title: "Foundation and Psychology",
    lessons: ["Optimizing your Bio for Conversion", "The 'Hook-Retain-Reward' Loop", "Defining your 1000 True Fans"]
  },
  {
    module: "Module 2",
    title: "Content Engineering",
    lessons: ["Reel Structures that Hold Retention", "Carousel Storytelling 101", "Designing Thumbnails that Click"]
  },
  {
    module: "Module 3",
    title: "Growth Hacking (Organic)",
    lessons: ["The $1.80 Strategy Revisited for 2025", "Collabs & Cross-Promotion", "Hashtags vs. Keywords: The Truth"]
  },
  {
    module: "Module 4",
    title: "Monetization",
    lessons: ["Setting up your first Digital Product", "Affiliate Marketing without being spammy", "Pitching Brands with <5k Followers"]
  },
  {
    module: "Module 5",
    title: "Scaling & Automation",
    lessons: ["Building a Content System in Notion", "Hiring your first Video Editor", "From Creator to Business Owner"]
  }
];

const Features: React.FC = () => {
  const [openChapter, setOpenChapter] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Features Grid */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-4">
            Inside the <span className="italic text-brand-purple">Black Box</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            This isn't just theory. It's a 30-day tactical roadmap designed for rapid execution and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Curriculum / Syllabus */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-blue-50 text-blue-700 rounded-full mb-4 px-4 text-sm font-bold tracking-wide uppercase">
              <BookOpen className="w-4 h-4 mr-2" />
              Syllabus Sneak Peek
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900">
              What You'll Master
            </h3>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:border-brand-purple/30 transition-colors">
                <button 
                  onClick={() => setOpenChapter(openChapter === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-2 py-1 rounded">
                      {chapter.module}
                    </span>
                    <span className="font-bold text-gray-900 text-lg">{chapter.title}</span>
                  </div>
                  {openChapter === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openChapter === index && (
                  <div className="px-5 pb-5 pt-0 animate-in slide-in-from-top-2 duration-200">
                    <ul className="space-y-3 ml-2 border-l-2 border-brand-purple/20 pl-4 mt-2">
                      {chapter.lessons.map((lesson, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;