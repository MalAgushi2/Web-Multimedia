// src/App.js
import React from 'react';
import './App.css';
import EbookList from './components/EbookList';
import NavigationBar from './components/Navbar/NavigationBar';
import Multimedia from './components/Multimedia/Multimedia';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <h1>eBook Store</h1>
      </header>
      <main>
        <h2>Featured eBooks</h2>
        <Multimedia/>
        <EbookList />
      </main>
    </div>
  );
}

export default App;
