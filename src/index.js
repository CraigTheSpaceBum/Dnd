import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have a custom CSS file
import DnDCharacterManager from './App'; // Assuming your component is in App.js

ReactDOM.render(
  <React.StrictMode>
    <DnDCharacterManager />
  </React.StrictMode>,
  document.getElementById('root')
);
