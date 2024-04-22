import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// css files
import './index.css';
import './alg-vis/visualizer.css';
import './alg-content/alg-learning.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
