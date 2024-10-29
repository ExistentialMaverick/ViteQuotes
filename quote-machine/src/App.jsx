import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import quotesBank from './assets/QuoteData.js'


function App() {

  const newQuote = quotesBank[Math.floor(Math.random() * quotesBank.length)]
  
  const [quote, setQuote] = useState('');
  
  const getNewQuote = () => setQuote(newQuote);
  

  return (
    <main id="main-form" className='main-form'>
      <div id="quote-box" className="quote-container">
        <h1>Quote Machine</h1>
        <p id="text" className='quote'>{newQuote.quote}</p>
        <p id="author" className='author'>- {newQuote.author}</p>
        <div id="actions" className='actions'>
          <button id="new-quote" onClick={getNewQuote}>New Quote</button>
          <a id="tweet-quote" target="_blank" href='twitter.com/intent/tweet'>Tweet Quote</a>
        </div>
      </div>
    </main>
  );
}

export default App
