import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Riḥla Travel Planner',
      description: 'Flask application generating personalized travel itineraries using Qloo and Google Gemini APIs for intelligent trip planning.',
      technologies: ['Flask', 'Python', 'Qloo API', 'Google Gemini', 'HTML', 'CSS'],
      liveLink: 'https://host-test-1-q5cc.onrender.com/',
      githubLink: 'https://github.com/hamzamraizik/Rihla?tab=readme-ov-file',
      color: 'from-purple-500 to-purple-600',
  image: '/project1.png'
    },
    {
      title: 'AI & Cybersecurity SaaS Platform (in progress)',
      description: 'Developed a SaaS platform with RAG chatbot and cybersecurity tools for secure, scalable, context-aware solutions.',
      technologies: ['Python', 'LangChain', 'ChromaDB', 'GPT embeddings', 'Node.js', 'Express', 'Next.js', 'React', 'MongoDB', 'Docker', 'FastAPI', 'Render'],
      liveLink: 'https://defended-cyber-platform.onrender.com/',
      githubLink: '#',
      color: 'from-blue-500 to-blue-600',
  image: '/project2.png'
    },
    {
      title: 'HGL Curve Prediction',
      description: 'Developed Deep Learning models (LSTM, GRU, TCN) to predict hydraulic HGL curves with automated reporting and chatbot integration.',
      technologies: ['Python', 'LSTM', 'GRU', 'TCN', 'TensorFlow', 'Keras', 'n8n', 'Data Preprocessing'],
      liveLink: '#',
      githubLink: 'https://github.com/khzouhair/OCP_Internship',
      color: 'from-emerald-500 to-emerald-600',
  image: '/project3.png'
    },
     {
      title: 'Web Chatbot',
      description: 'Simple client-side chatbot with keyword detection, dynamic JavaScript responses, and learning capability by memorizing user-provided answers.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://khzouhair.github.io/Web_Chatbot/',
      githubLink: 'https://github.com/khzouhair/Web_Chatbot',
      color: 'from-emerald-500 to-emerald-600',
  image: '/project4.png'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600">
            A collection of projects showcasing my skills in web development, data science, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={"bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"}
            >
              <img
                src={project.image}
                alt={project.title + ' image'}
                className="w-full h-40 object-cover object-center"
                style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/khzouhair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Github className="mr-2 h-5 w-5" />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
