import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Engineering Cycle - Computer Science & Data Engineering',
      institution: 'ENSA Khouribga',
      period: '2024 - Present',
      description: 'Specialized in Computer Science and Data Engineering with focus on Machine Learning and Big Data applications.',
      color: 'bg-sky-500'
    },
    {
      degree: 'Computer Science Student',
      institution: '1337 Coding School, UM6P Khouribga',
      period: '2024 - Present',
      description: 'Peer-to-peer learning methodology focusing on hands-on coding experience and collaborative problem-solving in computer science.',
      color: 'bg-purple-500'
    },
    {
      degree: 'Integrated Preparatory Cycle',
      institution: 'ENSA Khouribga',
      period: '2022 - 2024',
      description: 'Intensive preparation in Mathematics, Physics, and Engineering Sciences for engineering schools.',
      color: 'bg-emerald-500'
    },
    {
      degree: 'Baccalaureate in Physical Sciences (Very Good)',
      institution: 'HASSAN II, Benslimane',
      period: '2021 - 2022',
      description: 'Scientific Baccalaureate with excellent results, focusing on Mathematics, Physics, Chemistry, and Natural Sciences.',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">Educational journey and achievements</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-emerald-500"></div>
          
          {educationData.map((edu, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              <div className={`${edu.color} w-4 h-4 rounded-full border-4 border-white shadow-lg z-10`}></div>
              
              <div className="ml-8 bg-white rounded-2xl shadow-lg p-8 flex-1 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-sky-500 mr-3" />
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-sky-600 font-medium mb-4">
                  {edu.institution}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;