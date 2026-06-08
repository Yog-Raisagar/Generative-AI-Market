import {useNavigate} from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();   
  const aiTools = [
    {
      title: 'AI Translator',
      description: 'Translate text into multiple languages using AI.',
      icon: '🌍',
      path: '/translator',
    },
    {
      title: 'AI Chatbot',
      description: 'Ask anything and get instant AI responses.',
      icon: '🤖',
      path: '/ai-chat',
    },
    {
      title: 'Ai Chat-Bot',
      description: 'General Queries and text Generative Ai',
      icon: '💻',
      path: '/chatbot',
    },
    {
      title: 'AI Summarizer',
      description: 'Summarize long content into short insights.',
      icon: '📄',
      path: '/summarizer',
    },
    {
      title: 'Image Generator',
      description: 'Create AI-generated images from prompts.',
      icon: '🎨',
      path: '/image-generator',
    },
    {
      title: 'Grammar Fixer',
      description: 'Improve grammar and writing instantly.',
      icon: '✍️',
      path: '/grammar-fixer',
    },
  ];

  return (
    <div className="page-root">
      <div className="ai-background" aria-hidden="true">
        {/* AI Decorative Orbs */}
        <div className="ai-orb ai-orb-1"></div>
        <div className="ai-orb ai-orb-2"></div>
        <div className="ai-orb ai-orb-3"></div>
      </div>

      <div className="page-content">
        {/* Navbar */}
        <nav className="navbar">
          <h1 className="logo">GenAI Platform</h1>
          <button className="login-btn">Login</button>
        </nav>

        {/* Hero Section */}
        <div className="hero">
          <h2 className="hero-title">
            Explore Powerful
            <span className="highlight"> AI Tools </span>
            In One Platform
          </h2>
          <p className="hero-description">
            Use multiple Generative AI tools including translation,
            summarization, coding assistance, image generation,
            and intelligent chatbot systems.
          </p>
        </div>

        {/* AI Tools Cards */}
        <div className="tools-grid">
          {aiTools.map((tool, index) => (
            <div key={index} className="tool-card fade-in">
              <div className="tool-icon">{tool.icon}</div>
              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-description">{tool.description}</p>
              <button className="tool-btn" onClick={() => navigate(tool.path)}>
                Open Tool
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer">
          @2026 Built with React, FastAPI, Node.js and Generative AI
        </footer>
      </div>
    </div>
  );
}
