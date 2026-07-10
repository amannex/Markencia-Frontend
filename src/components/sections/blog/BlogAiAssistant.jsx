import React, { useState } from 'react';
import styles from './BlogAiAssistant.module.css';

export default function BlogAiAssistant({ post }) {
  const [query, setQuery] = useState('');

  const handleChipClick = (text) => {
    setQuery(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      alert('The Markencia AI assistant is coming soon! Stay tuned.');
      setQuery('');
    }
  };

  return (
    <div className={styles.widget} aria-label="AI Assistant">
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div className={styles.headerText}>
          <div className={styles.headerTitle}>Markencia AI</div>
        </div>
        <div className={styles.badge}>BETA</div>
      </div>
      
      <div className={styles.body}>
        <p className={styles.prompt}>Ask me anything about this article.</p>
        
        <div className={styles.chips}>
          <button 
            type="button" 
            className={styles.chip}
            onClick={() => handleChipClick('Summarize this post')}
          >
            Summarize this post
          </button>
          <button 
            type="button" 
            className={styles.chip}
            onClick={() => handleChipClick('What are the key takeaways?')}
          >
            What are the key takeaways?
          </button>
        </div>
        
        <form className={styles.inputRow} onSubmit={handleSubmit}>
          <input 
            type="text" 
            className={styles.input} 
            placeholder="Ask a question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.sendBtn} aria-label="Send">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
        
        <p className={styles.comingSoon}>AI features coming soon</p>
      </div>
    </div>
  );
}
