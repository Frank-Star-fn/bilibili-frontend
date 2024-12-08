import React from 'react';
import ReactDOM from 'react-dom/client';
import './index_output.css';
import App from './App';
import ViewportProvider from './ViewportContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </React.StrictMode>
);
