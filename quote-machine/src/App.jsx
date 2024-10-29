import { useState } from 'react';
import './App.css';
import quotesBank from './assets/QuoteData.js';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getNewQuote = () => {
    const newQuote = quotesBank[Math.floor(Math.random() * quotesBank.length)];
    setQuote(newQuote.quote);
    setAuthor(newQuote.author);
  };

  // Generate a quote when the component mounts
  useState(() => {
    getNewQuote();
  }, []);

  const tweetQuote = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`;

  return (
    <main id="main-form" className='main-form'>
      <div id="quote-box" className="quote-container">
        <h1>Quote Machine</h1>
        <p id="text" className='quote'>{quote}</p>
        <p id="author" className='author'>- {author}</p>
        <div id="actions" className='actions'>
          <button id="new-quote" onClick={getNewQuote}>New Quote</button>
          <a id="tweet-quote" target="_blank" rel="noopener noreferrer" href={tweetQuote}>Tweet Quote</a>
        </div>
      </div>
    </main>
  );
}

export default App;
