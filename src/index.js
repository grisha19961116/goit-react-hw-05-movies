import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="app_wrapper">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
