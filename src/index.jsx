import React from 'react';
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import './styles.css';
import App from './app/App';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);