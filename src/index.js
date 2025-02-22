import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles.css';

fetch('/api')
  .then(res => res.text())
  .then(data => console.log(data));

const root = document.getElementById('root');
createRoot(root).render(
  <div className='p-4'>
    <h1>Hello, Webpack!</h1>
    <p>Webpack is a module bundler for modern JavaScript applications.</p>
    <img src="webpack-logo.png" alt="Webpack logo" />
  </div>
);