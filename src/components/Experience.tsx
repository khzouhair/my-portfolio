import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Intern',
      company: 'OCP Group',
      period: 'Jul 21, 2025 - Sep 21, 2025',
      location: 'Khouribga, Morocco',
      description: 'Developed and deployed ML models for predictive analytics with automated reporting and chatbot integration.',
      achievements: [
        'Developed and deployed ML models (LSTM, GRU, TCN) for predictive analytics',
        'Performed data preprocessing, feature engineering, and exploratory data analysis',
        'Automated reporting and chatbot integration using n8n',
        'Collaborated with software engineers for model integration and optimization'
      ],
      color: 'bg-sky-500'
    },
    {
      title: 'Organizing Committee Member',
      company: 'DataVerse 3.0',
      period: '2024',
      location: 'Morocco',
      description: 'Active member of the Entertainment Cell, contributing to event organization and professional networking.',
      achievements: [
        'Coordinated event activities and facilitated collaboration among participants',
        'Expanded professional network in data science community'
      ],
      color: 'bg-emerald-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Professional experience in Artificial Intelligence and Software Development</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-emerald-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              <div className={`${exp.color} w-4 h-4 rounded-full border-4 border-white shadow-lg z-10`}></div>
              
              <div className="ml-8 bg-white rounded-2xl shadow-lg p-8 flex-1 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-sky-500 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {exp.title}
                    </h3>
                    <p className="text-sky-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;