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
        
      </header>
      <main>
        
        <Multimedia/>
        <EbookList />
      </main>
    </div>
  );
}

export default App;
