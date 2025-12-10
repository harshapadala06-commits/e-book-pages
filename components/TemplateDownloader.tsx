import React from 'react';
import { Download } from 'lucide-react';

const xmlContent = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2 scroll-smooth' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
    <title><data:blog.pageTitle/></title>
    <b:skin><![CDATA[
        /* Reset and Base Styles */
        body { margin: 0; padding: 0; }
        /* Custom Utilities if needed */
        .fade-in { animation: fadeIn 0.5s ease-in; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    ]]></b:skin>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                purple: '#833AB4',
                pink: '#C13584',
                orange: '#E1306C',
                yellow: '#F77737',
                dark: '#1F1F1F',
                light: '#FAFAFA'
              }
            },
            fontFamily: {
              serif: ['Merriweather', 'serif'],
              sans: ['Inter', 'sans-serif'],
            }
          }
        }
      }
    </script>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&amp;family=Merriweather:ital,wght@0,300;0,700;1,300&amp;display=swap" rel="stylesheet"/>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-brand-light text-brand-dark antialiased">
  <b:section id='main' showaddelement='yes'>
    <b:widget id='HTML1' locked='false' title='Landing Page Content' type='HTML'>
      <b:widget-settings>
        <b:widget-setting name='content'><![CDATA[
          <!-- APP WRAPPER -->
          <div id="app-content">
            
            <!-- NAVBAR -->
            <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-transparent py-6">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div class="flex items-center">
                  <span class="text-2xl font-serif font-bold tracking-tight text-gray-900">
                    InstaGrow<span class="text-brand-orange">30</span>
                  </span>
                </div>
                
                <div class="hidden md:flex items-center space-x-8">
                  <a href="#features" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
                  <a href="#about" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">About</a>
                  <button onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})" class="bg-gray-900 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors">
                    Get Access
                  </button>
                </div>

                <div class="md:hidden">
                  <button id="mobile-menu-toggle" class="text-gray-900">
                    <i data-lucide="menu"></i>
                  </button>
                </div>
              </div>

              <!-- Mobile Menu -->
              <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col space-y-4 shadow-lg">
                <a href="#features" class="text-gray-600 font-medium mobile-link">Features</a>
                <a href="#about" class="text-gray-600 font-medium mobile-link">About</a>
                <button onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})" class="bg-brand-orange text-white px-5 py-3 rounded-lg font-bold text-center mobile-link">
                  Get Access - ₹99
                </button>
              </div>
            </nav>

            <!-- HERO -->
            <div class="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
              <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl opacity-50"></div>
              <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl opacity-50"></div>

              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  <!-- Copy -->
                  <div class="text-center lg:text-left">
                    <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                        <div class="inline-flex items-center px-3 py-1 rounded-full bg-brand-dark/5 text-brand-dark text-xs font-bold tracking-wide uppercase border border-gray-200">
                          Presented by V STORE ONLINE
                        </div>
                        <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold tracking-wide uppercase">
                          <span class="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                          Debut Ebook Launch
                        </div>
                    </div>
                    
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                      Cracking the <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">Instagram Code</span> in 30 Days.
                    </h1>
                    
                    <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                      Stop guessing. Start growing. V STORE ONLINE's first-ever digital guide to 10k authentic followers.
                    </p>

                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <button onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})" class="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center">
                        Secure Pre-Launch Price <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                      </button>
                      <div class="flex items-center gap-2 text-sm text-gray-500">
                        <div class="flex -space-x-1">
                          <img class="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=1" alt="user" />
                          <img class="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=2" alt="user" />
                          <img class="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=3" alt="user" />
                        </div>
                        <span>Joined by 500+ creators</span>
                      </div>
                    </div>
                  </div>

                  <!-- Book -->
                  <div class="relative flex justify-center lg:justify-end">
                    <div class="relative w-64 md:w-80 aspect-[2/3] bg-gray-900 rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-[-6deg] hover:rotate-0 transition-all duration-500 group cursor-pointer border-l-4 border-gray-800">
                      <div class="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-gray-800 to-gray-600 rounded-l-sm"></div>
                      <div class="absolute inset-0 ml-4 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-black rounded-r-2xl overflow-hidden">
                        <div class="absolute inset-0 opacity-10" style="background-image: url('https://www.transparenttextures.com/patterns/cubes.png');"></div>
                        
                        <i data-lucide="lock" class="w-16 h-16 text-gray-600 mb-4 group-hover:text-brand-orange transition-colors duration-300"></i>
                        <h3 class="text-2xl font-bold text-white text-center blur-sm group-hover:blur-none transition-all duration-500 opacity-50 group-hover:opacity-100">
                          TOP SECRET
                        </h3>
                        <p class="mt-2 text-gray-400 text-xs tracking-widest uppercase">By V STORE ONLINE</p>
                        
                        <div class="absolute top-6 right-6 rotate-12 bg-brand-orange text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg transform group-hover:rotate-[20deg] transition-transform">
                          <span class="text-xs line-through opacity-75">₹199</span>
                          <span class="text-2xl font-bold">₹99</span>
                        </div>
                      </div>
                    </div>
                    <div class="absolute -bottom-10 left-10 right-10 h-4 bg-black blur-xl opacity-20 transform rotate-[-6deg]"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- FREE TIP GENERATOR (MOCK) -->
            <div class="px-4">
              <div class="my-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-xl max-w-3xl mx-auto relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-purple"></div>
                
                <div class="text-center mb-8">
                  <div class="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
                    <i data-lucide="sparkles" class="w-6 h-6 text-brand-purple"></i>
                  </div>
                  <h3 class="text-2xl font-serif font-bold text-gray-900 mb-2">
                    Unsure? Get a Free AI-Generated Strategy Tip
                  </h3>
                  <p class="text-gray-600">
                    Experience a preview of the insights contained in the book.
                  </p>
                </div>

                <div class="flex flex-col items-center justify-center" id="tip-container">
                    <button id="generate-tip-btn" class="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <span>Reveal a Secret Tip</span>
                      <i data-lucide="sparkles" class="w-4 h-4 ml-2 group-hover:animate-pulse"></i>
                    </button>
                    
                    <div id="tip-loading" class="hidden flex items-center space-x-2 text-brand-purple animate-pulse">
                        <i data-lucide="loader-2" class="w-6 h-6 animate-spin"></i>
                        <span class="font-medium">Consulting the algorithm...</span>
                    </div>

                    <div id="tip-result" class="hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 w-full">
                        <p class="text-lg text-gray-800 font-serif italic leading-relaxed text-center" id="tip-text-content">
                          <!-- Tip goes here -->
                        </p>
                        <div class="mt-6 flex justify-center">
                            <button id="reset-tip-btn" class="text-sm text-gray-500 hover:text-brand-orange transition-colors flex items-center">
                                <i data-lucide="share-2" class="w-4 h-4 mr-1"></i> Generate Another
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <!-- FEATURES -->
            <section id="features" class="py-20 bg-white">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                  <h2 class="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-4">
                    Inside the <span class="italic text-brand-purple">Black Box</span>
                  </h2>
                  <p class="max-w-2xl mx-auto text-lg text-gray-600">
                    This isn't just theory. It's a 30-day tactical roadmap designed for rapid execution and measurable results.
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                  <!-- Feature Items -->
                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="trending-up" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Algorithm Mastery</h3>
                    <p class="text-gray-600 leading-relaxed">Understand exactly how the 2025 algorithm ranks content and how to exploit it legally.</p>
                  </div>
                  
                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="users" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Community Building</h3>
                    <p class="text-gray-600 leading-relaxed">Turn passive scrollers into raving fans who engage with every single story.</p>
                  </div>

                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="dollar-sign" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Monetization Models</h3>
                    <p class="text-gray-600 leading-relaxed">Five proven ways to make $1,000/mo even with a small following under 2k.</p>
                  </div>

                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="camera" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Visual Aesthetics</h3>
                    <p class="text-gray-600 leading-relaxed">Create a cohesive, high-end feed look using just your smartphone and free apps.</p>
                  </div>

                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="zap" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Viral Reels Framework</h3>
                    <p class="text-gray-600 leading-relaxed">Copy-paste scripts and hook structures that have generated millions of views.</p>
                  </div>

                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="shield-check" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Shadowban Protection</h3>
                    <p class="text-gray-600 leading-relaxed">What not to do. Keep your account safe from engagement throttling.</p>
                  </div>

                   <!-- NEW FEATURES START -->
                   <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="message-circle" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Story Sales Scripts</h3>
                    <p class="text-gray-600 leading-relaxed">Exact word-for-word scripts to convert story views into DMs and sales.</p>
                  </div>

                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="hash" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">SEO &amp; Hashtag Vault</h3>
                    <p class="text-gray-600 leading-relaxed">The new SEO strategy that replaces dead hashtags. Rank on Explore pages easily.</p>
                  </div>

                  <div class="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-purple rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                      <i data-lucide="clipboard-check" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-purple transition-colors">Profile Audit Kit</h3>
                    <p class="text-gray-600 leading-relaxed">A 15-point checklist to ensure your profile converts visitors into followers.</p>
                  </div>
                   <!-- NEW FEATURES END -->

                </div>

                <!-- Syllabus -->
                <div class="max-w-3xl mx-auto">
                  <div class="text-center mb-12">
                    <div class="inline-flex items-center justify-center p-2 bg-blue-50 text-blue-700 rounded-full mb-4 px-4 text-sm font-bold tracking-wide uppercase">
                      <i data-lucide="book-open" class="w-4 h-4 mr-2"></i>
                      Syllabus Sneak Peek
                    </div>
                    <h3 class="text-3xl font-serif font-bold text-gray-900">What You'll Master</h3>
                  </div>

                  <div class="space-y-4">
                    <!-- Module 1 -->
                    <div class="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:border-brand-purple/30 transition-colors">
                      <button class="w-full flex items-center justify-between p-5 text-left focus:outline-none syllabus-toggle">
                        <div class="flex items-center gap-4">
                          <span class="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-2 py-1 rounded">Module 1</span>
                          <span class="font-bold text-gray-900 text-lg">Foundation and Psychology</span>
                        </div>
                        <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 icon-chevron"></i>
                      </button>
                      <div class="hidden px-5 pb-5 pt-0 syllabus-content">
                        <ul class="space-y-3 ml-2 border-l-2 border-brand-purple/20 pl-4 mt-2">
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>Optimizing your Bio for Conversion</li>
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>The 'Hook-Retain-Reward' Loop</li>
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>Defining your 1000 True Fans</li>
                        </ul>
                      </div>
                    </div>
                    
                    <!-- Module 2 -->
                    <div class="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:border-brand-purple/30 transition-colors">
                      <button class="w-full flex items-center justify-between p-5 text-left focus:outline-none syllabus-toggle">
                        <div class="flex items-center gap-4">
                          <span class="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-2 py-1 rounded">Module 2</span>
                          <span class="font-bold text-gray-900 text-lg">Content Engineering</span>
                        </div>
                        <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 icon-chevron"></i>
                      </button>
                      <div class="hidden px-5 pb-5 pt-0 syllabus-content">
                        <ul class="space-y-3 ml-2 border-l-2 border-brand-purple/20 pl-4 mt-2">
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>Reel Structures that Hold Retention</li>
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>Carousel Storytelling 101</li>
                        </ul>
                      </div>
                    </div>

                    <!-- Module 5 (Added) -->
                    <div class="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:border-brand-purple/30 transition-colors">
                      <button class="w-full flex items-center justify-between p-5 text-left focus:outline-none syllabus-toggle">
                        <div class="flex items-center gap-4">
                          <span class="text-xs font-bold text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-2 py-1 rounded">Module 5</span>
                          <span class="font-bold text-gray-900 text-lg">Scaling & Automation</span>
                        </div>
                        <i data-lucide="chevron-down" class="w-5 h-5 text-gray-500 icon-chevron"></i>
                      </button>
                      <div class="hidden px-5 pb-5 pt-0 syllabus-content">
                        <ul class="space-y-3 ml-2 border-l-2 border-brand-purple/20 pl-4 mt-2">
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>Building a Content System in Notion</li>
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>Hiring your first Video Editor</li>
                          <li class="text-gray-600 text-sm flex items-center"><div class="w-1.5 h-1.5 rounded-full bg-brand-purple mr-2"></div>From Creator to Business Owner</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <!-- PRICING -->
            <section id="pricing" class="py-20 bg-gray-50">
              <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                  <div class="p-10 md:w-3/5 flex flex-col justify-center">
                    <h2 class="text-3xl font-serif font-bold text-gray-900 mb-2">Pre-order the <br/><span class="text-brand-purple">30-Day Growth Protocol</span></h2>
                    <p class="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide">Official V STORE ONLINE Release</p>
                    <ul class="space-y-4 mb-8">
                      <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"></i><span class="text-gray-700">Instant Access to PDF Guide (on launch)</span></li>
                      <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"></i><span class="text-gray-700">Bonus: 50+ Reel Hooks Template</span></li>
                      <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0"></i><span class="text-gray-700">Private Community Access</span></li>
                    </ul>
                    <div class="flex items-center text-sm text-gray-500 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                      <i data-lucide="clock" class="w-4 h-4 mr-2 text-yellow-600"></i>
                      <span>Launch Offer expires soon.</span>
                    </div>
                  </div>

                  <div class="bg-gray-900 p-10 md:w-2/5 flex flex-col justify-center text-center md:text-left relative">
                    <div class="absolute top-0 right-0 p-4">
                      <div class="bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded">50% OFF</div>
                    </div>
                    <p class="text-gray-400 text-lg mb-1">Total Value</p>
                    <p class="text-3xl text-gray-500 line-through decoration-brand-orange mb-6 font-serif">₹199</p>
                    <p class="text-gray-400 text-lg mb-1">Pre-order Price</p>
                    <div class="flex items-baseline mb-8">
                      <span class="text-5xl font-bold text-white tracking-tight">₹99</span>
                      <span class="text-gray-400 ml-2">INR</span>
                    </div>
                    <button id="get-access-btn" class="w-full bg-gradient-to-r from-brand-orange to-brand-pink text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-brand-orange/20 hover:scale-105 transition-all duration-200">
                      Get Access Now
                    </button>
                    <p class="text-gray-500 text-xs mt-4 text-center">100% Money-back guarantee.</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- ABOUT -->
            <section id="about" class="py-20 bg-white">
              <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center gap-12">
                  <div class="w-full md:w-1/3">
                    <div class="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200 relative">
                      <img src="https://picsum.photos/400/400?grayscale" alt="Author" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700"/>
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div class="absolute bottom-4 left-4 text-white">
                         <p class="font-bold text-lg">Alex Doe</p>
                         <p class="text-sm opacity-80">Social Strategist</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-2/3">
                    <h3 class="text-3xl font-serif font-bold text-gray-900 mb-4">Why I wrote this book.</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                      I spent 3 years analyzing over 5,000 viral posts. I realized that 90% of advice online is outdated or just plain wrong. 
                      Most people tell you to "just be consistent," but consistency without strategy is just noise.
                    </p>
                    <div class="p-4 bg-brand-light border-l-4 border-brand-purple rounded-r-lg">
                      <p className="text-gray-800 font-medium italic">"This is the manifesto for the modern creator."</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- FOOTER -->
            <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center mb-12">
                <div class="mb-6 md:mb-0">
                  <span class="text-xl font-serif font-bold tracking-tight text-gray-900">
                    V STORE <span class="text-brand-orange">ONLINE</span>
                  </span>
                  <p class="text-sm text-gray-500 mt-2">© 2025 V STORE ONLINE. All rights reserved.</p>
                  <p class="text-xs text-brand-purple mt-1 font-medium">Our Debut Entry into the Ebooks Community.</p>
                </div>
                <div class="flex items-center space-x-8">
                  <a href="https://www.instagram.com/vstoreonline.in" target="_blank" class="group flex flex-col items-center text-gray-400 hover:text-brand-pink transition-colors">
                    <div class="p-2 rounded-full group-hover:bg-brand-pink/10 transition-colors">
                      <i data-lucide="instagram" class="w-5 h-5"></i>
                    </div>
                    <span class="text-[10px] font-bold mt-0.5 tracking-wide">@vstoreonline.in</span>
                  </a>
                  
                  <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors pt-4">
                      <i data-lucide="twitter" class="w-5 h-5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-900 transition-colors pt-4">
                      <i data-lucide="mail" class="w-5 h-5"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-sm text-gray-500 font-medium">
                  <button id="btn-legal-about" class="hover:text-brand-purple transition-colors">About Us</button>
                  <button id="btn-legal-privacy" class="hover:text-brand-purple transition-colors">Privacy Policy</button>
                  <button id="btn-legal-terms" class="hover:text-brand-purple transition-colors">Terms & Conditions</button>
              </div>
            </footer>
            
            <!-- User Details Modal (Hidden by default) -->
            <div id="user-details-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
              <div class="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
                <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 class="font-serif font-bold text-gray-900 text-lg">Enter Details to Proceed</h3>
                  <button id="close-user-details-btn" class="text-gray-400 hover:text-gray-600 transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                  </button>
                </div>
                <form id="user-details-form" class="p-6 space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input required type="text" name="name" placeholder="John Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"/>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input required type="email" name="email" placeholder="john@example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"/>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                    <input required type="tel" name="mobile" placeholder="+91 98765 43210" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-all"/>
                  </div>
                  <div class="pt-2">
                    <button type="submit" id="submit-details-btn" class="w-full bg-gray-900 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center">
                       <i data-lucide="lock" class="w-4 h-4 mr-2"></i> Secure Checkout
                    </button>
                    <p class="text-center text-xs text-gray-500 mt-3">Your details are safe.</p>
                  </div>
                </form>
              </div>
            </div>

            <!-- Payment Success Modal (Hidden by default) -->
            <div id="success-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300">
              <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-center">
                <button id="close-modal-btn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                  <i data-lucide="x" class="w-6 h-6"></i>
                </button>
                
                <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="check-circle" class="w-8 h-8 text-green-600"></i>
                </div>
                
                <h3 class="text-2xl font-serif font-bold text-gray-900 mb-4">
                  Payment Successful!
                </h3>
                
                <p class="text-gray-600 leading-relaxed mb-6">
                   Your order has been received. We will notify you via the email provided.
                </p>
                
                <button id="modal-ok-btn" class="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                  Close
                </button>
              </div>
            </div>

            <!-- Legal Modal (Hidden by default) -->
            <div id="legal-modal" class="fixed inset-0 z-[110] hidden items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <div class="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                    <div class="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
                        <h3 id="legal-modal-title" class="font-serif font-bold text-gray-900 text-xl">Legal</h3>
                        <button id="close-legal-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors">
                            <i data-lucide="x" class="w-6 h-6"></i>
                        </button>
                    </div>
                    <div id="legal-modal-body" class="p-8 overflow-y-auto text-gray-600 space-y-4">
                        <!-- Content injected via JS -->
                    </div>
                    <div class="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end flex-shrink-0">
                        <button id="close-legal-modal-btn-2" class="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">Close</button>
                    </div>
                </div>
            </div>

          </div>
          
          <script>
            // Initialize Lucide Icons
            lucide.createIcons();

            // Navbar Scroll Effect
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 20) {
                    nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                    nav.classList.remove('py-6');
                } else {
                    nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                    nav.classList.add('py-6');
                }
            });

            // Mobile Menu Toggle
            const menuBtn = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                // Refresh icons if needed inside hidden div
                lucide.createIcons(); 
            });
            
            // Close mobile menu on link click
            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // Syllabus Accordion
            const toggles = document.querySelectorAll('.syllabus-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const content = toggle.nextElementSibling;
                    content.classList.toggle('hidden');
                    const icon = toggle.querySelector('.icon-chevron');
                    if(content.classList.contains('hidden')) {
                         // icon logic if we had specific icons for up/down, currently just stays down or rotates
                         icon.style.transform = 'rotate(0deg)';
                    } else {
                         icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // --- LEGAL MODALS LOGIC ---
            const legalModal = document.getElementById('legal-modal');
            const legalTitle = document.getElementById('legal-modal-title');
            const legalBody = document.getElementById('legal-modal-body');
            const closeLegalBtns = [document.getElementById('close-legal-modal-btn'), document.getElementById('close-legal-modal-btn-2')];

            const legalContent = {
                about: {
                    title: "About V STORE ONLINE",
                    html: "<p>Welcome to <strong>V STORE ONLINE</strong>, a premier digital storefront.</p><p>Founded in 2024, our mission is to decode the complexities of the digital economy.</p><p>InstaGrow30 represents our flagship entry into educational products.</p>"
                },
                privacy: {
                    title: "Privacy Policy",
                    html: "<p><strong>Last Updated: January 2025</strong></p><p>We collect basic information (Name, Email, Phone) only when you voluntarily provide it during checkout.</p><p>Your email is used solely to send you the ebook and updates. We do not sell your data.</p>"
                },
                terms: {
                    title: "Terms & Conditions",
                    html: "<p><strong>Last Updated: January 2025</strong></p><p>Since InstaGrow30 is a digital product, access is granted immediately. Content is for personal use only.</p><p>Refunds available within 7 days if unsatisfied.</p>"
                }
            };

            function openLegal(type) {
                const content = legalContent[type];
                if(content && legalModal) {
                    legalTitle.innerText = content.title;
                    legalBody.innerHTML = content.html;
                    legalModal.classList.remove('hidden');
                    legalModal.classList.add('flex');
                }
            }

            document.getElementById('btn-legal-about')?.addEventListener('click', () => openLegal('about'));
            document.getElementById('btn-legal-privacy')?.addEventListener('click', () => openLegal('privacy'));
            document.getElementById('btn-legal-terms')?.addEventListener('click', () => openLegal('terms'));

            closeLegalBtns.forEach(btn => {
                btn?.addEventListener('click', () => {
                    legalModal.classList.add('hidden');
                    legalModal.classList.remove('flex');
                });
            });


            // --- FREE TIP GENERATOR LOGIC (LOCAL STORAGE & OFFLINE) ---
            const genBtn = document.getElementById('generate-tip-btn');
            const loading = document.getElementById('tip-loading');
            const result = document.getElementById('tip-result');
            const resultText = document.getElementById('tip-text-content');
            const resetBtn = document.getElementById('reset-tip-btn');

            const OFFLINE_TIPS = [
              "Optimize your bio to clearly state what you do and who you help in the first 3 seconds of a visit.",
              "Reply to every comment with a question within the first hour to double your engagement rate.",
              "Use 3-5 SEO keywords in your caption instead of 30 generic hashtags.",
              "Post Reels that loop seamlessly; watch time is the #1 ranking factor in 2025.",
              "Audit your following: remove ghost followers to increase your engagement percentage.",
              "Use the 'Green Screen' effect to comment on trending industry news for instant authority.",
              "Create a 'Start Here' highlight to convert new visitors into followers immediately.",
              "Collaborate with accounts that have your ideal audience but aren't direct competitors.",
              "Stop posting watermarked TikToks; Instagram's algorithm actively demotes them.",
              "Write captions that encourage 'Saves'—it is the highest value metric for algorithmic reach."
            ];

            // 1. Check Local Storage on Load
            if(genBtn && resultText) {
                const savedTip = localStorage.getItem('instaGrow_unlockedTip');
                if(savedTip) {
                    genBtn.classList.add('hidden');
                    resultText.innerText = '"' + savedTip + '"';
                    result.classList.remove('hidden');
                    result.classList.add('block');
                }
            }

            // 2. Generate New Tip
            if(genBtn) {
              genBtn.addEventListener('click', () => {
                  genBtn.classList.add('hidden');
                  loading.classList.remove('hidden');
                  loading.classList.add('flex');
                  
                  // Simulate API call delay
                  setTimeout(() => {
                      const randomTip = OFFLINE_TIPS[Math.floor(Math.random() * OFFLINE_TIPS.length)];
                      
                      // Save to Local Storage
                      localStorage.setItem('instaGrow_unlockedTip', randomTip);
                      
                      loading.classList.add('hidden');
                      loading.classList.remove('flex');
                      
                      resultText.innerText = '"' + randomTip + '"';
                      result.classList.remove('hidden');
                      result.classList.add('block');
                  }, 1500);
              });
  
              resetBtn.addEventListener('click', () => {
                  const randomTip = OFFLINE_TIPS[Math.floor(Math.random() * OFFLINE_TIPS.length)];
                  localStorage.setItem('instaGrow_unlockedTip', randomTip);
                  
                  // Simple flash effect
                  result.classList.add('opacity-50');
                  setTimeout(() => {
                      resultText.innerText = '"' + randomTip + '"';
                      result.classList.remove('opacity-50');
                  }, 200);
              });
            }
            
            // Payment Success Modal & User Details Logic
            const getAccessBtn = document.getElementById('get-access-btn');
            const successModal = document.getElementById('success-modal');
            const userDetailsModal = document.getElementById('user-details-modal');
            const userDetailsForm = document.getElementById('user-details-form');
            const submitDetailsBtn = document.getElementById('submit-details-btn');
            const closeUserDetailsBtn = document.getElementById('close-user-details-btn');
            
            const closeModalBtn = document.getElementById('close-modal-btn');
            const modalOkBtn = document.getElementById('modal-ok-btn');
            
            if(getAccessBtn && successModal && userDetailsModal) {
                
                // Step 1: Open User Details Modal
                getAccessBtn.addEventListener('click', () => {
                    userDetailsModal.classList.remove('hidden');
                    userDetailsModal.classList.add('flex');
                });
                
                // Step 2: Handle Form Submission
                userDetailsForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Show loading state (visual only, transition is immediate)
                    const originalBtnText = submitDetailsBtn.innerHTML;
                    submitDetailsBtn.innerHTML = 'Processing...';
                    
                    // Collect Data
                    const formData = new FormData(userDetailsForm);
                    const data = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        mobile: formData.get('mobile'),
                        _subject: "New InstaGrow30 Order Attempt",
                        message: "User initiated checkout sequence."
                    };
                    
                    // Send to FormSubmit.co (Fire & Forget)
                    fetch("https://formsubmit.co/ajax/harshapadala06@gmail.com", {
                        method: "POST",
                        headers: { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).catch(error => console.error('Error sending data', error));
                    
                    // IMMEDIATE TRANSITION
                    
                    // Close Details Modal
                    userDetailsModal.classList.add('hidden');
                    userDetailsModal.classList.remove('flex');
                    
                    // Open Razorpay
                    window.open('https://razorpay.com/payment-link/plink_RnUTxCB5qauKHY', '_blank');
                    
                    // Show Success Modal
                    successModal.classList.remove('hidden');
                    successModal.classList.add('flex');
                    
                    // Reset button state
                    setTimeout(() => {
                        submitDetailsBtn.innerHTML = originalBtnText;
                        submitDetailsBtn.disabled = false;
                    }, 1000);
                });
                
                // Close Handlers
                closeUserDetailsBtn.addEventListener('click', () => {
                    userDetailsModal.classList.add('hidden');
                    userDetailsModal.classList.remove('flex');
                });
                
                const closeSuccessModal = () => {
                    successModal.classList.add('hidden');
                    successModal.classList.remove('flex');
                };
                
                closeModalBtn.addEventListener('click', closeSuccessModal);
                modalOkBtn.addEventListener('click', closeSuccessModal);
            }
          </script>
        ]]></b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
        <data:content/>
      </b:includable>
    </b:widget>
  </b:section>
</body>
</html>`;

const TemplateDownloader: React.FC = () => {
  const handleDownload = () => {
    const blob = new Blob([xmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'InstaGrow30_LandingPage.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
       <button 
         onClick={handleDownload} 
         className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center gap-2 pr-4 group" 
         title="Download Blogger Template"
       >
         <Download className="w-5 h-5" />
         <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">Download Template</span>
       </button>
    </div>
  );
};

export default TemplateDownloader;