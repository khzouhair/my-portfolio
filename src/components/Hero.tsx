import React from 'react';
import { Download, Eye, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">
              Khadija Zouhair
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4">
            Computer Science & Data Engineering Student | Machine Learning & AI Specialist
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Final-year student seeking a Machine Learning / AI internship. Experienced in developing and deploying ML models, data preprocessing, and extracting actionable insights.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center px-8 py-4 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </button>
            <a
              href="/Khadija Zouhair.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-white text-sky-500 border-2 border-sky-500 rounded-full font-semibold hover:bg-sky-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Me
            </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
