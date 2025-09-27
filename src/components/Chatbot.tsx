import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Bonjour ! Je suis l'assistant virtuel de Khadija. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
  'bonjour': "Bonjour ! Je suis l'assistant virtuel de Khadija Zouhair. Posez-moi vos questions sur son parcours, ses compétences, ses projets ou ses expériences.",
  'hello': "Hello! I am Khadija Zouhair's virtual assistant. Ask me about her profile, skills, projects, or experience.",
  'salut': "Salut ! Je peux vous renseigner sur Khadija Zouhair : profil, compétences, projets, expériences, contact.",
  'profil': "Khadija Zouhair est étudiante en dernière année en Informatique et Data Engineering, passionnée par le Machine Learning et l'IA, à la recherche d'un stage dans ce domaine.",
  'profile': "Khadija Zouhair is a final-year Computer Science and Data Engineering student, seeking a Machine Learning / AI internship. She is experienced in ML model development and deployment, data preprocessing, and delivering business value.",
  'projets': "Voici quelques projets réalisés par Khadija :\n- Plateforme SaaS IA & cybersécurité\n- Prédiction du churn client (Random Forest)\n- Planificateur de voyage Riḥla (Flask, Qloo, Gemini)\n- Dashboard de ventes (Python, Qlik Sense)\n- Web chatbot (HTML, CSS, JS)",
  'projects': "Some projects by Khadija: \n- AI & Cybersecurity SaaS Platform\n- Customer Churn Prediction (Random Forest)\n- Riḥla Travel Planner (Flask, Qloo, Gemini)\n- Sales Dashboard (Python, Qlik Sense)\n- Web Chatbot (HTML, CSS, JS)",
  'compétences': "Compétences techniques :\n- Machine Learning & IA : Python (Pandas, NumPy, Scikit-Learn, TensorFlow, Keras, PyTorch), Deep Learning, LSTM, GRU, TCN, Computer Vision, NLP, GPT embeddings, LangChain\n- Backend : Node.js, Express, Flask, FastAPI\n- Frontend : React, Next.js, HTML, CSS, Bootstrap, Tailwind\n- Bases de données : SQL, MongoDB, Hadoop, Big Data\n- DataViz : Matplotlib, Seaborn, Power BI, Qlik Sense\n- DevOps/Cloud : Docker, AWS, n8n\n- Modélisation : UML, Merise\n- Systèmes : Windows, Linux, MacOS",
  'skills': "Technical skills:\n- Machine Learning & AI: Python (Pandas, NumPy, Scikit-Learn, TensorFlow, Keras, PyTorch), Deep Learning, LSTM, GRU, TCN, Computer Vision, NLP, GPT embeddings, LangChain\n- Backend: Node.js, Express, Flask, FastAPI\n- Frontend: React, Next.js, HTML, CSS, Bootstrap, Tailwind\n- Databases: SQL, MongoDB, Hadoop, Big Data\n- DataViz: Matplotlib, Seaborn, Power BI, Qlik Sense\n- DevOps/Cloud: Docker, AWS, n8n\n- Modeling: UML, Merise\n- OS: Windows, Linux, MacOS",
  'formation': "Formation :\n- ENSA Khouribga : Cycle ingénieur Informatique & Data Engineering (2024–Présent)\n- 1337 Coding School UM6P : Software Development (2024–Présent)\n- ENSA Khouribga : Cycle préparatoire intégré (2022–2024)\n- Lycée HASSAN II Benslimane : Bac Sciences Physiques (Très Bien, 2021–2022)",
  'education': "Education:\n- ENSA Khouribga: Engineering Cycle, Computer Science & Data Engineering (2024–Present)\n- 1337 Coding School (UM6P): Software Development Training (2024–Present)\n- ENSA Khouribga: Integrated Preparatory Cycle (2022–2024)\n- HASSAN II High School, Benslimane: Baccalaureate in Physical Sciences (Very Good, 2021–2022)",
  'expérience': "Expérience professionnelle :\n- Stagiaire IA chez OCP Group (Khouribga, 2025) : Développement et déploiement de modèles ML (LSTM, GRU, TCN), automatisation des rapports, intégration chatbot, collaboration avec ingénieurs logiciels.\n- Membre comité DataVerse 3.0 (2024) : Organisation d'événements et collaboration.",
  'experience': "Professional experience:\n- AI Intern at OCP Group (Khouribga, 2025): Developed and deployed ML models (LSTM, GRU, TCN), automated reporting, chatbot integration, collaboration with software engineers.\n- Organizing Committee Member at DataVerse 3.0 (2024): Event coordination and collaboration.",
  'contact': "Contact Khadija Zouhair :\n- Email : khadijazouhair2004@gmail.com\n- Téléphone : +212 629 139 309\n- Localisation : Khouribga, Morocco\n- LinkedIn, GitHub, Portfolio disponibles sur demande.",
  'stage': "Khadija recherche un stage en Machine Learning / IA. Elle est motivée, compétente en développement et déploiement de modèles ML, et souhaite contribuer à des projets innovants.",
  'internship': "Khadija is seeking a Machine Learning / AI internship. She is skilled in ML model development and deployment, and eager to contribute to innovative projects.",
  'cv': "Vous pouvez télécharger le CV de Khadija en cliquant sur le bouton 'Download CV' dans la section hero du portfolio.",
  'langues': "Langues : Arabe (natif), Français (courant), Anglais (professionnel)",
  'languages': "Languages: Arabic (Native), French (Fluent), English (Proficient)",
  'merci': "Avec plaisir ! Si vous avez d'autres questions sur Khadija Zouhair, son parcours ou ses projets, n'hésitez pas.",
  'thank you': "You're welcome! If you have more questions about Khadija Zouhair, her background or projects, just ask."
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Recherche de mots-clés dans le message
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Réponse par défaut
    return "Je ne suis pas sûr de comprendre votre question. Vous pouvez me demander des informations sur les projets, compétences, formation, expérience de Khadija, ou comment la contacter. Vous pouvez aussi demander des informations sur son stage recherché.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simuler un délai de réponse
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Quels sont ses projets ?",
    "Ses compétences ?",
    "Son expérience ?",
    "Comment la contacter ?"
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-sky-500 to-emerald-500 hover:shadow-xl hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
  <div className="fixed bottom-24 right-6 w-80 h-[400px] bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 p-4 text-white">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Assistant Khadija</h3>
                <p className="text-sm opacity-90">En ligne</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-slate-100 text-slate-800'
                      : 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && (
                      <Bot className="h-4 w-4 mt-0.5 text-sky-500 flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    {!message.isBot && (
                      <User className="h-4 w-4 mt-0.5 text-white/80 flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-sky-500" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-3">Questions rapides :</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputMessage(question)}
                    className="text-xs p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;