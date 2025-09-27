import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Keras', 'PyTorch', 'Deep Learning', 'LSTM', 'GRU', 'TCN', 'Computer Vision', 'NLP', 'GPT embeddings', 'LangChain'],
      color: 'from-sky-500 to-sky-600'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Flask', 'FastAPI', 'Python'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'Bootstrap', 'Tailwind'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Databases & Data Handling',
      skills: ['SQL', 'MongoDB', 'Hadoop', 'Big Data Processing', 'Feature Engineering', 'Data Cleaning'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Data Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Power BI', 'Qlik Sense'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'AWS', 'n8n Automation'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-slate-600">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/80 rounded-3xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <h3 className="text-xl font-semibold text-slate-700 mb-6 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-5 py-2 bg-gradient-to-r ${category.color} text-white rounded-xl text-base font-medium shadow-sm hover:shadow-lg transition-shadow duration-200 backdrop-blur-sm`}
                    style={{filter: 'brightness(1.1) saturate(0.85)'}}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;