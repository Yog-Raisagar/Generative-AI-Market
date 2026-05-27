import { useState } from 'react';
import axios from 'axios';

import './Translate.css';

function Translate() {
  const [userPrompt, setUserPrompt] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLang, setFromLang] = useState('auto');
  const [toLang, setToLang] = useState('en');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!userPrompt.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/genai', {
        prompt: userPrompt,
        fromlan: fromLang,
        tolan: toLang,
      });
      console.log('Translation response:', response.data);
      setTranslatedText(response.data.response.response || 'No response');
    } catch (error) {
      console.error('Error:', error);
      setTranslatedText('Error translating. See console.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUserPrompt('');
    setTranslatedText('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(translatedText);
    } catch (e) {
      console.error('Clipboard error', e);
    }
  };

  return (
    <div className="translate-root">
      <h1 className="translate-title">Simple Translator — GenAI</h1>

      <div className="translate-card">
        <div className="controls">
          <div className="selects">
            <label>
              From
              <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
                <option value="auto">Auto</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="zh">Chinese</option>
              </select>
            </label>

            <label>
              To
              <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="zh">Chinese</option>
              </select>
            </label>
          </div>

          <div className="action-buttons">
            <button className="btn primary" onClick={handleTranslate} disabled={loading}>
              {loading ? 'Translating...' : 'Translate'}
            </button>
            <button className="btn" onClick={handleClear}>Clear</button>
          </div>
        </div>

        <textarea
          className="input-area"
          placeholder="Type or paste text to translate..."
          rows={6}
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />

        <div className="result-block">
          <div className="result-header">
            <strong>Translation</strong>
            <div>
              <button className="small-btn" onClick={handleCopy} disabled={!translatedText}>
                Copy
              </button>
            </div>
          </div>

          <div className="result-area">
            {translatedText ? (
              <p>{translatedText}</p>
            ) : (
              <p className="placeholder">Translation will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translate;