import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './styles.css';
import App from './app/App';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);