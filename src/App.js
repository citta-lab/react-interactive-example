import React from 'react';
import logo from './logo.svg';
import './App.css';

import AuthorManager from './author/AuthorManager';

function App() {
  return (
    <div className="App">
      <header >
        Interactive Example
      </header>
      <AuthorManager />
    </div>
  );
}

export default App;
