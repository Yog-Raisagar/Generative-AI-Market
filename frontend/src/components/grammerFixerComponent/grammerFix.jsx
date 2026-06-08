import React, { useState } from 'react';
import axios from 'axios';
import './grammerFix.css';

const GrammerFixer = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFix = async () => {
    if (!input.trim()) return;
    setLoading(true);
    
    try{
       const response = await axios.post('http://localhost:5000/api/genai/grammer-fix', { text: input })
       
       setOutput(response.data.response.response || 'No response');
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error fixing grammar. See console.');
    } finally {
      setLoading(false);
    }
    
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="gf-card tool-card">
      <div className="gf-header">
        <h2 className="tool-title">Grammar Fixer</h2>
        <p className="tool-description">Correct grammar, punctuation, and minor clarity issues instantly.</p>
      </div>

      <textarea
        className="gf-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste or type text here..."
        rows={6}
      />

      <div className="gf-actions">
        <button className="tool-btn" onClick={handleFix} disabled={loading}>
          {loading ? 'Fixing…' : 'Fix Grammar'}
        </button>
        <button className="gf-clear" onClick={handleClear}>Clear</button>
      </div>

      <div className="gf-result">
        <h3 className="gf-result-title">Result</h3>
        <div className="gf-output">{output || <span className="gf-placeholder">Nothing yet — try fixing some text above.</span>}</div>
      </div>
    </div>
  );
}

export default GrammerFixer;