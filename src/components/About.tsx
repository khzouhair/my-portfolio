import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-slate-600 leading-relaxed text-center">
            I'm Khadija Zouhair, a final-year Computer Science and Data Engineering student seeking a Machine Learning / AI internship. 
            I'm experienced in developing and deploying ML models, data preprocessing, and extracting actionable insights. 
            With hands-on experience in deep learning, computer vision, and web development, I'm motivated to contribute to 
            innovative AI projects and deliver business value through cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;