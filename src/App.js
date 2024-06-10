// src/App.js
import React from 'react';
import './App.css';
import EbookList from './components/EbookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>eBook Store</h1>
      </header>
      <main>
        <h2>Featured eBooks</h2>
        <EbookList />
      </main>
    </div>
  );
}

export default App;
