import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/styles.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
